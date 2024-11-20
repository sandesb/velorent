import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Form from "@radix-ui/react-form";
import AlertPopup from "./AlertPopup";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });
  const [showDialog, setShowDialog] = useState(false); // Toggle AlertDialog
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true); // Open the AlertDialog
  };

  const handleRoleSelect = (role) => {
    const userData = { ...formData, role }; // Bundle form data with selected role
    console.log("Final User Data:", userData); // Log the final data
    setShowDialog(false); // Close the dialog
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="w-[300px] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <Form.Root onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <Form.Field className="mb-4" name="fullName">
          <Form.Label className="block text-sm font-medium">Full Name</Form.Label>
          <Form.Control asChild>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </Form.Control>
        </Form.Field>

        {/* Email Field */}
        <Form.Field className="mb-4" name="email">
          <Form.Label className="block text-sm font-medium">Email</Form.Label>
          <Form.Control asChild>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Control>
        </Form.Field>

        {/* Password Field */}
        <Form.Field className="mb-4" name="password">
          <Form.Label className="block text-sm font-medium">Password</Form.Label>
          <Form.Control asChild>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Control>
        </Form.Field>

        {/* Number Field */}
        <Form.Field className="mb-4" name="number">
          <Form.Label className="block text-sm font-medium">Number</Form.Label>
          <Form.Control asChild>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </Form.Control>
        </Form.Field>

        {/* Address Field */}
        <Form.Field className="mb-4" name="address">
          <Form.Label className="block text-sm font-medium">Address</Form.Label>
          <Form.Control asChild>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </Form.Control>
        </Form.Field>

        {/* Submit Button */}
        <Form.Submit asChild>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </Form.Submit>
      </Form.Root>

      {/* AlertDialog Component */}
      {showDialog && <AlertPopup onRoleSelect={handleRoleSelect} />}
    </div>
  );
};

export default SignUpForm;
