import BookTable from "../../components/customer/BookTable";

const sampleBookings = [
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
  
const Bookings = () => {
  return (
    <div> <BookTable bookings={sampleBookings} /></div>
  )
}

export default Bookings