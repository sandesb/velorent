import React, { useState } from "react";
import { Table } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon } from "lucide-react";
import BookList from "../BookList";

const bookings = [
  {
    id: 1,
    vehicleName: "Luxury SUV",
    pricePerDay: 99,
    duration: 5,
    durationType: "Days",
    pickupLocation: "New York",
    totalRent: 495,
    vendor: "Vendor A",
    customer: "Customer X",
    date: "2024-11-20",
  },
  {
    id: 2,
    vehicleName: "Economy Sedan",
    pricePerDay: 49,
    duration: 3,
    durationType: "Weeks",
    pickupLocation: "Los Angeles",
    totalRent: 1029,
    vendor: "Vendor B",
    customer: "Customer Y",
    date: "2024-11-21",
  },
];

// Headers for the table, adjusted dynamically
const staticHeaders = [
  "S.N",
  "Vehicle Name",
  "Price/Day",
  "Duration",
  "Pick-up",
  "Date",
];

const BookTable = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Check the `isLogin` key in localStorage
  const loginType = localStorage.getItem("loginType") || "customer";

  // Determine whether to show 'Vendor' or 'Customer' in the column header
  const dynamicHeader = loginType === "Vendor" ? "Vendor" : "Customer";

  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="p-4">
      <Table.Root className="w-full border border-gray-300 rounded-md shadow-md">
        <Table.Header>
          <Table.Row>
            {staticHeaders.map((header, index) => (
              <Table.ColumnHeaderCell key={index}>{header}</Table.ColumnHeaderCell>
            ))}
            <Table.ColumnHeaderCell>{dynamicHeader}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bookings.map((booking, index) => (
            <Table.Row
              key={booking.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(booking)}
            >
              <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
              <Table.Cell>{booking.vehicleName}</Table.Cell>
              <Table.Cell>${booking.pricePerDay}</Table.Cell>
              <Table.Cell>
                {booking.duration} {booking.durationType}
              </Table.Cell>
              <Table.Cell>{booking.pickupLocation}</Table.Cell>
              <Table.Cell>{booking.date}</Table.Cell>
              <Table.Cell>
                {loginType === "vendor" ? booking.vendor : booking.customer}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {selectedBooking && (
        <Dialog.Root
          open={!!selectedBooking}
          onOpenChange={() => setSelectedBooking(null)}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg">
              <Dialog.Title className="text-lg font-bold mb-4">
                Booking Details
              </Dialog.Title>

              <BookList booking={selectedBooking} />

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
      )}
    </div>
  );
};

export default BookTable;
