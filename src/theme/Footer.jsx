import React from 'react'
import {
 
    CarIcon,

    PhoneIcon,
    MailIcon,
    MapPinIcon,
  } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <CarIcon className="h-8 w-8 text-blue-600" />
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
        <p>&copy; 2024 VehicleRent. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer