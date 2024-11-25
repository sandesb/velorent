import React, { useState, useEffect } from "react";
import { Card, Box, Text, Inset, Strong } from "@radix-ui/themes";
import GridList from "./GridList";
import vehiclesApi from "../../services/vehiclesApi";

const DisplayVehicles = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserVehicles = async () => {
      const userId = localStorage.getItem("userId"); // Fetch userId from localStorage
      if (!userId) {
        alert("User is not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const response = await vehiclesApi.getVehiclesByUserId(userId); // Fetch user-specific vehicles
        setVehicles(response.data);
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserVehicles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-blue-400">Your Vehicles</h2>
        <button
          className="py-2 px-4 bg-blue-400 text-white rounded-md"
          onClick={() => setIsGridView(!isGridView)}
        >
          {isGridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : isGridView ? (
        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Box key={vehicle.id} maxWidth="240px" className="mx-auto">
              <Card size="2" className="rounded-lg overflow-hidden">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={vehicle.photo}
                    alt={vehicle.model}
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text as="p" size="4" className="p-4">
                  <Strong>{vehicle.model}</Strong>
                  <br />
                  <span className="text-gray-600">${vehicle.rate_per_day}/day</span>
                </Text>
                <div className="p-4">
                  <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                    Edit
                  </button>
                </div>
              </Card>
            </Box>
          ))}
        </div>
      ) : (
        <GridList vehicles={vehicles} />
      )}
    </div>
  );
};

export default DisplayVehicles;
