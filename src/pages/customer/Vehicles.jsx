import React, { useState } from "react";
import FilterBox from "../../components/customer/FilterBox";
import BookDialog from "../../components/customer/BookDialog";
const vehicles = [
  {
    id: 1,
    name: "Luxury SUV",
    type: "SUV",
    price: 99,
    availability: "Available",
    vendor: "Vendor A",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
  },
  {
    id: 2,
    name: "Economy Sedan",
    type: "Sedan",
    price: 49,
    availability: "Booked",
    vendor: "Vendor B",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
  },
  {
    id: 3,
    name: "Sports Car",
    type: "Coupe",
    price: 149,
    availability: "Maintenance",
    vendor: "Vendor A",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
  },
];

const Vehicles = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleFilter = (filters) => {
    const { types, availability, vendor } = filters;

    const filtered = vehicles.filter((vehicle) => {
      const matchesType = types.length === 0 || types.includes(vehicle.type);
      const matchesAvailability =
        availability.length === 0 ||
        availability.includes(vehicle.availability);
      const matchesVendor = vendor.length === 0 || vendor.includes(vehicle.vendor);

      return matchesType && matchesAvailability && matchesVendor;
    });

    setFilteredVehicles(filtered);
  };

  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      <div className="w-64">
        <FilterBox onFilter={handleFilter} />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Featured Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-2">${vehicle.price}/day</p>
                <p className="text-sm text-gray-500 mb-2">
                  Availability: {vehicle.availability}
                </p>
                <p className="text-sm text-gray-500 mb-4">Vendor: {vehicle.vendor}</p>
                <BookDialog vehicle={vehicle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
