import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const totalRent = location.state?.totalRent || "N/A"; // Fallback to 'N/A' if not provided
  const qrCode = location.state?.qrCode || ""; // Fallback to an empty string if not provided
  const vehicleId = location.state?.vehicleId || "Unknown"; // Fallback for debugging

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen rounded-lg"
      style={{
        backgroundColor: "#1E293B", // Replace with your desired background color
      }}
    >
      <h1 className="text-white text-2xl mb-6 font-bold">
        Please pay your Rent: ${totalRent}
      </h1>
      <p className="text-white text-md mb-6 font-bold">
        You will soon receive a call for the booking.
      </p>
      <div className="flex flex-col items-center">
        {qrCode ? (
          <img
            src={qrCode}
            alt={`QR Code for Vehicle ID: ${vehicleId}`}
            className="w-1/3 h-auto rounded-md mb-4"
          />
        ) : (
          <p className="text-red-500 font-bold">
            QR Code not available for Vehicle ID: {vehicleId}
          </p>
        )}
        <p className="text-gray-400 text-sm">
          Scan the QR code using your preferred payment app.
        </p>
      </div>
    </div>
  );
};

export default Payment;
