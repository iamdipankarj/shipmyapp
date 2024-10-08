import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16"
});

export async function POST(req: NextRequest) {
  const payload = await req.json();
  
  const { mode, priceId, userId, productId } = payload;

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

  const checkoutBody = {
    mode,
    customer: session.user.stripeCustomerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId,
      productId
    },
    success_url: `${process.env.HOST_NAME}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOST_NAME}/checkout/failure?session_id={CHECKOUT_SESSION_ID}`
  } as any

  if (mode === "subscription") {
    checkoutBody.subscription_data = {
      metadata: {
        payingUserId: session.user.id,
      },
      trial_period_days: 14,
    }
  }

  const checkoutSession = await stripe.checkout.sessions.create(checkoutBody);
  if (!checkoutSession.url) {
    return NextResponse.json(
      {
        error: {
          code: "stripe-error",
          message: "Could not create checkout session",
        },
      },
      { status: 500 }
    );
  }
  return NextResponse.json({ session: checkoutSession }, { status: 200 });
}
