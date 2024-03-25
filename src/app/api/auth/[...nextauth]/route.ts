import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { sendMagicLink } from "@/emails/send-magic-link";
import prisma from "@/lib/db";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    signOut: "/"
  },
  session: { 
    strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
  },
  // added secret key
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! ?? ""
    }),
    EmailProvider({
      type: "email",
      server: null,
      async sendVerificationRequest({identifier: email, url}) {
        sendMagicLink({
          identifier: email,
          url
        })
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user }) {
      /**
       * This function is called whenever a user logs in.
       * It should return true if the user is allowed to sign in.
       * You can have business logic here to indicate if this user is allowed to sign in or not.
       * By default it returns true
       * @default return true
       */
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken
      return session
    }
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
