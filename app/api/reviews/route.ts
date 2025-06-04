import { NextResponse } from 'next/server';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  // Simulate network delay
  await delay(400);

  const reviews = [
    {
      name: "Sarah Chen",
      rating: 4,
      comment: "Absolutely stunning fragrance! The longevity is incredible and the sillage is perfect for evening wear. The rose and oud blend beautifully together.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      rating: 5,
      comment: "This is my signature scent now. Compliments everywhere I go!",
      avatar: "MJ",
    },
    {
      name: "Elena Rodriguez",
      rating: 4,
      comment: "Luxurious and sophisticated. Perfect for special occasions and date nights.",
      avatar: "ER",
    },
  ];

  return NextResponse.json(reviews);
} 