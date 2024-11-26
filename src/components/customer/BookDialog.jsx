import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon, CreditCardIcon } from "lucide-react";
import vehiclesApi from "../../services/vehiclesApi"; // Import the API service
import bookingsApi from "../../services/bookingsApi"; // Import the bookings API service
import { showSuccessToast } from "../../utils/toastUtils";
const BookDialog = ({ vehicle, onBookNow }) => {
  const [durationType, setDurationType] = useState("Days");
  const [number, setNumber] = useState(1);
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState(null);
  const [qrCode, setQrCode] = useState(null); // QR code state
  const navigate = useNavigate();

  const handleDialogOpen = async () => {
    console.log(`Booking Vehicle ID: ${vehicle.id}`);
    try {
      const response = await vehiclesApi.getVehiclesById(vehicle.id);
      console.log("Response from API:", response.data);
      setQrCode(response.data.qr_code);
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
    }
  };

  const calculateRent = () => {
    const multiplier = durationType === "Days" ? 1 : 7;
    const totalRent = vehicle.rate_per_day * number * multiplier; // Use rate_per_day for calculation
    setRent(totalRent);
  };

  const proceedToPayment = async () => {
    if (rent !== null) {
      const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
      const currentDate = new Date().toISOString().split("T")[0]; // Format date as 'YYYY-MM-DD'
  
      const bookingData = {
        id: crypto.randomUUID(), // Generate a unique ID for the booking
        vehicle: vehicle.model, // Vehicle model from the data
        price_per_day: vehicle.rate_per_day, // Price per day
        duration: `${number} ${durationType}`, // Duration from the form
        pick_up: location, // Pick-up location from the form
        total_rent: rent, // Calculated total rent
        customer: userId, // User ID from localStorage
        date: currentDate, // Current date
        vendor: vehicle.user_id, // Vendor from the vehicle data
      };
  
      console.log("Booking Data to Submit:", bookingData);
  
      try {
        const response = await bookingsApi.addBooking(bookingData); // Send booking data to API
        console.log("Booking Response:", response);
  
        // Show success toast
        showSuccessToast("Booking Successful. Please Pay Your Rent.");
  
        // Navigate to the Payment page with booking details
        navigate("/dashboard/payment", {
          state: {
            totalRent: rent.toFixed(2),
            qrCode: qrCode,
            bookingId: bookingData.id, // Pass the booking ID for reference
          },
        });
      } catch (error) {
        console.error("Error creating booking:", error);
        alert("Failed to create booking. Please try again later.");
      }
    } else {
      alert("Please calculate the rent before proceeding to payment!");
    }
  };

  return (
    <Dialog.Root onOpenChange={handleDialogOpen}>
      <Dialog.Trigger asChild>
        <button className="w-full py-2 bg-blue-600 text-white rounded-md">
          Book Now
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-4">
            Book {vehicle.model}
          </Dialog.Title>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="duration">
              Duration Type
            </label>
            <select
              id="duration"
              value={durationType}
              onChange={(e) => setDurationType(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
            </select>
          </fieldset>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="number">
              Number ({durationType})
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border rounded px-2 py-1"
              min="1"
            />
          </fieldset>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="location">
              Pick-up Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded px-2 py-1"
            />
          </fieldset>
          {rent !== null && (
            <>
              <div className="mb-4 text-green-600 font-bold">
                Total Rent: ${rent.toFixed(2)}
              </div>
              <div className="flex justify-center mb-4">
                <button
                  onClick={proceedToPayment}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  <CreditCardIcon className="w-5 h-5" />
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
          <div className="flex justify-end gap-2">
            <button
              onClick={calculateRent}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Calculate Rent
            </button>
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-gray-300 rounded-md">Close</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-2 top-2 text-gray-600 hover:text-black"
              aria-label="Close"
            >
              <CrossIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BookDialog;
