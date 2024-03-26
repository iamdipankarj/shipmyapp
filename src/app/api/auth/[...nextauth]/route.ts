import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { sendMagicLink } from "@/emails/send-magic-link";
import prisma from "@/lib/db";
import StripeHelper from "@/lib/stripe";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    signOut: "/"
  },
  session: {
    strategy: "database",
  },
  // added secret key
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! ?? ""
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID! ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET! ?? ""
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
  events: {
		createUser: async ({ user }) => {
			const stripe = new StripeHelper();
      stripe.createCustomer(user.email!, user.name!).then(async (customer) => {
        return prisma.user.update({
          where: { id: user.id },
          data: {
            stripeCustomerId: customer.id,
          },
        });
      });
		},
	},
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
    async session({ session, user }) {
      if (user) {
        session!.user!.id = user.id;
        session!.user!.stripeCustomerId = user.stripeCustomerId;
        session!.user!.isSubscribed = user.isSubscribed;
      }
			return session;
		},
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
