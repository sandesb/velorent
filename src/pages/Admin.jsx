import { Menu, X, Users, Car } from "lucide-react";
import React, { useState, useEffect } from "react";
import usersApi from "../services/usersApi";
import vehiclesApi from "../services/vehiclesApi";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total users
        const usersResponse = await usersApi.getUsers();
        setTotalUsers(usersResponse.length);

        // Fetch total vehicles
        const vehiclesResponse = await vehiclesApi.getVehicles();
        console.log("Vehicles API Response:", vehiclesResponse); // Debug to verify the structure
        const vehiclesData = vehiclesResponse.data || [];
        setTotalVehicles(vehiclesData.length);
        setVehicles(vehiclesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-0"} bg-gray-900 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between text-white mb-8">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <a className="flex items-center text-gray-300 hover:bg-gray-800 rounded p-2">
                  <Users className="h-5 w-5 mr-2" />
                  Users
                </a>
              </li>
              <li>
                <a className="flex items-center text-gray-300 hover:bg-gray-800 rounded p-2">
                  <Car className="h-5 w-5 mr-2" />
                  Vehicles
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 py-4 flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="ml-4 text-2xl font-semibold text-gray-800">
              Dashboard Overview
            </h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Users
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {totalUsers}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <Car className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Vehicles
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {totalVehicles}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rent/Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vehicles.map((vehicle, idx) => (
                  <tr
                    key={vehicle.id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {vehicle.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {vehicle.model}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${vehicle.rate_per_day}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          vehicle.availability_status === "Available"
                            ? "bg-green-100 text-green-800"
                            : vehicle.availability_status === "Booked"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {vehicle.availability_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
