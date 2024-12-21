import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "@/shared/lib/db"
import { passwordService } from "@/enteties/user/services/password"
import { AuthOptions } from "next-auth"
import ShortUniqueId from 'short-unique-id'
import { generateReferralCode } from "@/enteties/user/services/referralcode-generation"

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Login", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { login: credentials.login },
              { email: credentials.login }
            ]
          }
        })

        if (!user) return null

        const isValidPassword = await passwordService.verifyPassword(
          credentials.password,
          user.password,
          user.salt
        )

        if (!isValidPassword) return null

        return {
          id: user.id.toString(),
          login: user.login,
          email: user.email,
          role: user.role
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findFirst({
          where: {
            email: user.email!
          }
        });

        if (!existingUser) {
          const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });
          await prisma.user.create({
            data: {
              id: parseInt(uid.randomUUID()),
              email: user.email!,
              login: user.email!.split('@')[0],
              role: "USER",
              password: "",
              salt: "",
              referralCode: generateReferralCode()
            }
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findFirst({
          where: {
            email: user.email!
          }
        });
        
        if (dbUser) {
          token.id = dbUser.id.toString();
          token.role = dbUser.role;
          token.login = dbUser.login;
          token.email = dbUser.email;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.login = token.login as string;
        session.user.email = token.email as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {

      if (url.startsWith(baseUrl)) return url
      if (url.startsWith('/')) return `${baseUrl}${url}`
      return baseUrl
    }
  },
  pages: {
    signIn: '/sign-in'
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 