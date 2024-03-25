import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16"
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json(
      {
        error: {
          code: "no-access",
          message: "You are not signed in.",
        },
      },
      { status: 401 }
    );
  }

  const payload = await req.json();
  const { subscriptionId } = payload;

  const subscription = await stripe.subscriptions.update(
    subscriptionId, {
      cancel_at_period_end: true,
    }
  );
  return NextResponse.json({ subscription }, { status: 200 });
}
