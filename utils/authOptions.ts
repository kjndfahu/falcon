import {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@/shared/lib/db";
import {passwordService} from "@/enteties/user/services/password";
import ShortUniqueId from "short-unique-id";
import {generateReferralCode} from "@/enteties/user/services/referralcode-generation";
import crypto from 'crypto';
import {sessionService} from "@/enteties/user/services/session";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
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
                try {
                    let dbUser = await prisma.user.findFirst({
                        where: {
                            email: user.email!
                        }
                    });

                    if (!dbUser) {
                        const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });
                        const randomPassword = crypto.randomBytes(32).toString('hex');
                        const { hash, salt } = await passwordService.hashPassword(randomPassword);
                        
                        dbUser = await prisma.user.create({
                            data: {
                                id: parseInt(uid.randomUUID()),
                                email: user.email!,
                                login: user.email!.split('@')[0],
                                role: "USER",
                                password: hash,
                                salt: salt,
                                isBlocked: false,
                                referralCode: generateReferralCode(),
                                referredBy: 0,
                                discountRate: 0
                            }
                        });


                    }


                    user.id = dbUser.id.toString();
                    user.role = dbUser.role;
                    user.login = dbUser.login;


                    await sessionService.addSession(dbUser);
                    
                    return true;
                } catch (error) {
                    console.error("Error in signIn callback:", error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, trigger, session, user }) {
            if (user) {
                // При первой авторизации или после OAuth
                token.id = user.id;
                token.email = user.email;
                token.role = user.role;
                token.login = user.login;
            } else if (trigger === "update" && session?.email && session.email !== token.email) {
                // При обновлении email
                token.email = session.email;
                await prisma.user.update({
                    where: { id: parseInt(token.id) },
                    data: { email: session.email }
                });
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.role = token.role;
                session.user.login = token.login;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Если это URL для callback после OAuth, направляем на personal-cabinet
            if (url.includes('/api/auth/callback/')) {
                return `${baseUrl}/personal-cabinet`;
            }
            // Если URL начинается с baseUrl, используем его
            if (url.startsWith(baseUrl)) {
                return url;
            }
            // По умолчанию направляем на personal-cabinet
            return `${baseUrl}/personal-cabinet`;
        }
    },
    pages: {
        signIn: '/sign-in',
        error: '/auth/error',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    debug: process.env.NODE_ENV === 'development',
}