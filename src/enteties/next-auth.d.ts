import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    login: string;
    email: string;
    role: string;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id?: string;
    role?: string;
    login?: string;
    email?: string;
  }
} 