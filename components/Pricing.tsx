import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCartIcon } from "lucide-react";
import { Suspense } from "react";

type Product = {
  name: string;
  rating: number;
  description: string;
  notes: string;
  images: string[];
  price: number;
  originalPrice: number;
  discount: number;
  delivery: string;
  badge: string;
  id: string;
};

function LoadingDots() {
  return (
    <div className="text-base">
      <span className="space-x-1">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full text-white">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full text-white">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full text-white">
          &bull;
        </span>
      </span>
    </div>
  );
}

async function UserSpecificDetails({ productId }: { productId: string }) {
  const data = await fetch(
    `https://frag-api.onrender.com/api/single-product?id=${productId}`,
    {
      cache: "no-store",
    }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product = (await data.json()) as Product;

  return (
    <>
      <div className="flex items-center space-x-2 text-xs">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <span className="text-gray-300">
          Get it{" "}
          <span className="font-semibold text-blue-400">
            {product.delivery}
          </span>{" "}
          by 5pm
        </span>
      </div>
    </>
  );
}

export const PricingSkeleton = () => (
  <Card className="bg-gray-900 border-gray-700 p-5 shadow-xl">
    <div className="space-y-3">
      <div className="h-5 bg-gray-800 rounded animate-pulse w-1/4" />
      <div className="flex items-baseline space-x-2">
        <div className="h-7 bg-gray-800 rounded animate-pulse w-1/6" />
        <div className="h-5 bg-gray-800 rounded animate-pulse w-1/8" />
        <div className="h-4 bg-gray-800 rounded animate-pulse w-1/8" />
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <div className="h-4 bg-gray-800 rounded animate-pulse w-1/3" />
      </div>
      <div className="h-10 bg-gray-800 rounded animate-pulse w-full" />
      <div className="h-10 bg-gray-800 rounded animate-pulse w-full" />
    </div>
  </Card>
);

export function Pricing({ product }: { product: Product }) {
  return (
    <Card className="bg-gray-900 border-gray-700 p-5 shadow-xl">
      <div className="space-y-3">
        <Badge className="bg-blue-600 text-white shadow-lg text-xs">
          {product.badge}
        </Badge>
        <div className="flex items-baseline space-x-2">
          <span className="text-lg font-semibold text-green-400">
            -{product.discount}%
          </span>
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ${product.originalPrice}
          </span>
        </div>

        <Suspense fallback={<LoadingDots />}>
          <UserSpecificDetails productId={product.id} />
        </Suspense>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 shadow-lg text-sm cursor-pointer">
          <ShoppingCartIcon />
          Add to Cart
        </Button>
        <Button
          variant="secondary"
          className="w-full shadow-lg py-2.5 text-sm bg-pink-500 hover:bg-pink-600 text-white cursor-pointer"
        >
          <Heart className="w-4 h-4" />
          Add to Wishlist
        </Button>
      </div>
    </Card>
  );
}
