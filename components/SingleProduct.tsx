import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { renderStars } from "@/components/RenderStars";

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
    </div>
  </div>
);

export async function SingleProduct() {
  const product: Product = await fetch(
    `${process.env.URL}/api/single-product`
  ).then((res) => res.json());

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
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 shadow-lg text-sm">
              Add to Cart
            </Button>
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 shadow-lg py-2.5 text-sm"
            >
              <Heart className="w-4 h-4 mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
