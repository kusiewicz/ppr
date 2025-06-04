import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";
import { renderStars } from "@/components/RenderStars";

type Product = {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice: number | null;
  delivery: string;
  badge: string | null;
  stock?: string;
};

export const RecommendedProductsSkeleton = () => (
  <section className="mb-12">
    <div className="flex items-center space-x-2 mb-6">
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3" />
    </div>
    <div className="h-5 bg-gray-200 rounded animate-pulse w-2/3 mb-6" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, index) => (
        <Card
          key={index}
          className="bg-white border-0 overflow-hidden shadow-lg"
        >
          <CardContent className="p-0">
            <div className="relative">
              <div className="w-full h-48 bg-gray-200 animate-pulse" />
            </div>
            <div className="p-4 space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="flex items-baseline space-x-2">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/6" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Truck className="w-3 h-3 text-gray-400" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export async function RecommendedProducts() {
  const products: Product[] = await fetch(
    `https://ppr-ovieyof93-kusiewiczs-projects.vercel.app/api/recommended-products`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  if (!products) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-white">
          Recommended Fragrances for You
        </h2>
      </div>
      <p className="text-gray-400 mb-6">
        Based on your preferences and shopping habits
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-white border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-lg"
          >
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs shadow-lg">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-black">{product.name}</h3>
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating, false)}
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl font-bold text-black">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-green-600 text-sm font-semibold">
                        -
                        {Math.round(
                          (1 - product.price / product.originalPrice) * 100
                        )}
                        %
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Truck className="w-3 h-3" />
                  <span>Get it {product.delivery}</span>
                </div>
                {product.stock && (
                  <p className="text-orange-600 text-sm font-medium">
                    {product.stock}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
