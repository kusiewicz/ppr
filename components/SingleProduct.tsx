import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { renderStars } from "@/components/RenderStars";
import { Pricing, PricingSkeleton } from "./Pricing";

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

export const SingleProductSkeleton = () => (
  <div className="grid gap-8 mb-12 md:grid-cols-2">
    <div className="space-y-4">
      <Card className="bg-white border-0 overflow-hidden shadow-xl">
        <CardContent className="p-0">
          <div className="w-full h-64 bg-gray-200 animate-pulse" />
        </CardContent>
      </Card>
      <div className="flex space-x-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <div className="h-7 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4 mb-3" />
        <div className="space-y-1.5">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6" />
        </div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3 mt-3" />
      </div>

      <PricingSkeleton />
    </div>
  </div>
);

export async function SingleProduct() {
  const response = await fetch(
    `https://ppr-ovieyof93-kusiewiczs-projects.vercel.app/api/single-product`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  const product = (await response.json()) as Product;

  if (!product) {
    return null;
  }

  return (
    <div className="grid gap-8 mb-12 md:grid-cols-2">
      <div className="space-y-4">
        <Card className="bg-white border-0 overflow-hidden shadow-xl h-104">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full object-cover h-full"
            quality={100}
          />
        </Card>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-white">{product.name}</h1>
          <div className="flex items-center space-x-1 mb-3">
            {renderStars(product.rating, true)}
          </div>
          <p className="text-gray-300 leading-relaxed text-sm mb-3">
            {product.description}
          </p>
          <p className="text-gray-400 text-xs">Notes: {product.notes}</p>
        </div>

        <Pricing product={product} />
      </div>
    </div>
  );
}
