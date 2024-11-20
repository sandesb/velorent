import React, { useState, useEffect } from "react";
import { Skeleton } from "@radix-ui/themes";

const Card = ({ vehicle }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Fallback timeout to force load content after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isImageLoaded) {
        setIsImageLoaded(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isImageLoaded]);

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      {/* Skeleton for image */}
      {!isImageLoaded && !hasError && (
        <Skeleton>
          <div className="w-full h-48 bg-gray-300"></div>
        </Skeleton>
      )}

      {/* Fallback for failed image */}
      {hasError ? (
        <div className="w-full h-48 bg-gray-400 flex items-center justify-center text-gray-700">
          Failed to load image
        </div>
      ) : (
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className={`w-full h-48 object-cover ${isImageLoaded ? "" : "hidden"}`}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Content section */}
      <div className="p-4">
        {!isImageLoaded ? (
          <>
            <Skeleton>
              <div className="h-6 bg-gray-300 mb-2 rounded"></div>
            </Skeleton>
            <Skeleton>
              <div className="h-4 bg-gray-300 mb-4 rounded"></div>
            </Skeleton>
            <Skeleton>
              <div className="h-10 bg-gray-300 rounded"></div>
            </Skeleton>
          </>
        ) : (
          <>
            <h3 className="font-semibold text-lg mb-2">{vehicle.name}</h3>
            <p className="text-gray-600 mb-4">${vehicle.price}/day</p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-md">
              Book Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
