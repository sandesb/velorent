import React from "react";
import { DataList } from "@radix-ui/themes";

const BookList = ({ booking }) => {
  if (!booking) return null;

  const loginType = localStorage.getItem("isLogin") || "customer";

  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label minWidth="88px">Vehicle</DataList.Label>
        <DataList.Value>{booking.vehicleName}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Price/Day</DataList.Label>
        <DataList.Value>${booking.pricePerDay}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Duration</DataList.Label>
        <DataList.Value>
          {booking.duration}
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Pick-Up</DataList.Label>
        <DataList.Value>{booking.pickupLocation}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Total Rent</DataList.Label>
        <DataList.Value>${booking.totalRent}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          {loginType === "vendor" ? "Vendor" : "Customer"}
        </DataList.Label>
        <DataList.Value>
          {loginType === "vendor" ? booking.vendor : booking.customer}
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Date</DataList.Label>
        <DataList.Value>{booking.date}</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};

export default BookList;
