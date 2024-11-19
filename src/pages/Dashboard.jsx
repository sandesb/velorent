import React from "react";
import {
    SearchIcon,
    CarIcon,
    ClockIcon,
    CreditCardIcon,
  } from "lucide-react";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ">Dashboard</h1>
     

      <main className="max-w-7xl mx-auto px-4 sm:px-6">
          <section className="py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rent Your Perfect Vehicle Today
              </h1>
              <p className="text-xl text-gray-600 mb-8">
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
            </div>
  
          
  
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                Featured Vehicles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
                    alt="SUV"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Luxury SUV</h3>
                    <p className="text-gray-600 mb-4">$99/day</p>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d"
                    alt="Sedan"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Economy Sedan</h3>
                    <p className="text-gray-600 mb-4">$49/day</p>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
                    alt="Sports Car"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Sports Car</h3>
                    <p className="text-gray-600 mb-4">$149/day</p>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  );
};

export default Dashboard;
