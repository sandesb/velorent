import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

const FilterBox = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    types: [],
    priceRange: [0, 200],
    availability: [],
    vendor: [],
  });

  const toggleFilter = (category, value) => {
    setFilters((prev) => {
      const categoryFilters = prev[category];
      const newFilters = categoryFilters.includes(value)
        ? categoryFilters.filter((item) => item !== value)
        : [...categoryFilters, value];

      return { ...prev, [category]: newFilters };
    });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({
      types: [],
      priceRange: [0, 200],
      availability: [],
      vendor: [],
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h2 className="text-lg font-bold mb-4">Filter By 🎯</h2>

      {/* Filter by Type */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Car Type</h3>
        {["Coupe", "Sedan", "SUV"].map((type) => (
          <div key={type} className="flex items-center space-x-2 mb-2">
            <Checkbox.Root
              id={`type-${type}`}
              checked={filters.types.includes(type)}
              onCheckedChange={() => toggleFilter("types", type)}
              className="w-4 h-4 border border-gray-400 rounded-md flex justify-center items-center"
            >
              <Checkbox.Indicator className="bg-blue-600 w-3 h-3 rounded" />
            </Checkbox.Root>
            <label htmlFor={`type-${type}`} className="text-gray-700">
              {type}
            </label>
          </div>
        ))}
      </div>

      {/* Filter by Availability */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Availability</h3>
        {["Available", "Booked", "Maintenance"].map((status) => (
          <div key={status} className="flex items-center space-x-2 mb-2">
            <Checkbox.Root
              id={`availability-${status}`}
              checked={filters.availability.includes(status)}
              onCheckedChange={() => toggleFilter("availability", status)}
              className="w-4 h-4 border border-gray-400 rounded-md flex justify-center items-center"
            >
              <Checkbox.Indicator className="bg-blue-600 w-3 h-3 rounded" />
            </Checkbox.Root>
            <label htmlFor={`availability-${status}`} className="text-gray-700">
              {status}
            </label>
          </div>
        ))}
      </div>

      {/* Filter by Vendor */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Vendor</h3>
        {["Vendor A", "Vendor B"].map((vendor) => (
          <div key={vendor} className="flex items-center space-x-2 mb-2">
            <Checkbox.Root
              id={`vendor-${vendor}`}
              checked={filters.vendor.includes(vendor)}
              onCheckedChange={() => toggleFilter("vendor", vendor)}
              className="w-4 h-4 border border-gray-400 rounded-md flex justify-center items-center"
            >
              <Checkbox.Indicator className="bg-blue-600 w-3 h-3 rounded" />
            </Checkbox.Root>
            <label htmlFor={`vendor-${vendor}`} className="text-gray-700">
              {vendor}
            </label>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Reset
        </button>
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
