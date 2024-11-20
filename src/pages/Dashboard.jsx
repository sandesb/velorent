import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SearchIcon } from "lucide-react";
import { Container } from "@radix-ui/themes";
import VehicleCard from "../components/customer/VehicleCard";
import DisplayVehicles from "../components/vendor/DisplayVehicles"; // Import DisplayVehicles

const Dashboard = () => {
  const location = useLocation(); // Get the current location
  const isVendor = location.pathname.includes("/vendor"); // Check if the path includes '/vendor'

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
              <div className="grid md:grid-cols-3 gap-8">
                <VehicleCard
                  imageSrc="https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
                  title="Luxury SUV"
                  price="$99/day"
                />
                <VehicleCard
                  imageSrc="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d"
                  title="Economy Sedan"
                  price="$49/day"
                />
                <VehicleCard
                  imageSrc="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
                  title="Sports Car"
                  price="$149/day"
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </Container>
  );
};

export default Dashboard;
