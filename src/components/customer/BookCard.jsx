import React, { useState } from "react";
import { Skeleton } from "@radix-ui/themes";
import BookDialog from "../../components/customer/BookDialog";

const BookCard = ({ vehicle }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [rentDays, setRentDays] = useState(1); // Number of days for rent
  const [totalRent, setTotalRent] = useState(vehicle.rate_per_day); // Total rent calculation

  // Calculate total rent based on rate_per_day and number of days
  const calculateRent = (days) => {
    const rent = days * vehicle.rate_per_day;
    setTotalRent(rent);
  };

  const handleDaysChange = (e) => {
    const days = parseInt(e.target.value, 10) || 0;
    setRentDays(days);
    calculateRent(days); // Update total rent whenever days change
  };

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
          src={vehicle.photo} // Use the correct field for the image
          alt={vehicle.model} // Use the model as the alt text
          className={`w-full h-48 object-cover ${isImageLoaded ? "" : "hidden"}`}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setHasError(true)} // Handle image load errors
        />
      )}

      <div className="p-4">
        {!isImageLoaded ? (
          <>
            <Skeleton>
              <div className="h-6 bg-gray-300 mb-2 rounded"></div>
            </Skeleton>
            <Skeleton>
              <div className="h-4 bg-gray-300 mb-4 rounded"></div>
            </Skeleton>
          </>
        ) : (
          <>
            <h3 className="font-semibold text-lg mb-2">{vehicle.model}</h3>
            <p className="text-gray-600 mb-2">${vehicle.rate_per_day}/day</p>
            <p className="text-sm text-gray-500 mb-2">
              Availability: {vehicle.availability_status}
            </p>
            <p className="text-sm text-gray-500 mb-4">Type: {vehicle.type}</p>

            {/* Pass vehicle data to BookDialog */}
            <BookDialog
              vehicle={vehicle}
              onBookNow={() => console.log(`Selected Vehicle ID: ${vehicle.id}`)} // Log selected vehicle ID
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BookCard;
