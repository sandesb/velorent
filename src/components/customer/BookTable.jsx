import React, { useState, useEffect } from "react";
import { Table } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon } from "lucide-react";
import BookList from "../BookList";
import bookingsApi from "../../services/bookingsApi"; // Import the bookings API
import usersApi from "../../services/usersApi"; // Import the users API

const BookTable = () => {
  const [bookings, setBookings] = useState([]); // Bookings data
  const [users, setUsers] = useState({}); // Users data mapped by user ID
  const [selectedBooking, setSelectedBooking] = useState(null); // Selected booking for dialog
  const loginType = localStorage.getItem("role") || "Customer"; // Role from localStorage
  const userId = localStorage.getItem("userId"); // Logged-in user ID from localStorage

  // Fetch bookings and users
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bookings
        const bookingsResponse =
          loginType === "Customer"
            ? await bookingsApi.getBookingsByCustomerId(userId)
            : await bookingsApi.getBookingsByVendorId(userId);
        const bookingsData = bookingsResponse.data || [];
        console.log("Bookings Data:", bookingsData);
  
        // Fetch all users
        const usersResponse = await usersApi.getUsers();
        console.log("Full Users API Response:", usersResponse);
  
        // Extract users data
        const usersData = Array.isArray(usersResponse)
          ? usersResponse
          : Array.isArray(usersResponse.data)
          ? usersResponse.data
          : [];
        console.log("Processed Users Data (Final):", usersData);
  
        // Map user IDs to their names
        const usersMap = usersData.reduce((map, user) => {
          if (user.id && user.full_name) {
            map[user.id] = user.full_name;
          }
          return map;
        }, {});
  
        console.log("Users Map:", usersMap);
  
        // Update bookings with user names
        const updatedBookings = bookingsData.map((booking) => ({
          ...booking,
          customerName: usersMap[booking.customer] || booking.customer,
          vendorName: usersMap[booking.vendor] || booking.vendor,
        }));
  
        setBookings(updatedBookings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [loginType, userId]);
  
  
  
  

  // Handle row click to open dialog
  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
  };

  // Dynamic table header
  const dynamicHeader = loginType === "Customer" ? "Vendor" : "Customer";

  return (
    <div className="p-4">
      <Table.Root className="w-full border border-gray-300 rounded-md shadow-md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>S.N</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Vehicle Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price/Day</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Duration</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Pick-up</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{dynamicHeader}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <Table.Row
                key={booking.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(booking)}
              >
                <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
                <Table.Cell>{booking.vehicle}</Table.Cell>
                <Table.Cell>${booking.price_per_day}</Table.Cell>
                <Table.Cell>{booking.duration}</Table.Cell>
                <Table.Cell>{booking.pick_up}</Table.Cell>
                <Table.Cell>{booking.date}</Table.Cell>
                <Table.Cell>
                  {loginType === "Customer"
                    ? booking.vendorName // Show vendor name for Customer view
                    : booking.customerName} 
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={7} className="text-center text-gray-500">
                No bookings found.
              </Table.Cell>
            </Table.Row>
          )}
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
