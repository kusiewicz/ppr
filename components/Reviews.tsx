import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { renderStars } from "@/components/RenderStars";

type Review = {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
};

export const ReviewsSkeleton = () => (
  <section>
    <div className="flex items-center space-x-2 mb-6">
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="h-8 bg-gray-200 rounded animate-pulse w-1/4" />
    </div>

    <div className="space-y-6">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="bg-gray-900 border-gray-700 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 animate-pulse" />
              <div className="flex-1 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-5 bg-gray-800 rounded animate-pulse w-1/4" />
                  <div className="h-4 bg-gray-800 rounded animate-pulse w-1/6" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-800 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-800 rounded animate-pulse w-5/6" />
                  <div className="h-4 bg-gray-800 rounded animate-pulse w-4/6" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export async function Reviews() {
  const reviews: Review[] = await fetch(
    `https://frag-api.onrender.com/api/reviews`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  if (!reviews) {
    return null;
  }

  return (
    <section>
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-white">Customer Reviews</h2>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-gray-900 border-gray-700 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-10 h-10 shadow-lg">
                  <AvatarFallback className="bg-gray-700 text-white font-semibold">
                    {review.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating, true)}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
