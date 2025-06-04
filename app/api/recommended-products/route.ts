import { NextResponse } from "next/server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  await delay(800);

  const recommendedProducts = [
    {
      id: 1,
      name: "Velvet Rose Oud",
      image:
        "https://images.unsplash.com/photo-1635798083332-7e14d2ca1d2b?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      price: 89,
      originalPrice: null,
      delivery: "tomorrow, Jun 4",
      badge: null,
    },
    {
      id: 2,
      name: "Midnight Bergamot",
      image:
        "https://images.unsplash.com/photo-1693960794723-09c5e02264e3?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      price: 156,
      originalPrice: 195,
      delivery: "Jun 5",
      badge: "Bestseller",
    },
    {
      id: 3,
      name: "Amber Noir Intense",
      image:
        "https://images.unsplash.com/photo-1581021412183-bfc77db44f4b?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      price: 234,
      originalPrice: null,
      delivery: "Jun 5",
      badge: null,
    },
    {
      id: 4,
      name: "Citrus Garden Fresh",
      image:
        "https://images.unsplash.com/photo-1614763344181-562bb314fb56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      price: 167,
      originalPrice: null,
      delivery: "Jun 7",
      badge: null,
      stock: "Only 1 left in stock",
    },
  ];

  return NextResponse.json(recommendedProducts);
}
