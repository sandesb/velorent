import React from "react";
import { CarIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL path

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <CarIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">VehicleRent</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a className="text-gray-600 hover:text-gray-900" href="/">
            Home
          </a>
          <a className="text-gray-600 hover:text-gray-900" href="/vehicles">
            Vehicles
          </a>
          <a className="text-gray-600 hover:text-gray-900" href="/about">
            About
          </a>
          <a className="text-gray-600 hover:text-gray-900" href="/contact">
            Contact
          </a>
        </nav>

        {/* Conditional Buttons */}
        <div className="flex space-x-4">
          {location.pathname.startsWith("/dashboard") ? (
            <button
              className="px-4 py-2 rounded-md text-red-600 border border-red-600"
              onClick={() => {
                // Perform log out logic (e.g., clearing tokens)
                console.log("Logged out");
                navigate("/"); // Redirect to home or login page
              }}
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 rounded-md text-blue-600 border border-blue-600"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="px-4 py-2 rounded-md bg-blue-600 text-white"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
