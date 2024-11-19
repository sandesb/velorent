import React from "react";
import { NavLink } from "react-router-dom";
import { CarIcon, ClockIcon, CreditCardIcon, UserIcon } from "lucide-react";

const Sidebar = () => {
  const navLinks = [
    { path: "/dashboard/home", label: "Home", icon: CarIcon },
    { path: "/dashboard/vehicles", label: "Vehicles", icon: ClockIcon },
    { path: "/dashboard/bookings", label: "Bookings", icon: CreditCardIcon },
    { path: "/dashboard/profile", label: "Profile", icon: UserIcon }, // Added Profile
  ];

  return (
    <aside className="w-64 p-4 h-screen bg-gray-50 shadow-md">
      <h2 className="text-xl font-bold mb-4">Welcome Vendor</h2>
      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 rounded-md ${
                    isActive ? "bg-blue-600 text-white" : "text-gray-600"
                  } hover:bg-blue-100`
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
