import React from "react";
import { useLocation } from "react-router-dom";
import esewaImage from "../assets/esewa.jpg";

const Payment = () => {
  const location = useLocation();
  const totalRent = location.state?.totalRent || "N/A"; // Fallback to 'N/A' if not provided

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
        You will soon receive a call.
      </p >
      <img
        src={esewaImage}
        alt="Esewa QR Code"
        className="w-1/3 h-auto rounded-md"
      />
    </div>
  );
};

export default Payment;
