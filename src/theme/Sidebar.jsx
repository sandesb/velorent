import React from "react";
import { NavLink } from "react-router-dom";
import { CarIcon, ClockIcon, CreditCardIcon, UserIcon } from "lucide-react";

const Sidebar = () => {
  // Retrieve user details from localStorage
  const role = localStorage.getItem("role"); // "Vendor" or "Customer"
  const fullName = localStorage.getItem("fullName"); // User's full name

  // Determine the base path based on role
  const basePath = role === "Vendor" ? "/vendor" : "/dashboard";

  // Sidebar navigation links
  const navLinks = [
    { path: `${basePath}`, label: "Home", icon: CarIcon },
    {
      path: `${basePath}/vehicles`,
      label: role === "Vendor" ? "Rent" : "Vehicles", // Conditional label
      icon: ClockIcon,
    },
    { path: `${basePath}/bookings`, label: "Bookings", icon: CreditCardIcon },
    { path: `${basePath}/profile`, label: "Profile", icon: UserIcon },
  ];

  return (
    <aside className="w-64 p-4 h-screen ">
      {/* Dynamic Header */}
      <h2 className="text-xl font-bold mb-4">
        Welcome, {fullName || (role === "Vendor" ? "Vendor" : "Customer")}
      </h2>

      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === basePath} // Ensure exact matching for Home
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 rounded-md ${
                    isActive
                      ? "bg-blue-400 text-white" // Active state: blue background with white text
                      : "text-gray-600 hover:bg-blue-100" // Non-active state: gray text and hover effect
                  }`
                }
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
