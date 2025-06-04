import { NextResponse } from "next/server";

export async function GET() {
  const product = {
    name: "Enchanted Rose Elixir",
    rating: 5,
    description:
      "A captivating blend of Bulgarian rose petals and rare oud wood, creating an intoxicating fragrance that embodies luxury and sophistication. This exquisite elixir opens with fresh bergamot and settles into a warm, sensual base of amber and vanilla.",
    notes: "Bulgarian Rose, Oud Wood, Bergamot, Amber, Vanilla, White Musk",
    images: [
      "https://images.unsplash.com/photo-1613521076081-2820f9746a2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 127,
    originalPrice: 149,
    discount: 15,
    delivery: "Jun 5",
    badge: "Expires in 2 days",
  };

  return NextResponse.json(product);
}
