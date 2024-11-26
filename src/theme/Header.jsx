import React from "react";
import { BellIcon } from "lucide-react"; // Import BellIcon for notifications
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../utils/toastUtils"; // Import success toast utility
import Logo from "../assets/logo.png"; // Import the logo from the assets folder

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("role")); // Check if 'role' exists in localStorage

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="VeloRenta Logo" className="h-16 w-16" />
          <span className="text-xl font-bold text-blue-400">VeloRenta</span>
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
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              {/* Notification Icon */}
              <BellIcon
                className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => console.log("Notification clicked")}
              />
              {/* Log Out Button */}
              <button
                className="px-4 py-2 rounded-md text-red-600 border border-red-600"
                onClick={() => {
                  // Clear the role key from localStorage
                  localStorage.removeItem("role");

                  // Show success toast message
                  showSuccessToast("You have been logged out.");

                  console.log("Logged out");
                  navigate("/"); // Redirect to home or login page
                }}
              >
                Log Out
              </button>
            </>
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
