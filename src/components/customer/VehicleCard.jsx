import React, { useState } from "react";
import { Skeleton } from "@radix-ui/themes";

const VehicleCard = ({ imageSrc, title, price }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false); // To handle image loading errors

  return (
    <div className="border rounded-lg overflow-hidden">
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
          src={imageSrc}
          alt={title}
          className={`w-full h-48 object-cover ${isImageLoaded ? "" : "hidden"}`}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setHasError(true)} // Handle image load errors
        />
      )}

      {/* Content Section */}
      <div className="p-4">
        {/* Skeleton for content */}
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
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{price}</p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-md">
              Book Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VehicleCard;
