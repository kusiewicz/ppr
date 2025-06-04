import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from "@/components/RecommendedProducts";
import { Reviews, ReviewsSkeleton } from "@/components/Reviews";
import { SingleProduct } from "@/components/SingleProduct";
import { Suspense } from "react";
// import { Suspense } from "react";

export default function FragranceApp() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <SingleProduct />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
