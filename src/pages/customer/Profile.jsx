import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import usersApi from "../../services/usersApi";
import ChangePasswordPopover from "../../components/customer/ChangePasswordPopover";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode
  const [updatedDetails, setUpdatedDetails] = useState({}); // State for updated user details

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const email = localStorage.getItem("email"); // Get email from localStorage
        if (!email) {
          throw new Error("No email found in localStorage");
        }

        const users = await usersApi.getUsers(); // Fetch all users
        const user = users.find((u) => u.email === email); // Find the logged-in user

        if (!user) {
          throw new Error("User not found");
        }

        setUserDetails(user);
        setUpdatedDetails(user); // Initialize updated details with current user details
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev); // Toggle edit mode
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [name]: value }); // Update form fields
  };

  const handleSave = async () => {
    try {
      const response = await usersApi.updateUser(userDetails.id, updatedDetails);
      setUserDetails(response); // Update the displayed user details
      setIsEditable(false); // Disable edit mode
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <button
            className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full shadow-md"
            title="Change Profile Picture"
          >
            ✎
          </button>
        </div>
      </div>

      {/* User Details */}
      <Form.Root className="space-y-4">
        <div>
          <Form.Field className="mb-4">
            <Form.Label className="block text-sm font-medium text-gray-700">
              Full Name
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                name="full_name"
                value={updatedDetails.full_name || ""}
                onChange={handleInputChange}
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md ${
                  isEditable ? "border-gray-400" : "bg-gray-100 border-gray-300"
                }`}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <div>
          <Form.Field className="mb-4">
            <Form.Label className="block text-sm font-medium text-gray-700">
              Email
            </Form.Label>
            <Form.Control asChild>
              <input
                type="email"
                name="email"
                value={updatedDetails.email || ""}
                onChange={handleInputChange}
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md ${
                  isEditable ? "border-gray-400" : "bg-gray-100 border-gray-300"
                }`}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <div>
          <Form.Field className="mb-4">
            <Form.Label className="block text-sm font-medium text-gray-700">
              Number
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                name="number"
                value={updatedDetails.number || ""}
                onChange={handleInputChange}
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md ${
                  isEditable ? "border-gray-400" : "bg-gray-100 border-gray-300"
                }`}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <div>
          <Form.Field className="mb-4">
            <Form.Label className="block text-sm font-medium text-gray-700">
              Address
            </Form.Label>
            <Form.Control asChild>
              <textarea
                name="address"
                value={updatedDetails.address || ""}
                onChange={handleInputChange}
                rows="3"
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md ${
                  isEditable ? "border-gray-400" : "bg-gray-100 border-gray-300"
                }`}
              />
            </Form.Control>
          </Form.Field>
        </div>
      </Form.Root>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        {isEditable ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Edit
          </button>
        )}
        <ChangePasswordPopover />
      </div>
    </div>
  );
};

export default Profile;
