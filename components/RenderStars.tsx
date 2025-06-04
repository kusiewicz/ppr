import { Star } from "lucide-react";
import React from "react";

export const renderStars = (rating: number, onDark = false) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : onDark ? "text-gray-600" : "text-gray-300"}`}
    />
  ));
}; 