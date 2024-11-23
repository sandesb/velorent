import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SearchIcon } from "lucide-react";
import { Container } from "@radix-ui/themes";
import VehicleCard from "../components/customer/VehicleCard";
import DisplayVehicles from "../components/vendor/DisplayVehicles"; // Import DisplayVehicles
import vehiclesApi from "../services/vehiclesApi"; // Import the API service

const Dashboard = () => {
  const location = useLocation(); // Get the current location
  const isVendor = location.pathname.includes("/vendor"); // Check if the path includes '/vendor'

  const [vehicles, setVehicles] = useState([]); // State to store vehicle data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch vehicles from the API
    const fetchVehicles = async () => {
      try {
        const data = await vehiclesApi.getVehicles();
        console.log("Fetched vehicles:", data); // Log the data for debugging
        setVehicles(data.data || []); // Set the fetched vehicles
        setLoading(false); // Update loading state
      } catch (err) {
        console.error("Failed to fetch vehicles:", err);
        setError("Failed to load vehicles. Please try again later.");
        setLoading(false); // Update loading state
      }
    };

    fetchVehicles();
  }, []);

  return (
    <Container size="3">
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl text-blue-400 md:text-5xl font-bold mb-4">
              {isVendor ? "Rent Out Your Vehicle Today" : "Rent A Perfect Vehicle Today"}
            </h1>
            {!isVendor && (
              <>
                <p className="text-xl text-gray-400 mb-8">
                  Choose from our wide selection of vehicles for any occasion
                </p>
                <div className="max-w-2xl mx-auto flex items-center bg-white rounded-lg shadow-md p-2">
                  <SearchIcon className="h-5 w-5 text-gray-400 mx-2" />
                  <input
                    type="text"
                    placeholder="Search for vehicles..."
                    className="flex-1 p-2 outline-none"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                    Search
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Conditional Rendering Based on Path */}
          {isVendor ? (
            <DisplayVehicles /> // Render DisplayVehicles for '/vendor'
          ) : (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                Featured Vehicles
              </h2>

              {/* Show Loading State */}
              {loading && <p className="text-center">Loading vehicles...</p>}

              {/* Show Error State */}
              {error && <p className="text-center text-red-500">{error}</p>}

              {/* Show Vehicles */}
              {!loading && !error && vehicles.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                  {vehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      imageSrc={vehicle.photo || "https://via.placeholder.com/300"}
                      title={vehicle.model || "Unknown Model"}
                      price={`$${vehicle.rate_per_day}/day`}
                    />
                  ))}
                </div>
              ) : (
                !loading && <p className="text-center">No vehicles available.</p>
              )}
            </div>
          )}
        </section>
      </main>
    </Container>
  );
};

export default Dashboard;
