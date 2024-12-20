import "next-auth";

declare module "next-auth" {
  interface User {
    login: string;
    role: string;
  }

  interface Session {
    user: User & {
      login: string;
      role: string;
    };
  }
} 