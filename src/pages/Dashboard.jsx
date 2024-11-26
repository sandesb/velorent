import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SearchIcon } from "lucide-react";
import { Container } from "@radix-ui/themes";
import BookCard from "../components/customer/BookCard"; // Import BookCard
import DisplayVehicles from "../components/vendor/DisplayVehicles"; // Import DisplayVehicles
import vehiclesApi from "../services/vehiclesApi"; // Import the API service

const Dashboard = () => {
  const location = useLocation(); // Get the current location
  const isVendor = location.pathname.includes("/vendor"); // Check if the path includes '/vendor'

  const [vehicles, setVehicles] = useState([]); // State to store vehicle data
  const [filteredVehicles, setFilteredVehicles] = useState([]); // State for filtered vehicles
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch vehicles from the API
    const fetchVehicles = async () => {
      try {
        const data = await vehiclesApi.getVehicles();
        console.log("Fetched vehicles:", data); // Log the data for debugging
        setVehicles(data.data || []); // Set the fetched vehicles
        setFilteredVehicles(data.data || []); // Initialize filtered vehicles
        setLoading(false); // Update loading state
      } catch (err) {
        console.error("Failed to fetch vehicles:", err);
        setError("Failed to load vehicles. Please try again later.");
        setLoading(false); // Update loading state
      }
    };

    fetchVehicles();
  }, []);

  // Handle search query change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      // If the search query is empty, reset filtered vehicles
      setFilteredVehicles(vehicles);
    } else {
      // Filter vehicles based on the query
      const filtered = vehicles.filter((vehicle) =>
        vehicle.model.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredVehicles(filtered);
    }
  };

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
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="flex-1 p-2 outline-none"
                  />
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
              {!loading && !error && filteredVehicles.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                  {filteredVehicles.map((vehicle) => (
                    <BookCard
                      key={vehicle.id}
                      vehicle={vehicle} // Pass the vehicle object directly
                    />
                  ))}
                </div>
              ) : (
                !loading && <p className="text-center">No vehicles match your search.</p>
              )}
            </div>
          )}
        </section>
      </main>
    </Container>
  );
};

export default Dashboard;
