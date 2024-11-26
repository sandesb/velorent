import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Form from "@radix-ui/react-form";
import AlertPopup from "./AlertPopup";
import usersApi from "../services/usersApi";
import { showSuccessToast } from "../utils/toastUtils";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });
  const [showDialog, setShowDialog] = useState(false); // Toggle AlertDialog
  const [userData, setUserData] = useState(null); // Store user data to send
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true); // Open the AlertDialog
  };

  // Function to convert "customer" and "vendor" to boolean
  const roleToBoolean = (role) => {
    if (role === "Customer") return false;
    if (role === "Vendor") return true;
    throw new Error("Invalid role provided!"); // Error for unexpected values
  };

  const handleRoleSelect = (role) => {
    try {
      const roleBoolean = roleToBoolean(role);
      localStorage.setItem("role", role); // Save role as Customer/Vendor
      setUserData({
        ...formData,
        role: roleBoolean,
      });
      setShowDialog(false);
    } catch (error) {
      console.error("Error converting role:", error.message);
    }
  };
  
  

  useEffect(() => {
    if (userData) {
      (async () => {
        try {
          const response = await usersApi.signUp(userData);
          console.log("User signed up successfully:", response);

          // Show success toast
          showSuccessToast("User Created Successfully. Please Sign In.");

          // Redirect to login page on success
          navigate("/login");
        } catch (error) {
          console.error("Sign-up failed:", error);
        }
      })();
    }
  }, [userData, navigate]);

  return (
    <div className="w-[300px] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <Form.Root onSubmit={handleSubmit}>
        {/* Full Name Field */}
    {/* Full Name Field */}
<Form.Field className="mb-4" name="full_name">
  <Form.Label className="block text-sm font-medium">Full Name</Form.Label>
  <Form.Control asChild>
    <input
      className="w-full px-3 py-2 border rounded-md"
      type="text"
      name="full_name" // Change from fullName to full_name
      value={formData.full_name} // Access full_name from formData
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
