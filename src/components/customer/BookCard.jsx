import React, { useState } from "react";
import { Skeleton } from "@radix-ui/themes";
import BookDialog from "../../components/customer/BookDialog";

const BookCard = ({ vehicle }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

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
          onError={() => setHasError(true)} // Handle image load errors
        />
      )}

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
              <div className="h-4 bg-gray-300 mb-2 rounded"></div>
            </Skeleton>
            <Skeleton>
              <div className="h-4 bg-gray-300 mb-4 rounded"></div>
            </Skeleton>
          </>
        ) : (
          <>
            <h3 className="font-semibold text-lg mb-2">{vehicle.name}</h3>
            <p className="text-gray-600 mb-2">${vehicle.price}/day</p>
            <p className="text-sm text-gray-500 mb-2">
              Availability: {vehicle.availability}
            </p>
            <p className="text-sm text-gray-500 mb-4">Vendor: {vehicle.vendor}</p>
            <BookDialog vehicle={vehicle} />
          </>
        )}
      </div>
    </div>
  );
};

export default BookCard;
