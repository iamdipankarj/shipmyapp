import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/db";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/", // Redirect users to "/login" when signing in
  },
  // session: { 
  //   strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
  // },
  // added secret key
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! ?? ""
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user }) {
      // @TODO Push user to the database
      return true;
    }
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
