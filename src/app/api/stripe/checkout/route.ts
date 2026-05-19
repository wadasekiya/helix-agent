import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: "Helix Agent Support",
              description: "Support autonomous intelligence development",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    console.log("SESSION:", session);

    if (!session.url) {
      throw new Error("Stripe session.url is null");
    }

    return NextResponse.json({ url: session.url });

  } catch (err) {
    console.error("Stripe ERROR:", err);

    return NextResponse.json(
      { error: "Stripe session creation failed" },
      { status: 500 }
    );
  }
}