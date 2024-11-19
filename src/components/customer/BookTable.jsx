import React, { useState } from "react";
import { Table, DataList, Link, Badge, Flex, Code } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon } from "lucide-react";

const bookings = [
  {
    id: 1,
    vehicleName: "Luxury SUV",
    pricePerDay: 99,
    duration: 5,
    durationType: "Days",
    pickupLocation: "New York",
    totalRent: 495,
  },
  {
    id: 2,
    vehicleName: "Economy Sedan",
    pricePerDay: 49,
    duration: 3,
    durationType: "Weeks",
    pickupLocation: "Los Angeles",
    totalRent: 1029,
  },
];

const BookTable = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="p-4">
      <Table.Root className="w-full border border-gray-300 rounded-md shadow-md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Vehicle Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price/Day</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Duration</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Pick-up</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bookings.map((booking) => (
            <Table.Row
              key={booking.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(booking)}
            >
              <Table.RowHeaderCell>{booking.vehicleName}</Table.RowHeaderCell>
              <Table.Cell>${booking.pricePerDay}</Table.Cell>
              <Table.Cell>
                {booking.duration} {booking.durationType}
              </Table.Cell>
              <Table.Cell>{booking.pickupLocation}</Table.Cell>
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

              {/* DataList for Additional Info */}
              <DataList.Root>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Vehicle</DataList.Label>
                  <DataList.Value>{selectedBooking.vehicleName}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Price/Day</DataList.Label>
                  <DataList.Value>${selectedBooking.pricePerDay}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Duration</DataList.Label>
                  <DataList.Value>
                    {selectedBooking.duration} {selectedBooking.durationType}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">
                    Pick-Up
                  </DataList.Label>
                  <DataList.Value>{selectedBooking.pickupLocation}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Total Rent</DataList.Label>
                  <DataList.Value>${selectedBooking.totalRent}</DataList.Value>
                </DataList.Item>
              </DataList.Root>

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
