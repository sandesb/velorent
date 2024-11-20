import React, { useState } from "react";
import { Card, Box, Text, Inset, Strong } from "@radix-ui/themes";
import GridList from "./GridList";
const DisplayVehicles = () => {
  const [isGridView, setIsGridView] = useState(true);

  const vehicles = [
    {
      id: 1,
      title: "Luxury SUV",
      price: "$99/day",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
      alt: "SUV",
    },
    {
      id: 2,
      title: "Economy Sedan",
      price: "$49/day",
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
      alt: "Sedan",
    },
    {
      id: 3,
      title: "Sports Car",
      price: "$149/day",
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80",
      alt: "Sports Car",
    },
  ];

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

      {isGridView ? (
        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Box key={vehicle.id} maxWidth="240px" className="mx-auto">
              <Card size="2" className="rounded-lg overflow-hidden">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={vehicle.image}
                    alt={vehicle.alt}
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
                  <Strong>{vehicle.title}</Strong>
                  <br />
                  <span className="text-gray-600">{vehicle.price}</span>
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
