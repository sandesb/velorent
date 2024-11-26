import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast"; // Import react-hot-toast
import FilterBox from "../../components/customer/FilterBox";
import BookCard from "../../components/customer/BookCard";
import vehiclesApi from "../../services/vehiclesApi"; // Import the API service for vehicles

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]); // All vehicles fetched from the backend
  const [filteredVehicles, setFilteredVehicles] = useState([]); // Vehicles filtered by filter criteria
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch all vehicles from the backend when the component mounts
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        console.log("Fetching vehicles...");
        const response = await vehiclesApi.getVehicles(); // Fetch vehicles from the backend
        console.log("Fetched vehicles data:", response.data); // Debug log for fetched data
        setVehicles(response.data); // Set fetched vehicles
        setFilteredVehicles(response.data); // Initialize filtered vehicles with all fetched vehicles
      } catch (error) {
        console.error("Failed to fetch vehicles:", error); // Log fetch errors
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchVehicles();
  }, []);

  // Handle filtering logic
  const handleFilter = (filters) => {
    console.log("Applying filters:", filters); // Debug log to inspect filters
    const { types, availability } = filters;

    const filtered = vehicles.filter((vehicle) => {
      // Safely access vehicle properties
      const vehicleType = vehicle.type || ""; // Fallback to empty string if undefined
      const vehicleAvailability = vehicle.availability_status || ""; // Fallback to empty string if undefined

      const matchesType =
        types.length === 0 || types.includes(vehicleType); // Match type filter
      const matchesAvailability =
        availability.length === 0 || availability.includes(vehicleAvailability); // Match availability filter

      return matchesType && matchesAvailability; // Return true if all filters match
    });

    console.log("Filtered vehicles:", filtered); // Debug log to inspect filtered vehicles
    setFilteredVehicles(filtered); // Update filtered vehicles

    // Generate and show dynamic toast message
    const appliedFilters = [];
    if (types.length > 0) appliedFilters.push(`Type: ${types.join(", ")}`);
    if (availability.length > 0)
      appliedFilters.push(`Availability: ${availability.join(", ")}`);

    const filterMessage =
      appliedFilters.length > 0
        ? `${appliedFilters.join(" | ")} filters applied`
        : "No filters applied";
    toast.success(filterMessage, {
      duration: 4000,
      position: "top-right",
    });
  };

  if (loading) {
    return <div>Loading vehicles...</div>; // Loading message
  }

  return (
    <div className="flex gap-4 p-4">
      <div className="w-64">
        {/* Pass the filter handler to the FilterBox */}
        <FilterBox onFilter={handleFilter} />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Featured Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <BookCard key={vehicle.id} vehicle={vehicle} />
            ))
          ) : (
            <p>No vehicles match the selected filters.</p> // Show message if no vehicles match the filter
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
