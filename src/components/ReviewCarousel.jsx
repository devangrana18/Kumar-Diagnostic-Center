import React from "react";
import { useState, useEffect } from "react";
import { reviews as defaultReviews } from "../data/reviews";
import AddReviewCard from "./AddReviewCard.jsx";
import { stringify } from "postcss";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"))
    setReviews(storedReviews || defaultReviews)
  }, [])

  const handleNewReview = (review) => {
    const updated = [review, ...reviews]

    setReviews(updated)
    localStorage.setItem("reviews", JSON.stringify(updated))
    console.log(reviews)
  }


  return (
    <div className="overflow-hidden w-full bg-blue-50 py-6">
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          ⭐ Customer Reviews ⭐
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">


          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[350px] p-6 rounded-xl border shadow text-center relative"
            >
              <p className="italic text-gray-600 mb-3">"{item.review}"</p>

              <div className="text-yellow-500 text-xl mb-2">
                {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
              </div>

              <p className="font-semibold text-blue-700">- {item.name}</p>
            </div>
          ))}
          <AddReviewCard onSubmit={handleNewReview} />
          <style>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(60%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
        </div>

      </div>
    </div>
  );
};

export default ReviewCarousel;
