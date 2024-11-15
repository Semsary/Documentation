import React from "react";

const Rating = ({ rating = 0, maxRating = 5 }) => {
  // Generate an array for the total number of stars
  const stars = Array.from({ length: maxRating }, (_, index) => index < rating);

  return (
    <div className="flex flex-row gap-2">
      <div className="flex items-center">
        {stars.map((isFilled, index) => (
          <svg
            key={index}
            className={`shrink-0 size-5 ${
              isFilled
                ? "text-yellow-400 dark:text-yellow-600"
                : "text-gray-300 dark:text-neutral-600"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        ))}
      </div>
      <p className="text-gray-500 text font-bold pt-1 ">{rating}</p>
    </div>
  );
};

export default Rating;
