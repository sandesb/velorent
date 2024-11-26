import React from "react";
import {
  SearchIcon,
  CarIcon,
  ClockIcon,
  CreditCardIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "../components/Card";
import Logo from "../assets/logo.png"; // Import the logo from the assets folder

const vehicles = [
  {
    id: 1,
    name: "Luxury SUV",
    price: 99,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
  },
  {
    id: 2,
    name: "Economy Sedan",
    price: 49,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
  },
  {
    id: 3,
    name: "Sports Car",
    price: 149,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <img src={Logo} alt="VeloRenta Logo" className="h-16 w-16" />
            <span className="text-xl font-bold text-blue-400">VeloRenta</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a className="text-gray-600 hover:text-gray-900">Home</a>
            <a className="text-gray-600 hover:text-gray-900">Vehicles</a>
            <a className="text-gray-600 hover:text-gray-900">About</a>
            <a className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 rounded-md text-blue-400 border border-blue-400"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-400 text-white"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl text-blue-400 md:text-5xl font-bold mb-4">
              Rent Your Perfect Vehicle Today
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose from our wide selection of vehicles for any occasion
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border rounded-lg text-center shadow-lg">
              <CarIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Wide Selection</h3>
              <p className="text-gray-600">Choose from variety of vehicles</p>
            </div>
            <div className="p-6 border rounded-lg text-center shadow-lg">
              <ClockIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">24/7 Support</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
            <div className="p-6 border rounded-lg text-center shadow-lg">
              <CreditCardIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Easy Payment</h3>
              <p className="text-gray-600">
                Secure and flexible payment options
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 text-center mb-8">
              Featured Vehicles
            </h2>
            {/* Replace inline code with the Card component */}
            <div className="grid md:grid-cols-3 gap-8">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="VeloRenta Logo" className="h-16 w-16" />
              <span className="text-xl font-bold">VeloRenta</span>
              </div>
              <p className="text-gray-600">
                Making vehicle rental easy and accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a className="block text-gray-600 hover:text-gray-900">
                  About Us
                </a>
                <a className="block text-gray-600 hover:text-gray-900">
                  Our Vehicles
                </a>
                <a className="block text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <a className="block text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MailIcon className="h-5 w-5" />
                  <span>contact@vehiclerent.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPinIcon className="h-5 w-5" />
                  <span>123 Rental Street, City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">
                Subscribe to get updates and news
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 border rounded-l-md outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 VeloRenta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
