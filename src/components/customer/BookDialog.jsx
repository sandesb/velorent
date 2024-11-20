import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon, CreditCardIcon } from "lucide-react";

const BookDialog = ({ vehicle }) => {
  const [durationType, setDurationType] = useState("Days");
  const [number, setNumber] = useState(1);
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState(null);
  const navigate = useNavigate();

  const calculateRent = () => {
    const multiplier = durationType === "Days" ? 1 : 7;
    const totalRent = vehicle.price * number * multiplier;
    setRent(totalRent);
  };

  const proceedToPayment = () => {
    if (rent !== null) {
      // Navigate to the Payment page with state
      navigate("/dashboard/payment", { state: { totalRent: rent.toFixed(2) } });
    } else {
      alert("Please calculate the rent before proceeding to payment!");
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-full py-2 bg-blue-600 text-white rounded-md">
          Book Now
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-4">
            Book {vehicle.name}
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
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="location"
            >
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
