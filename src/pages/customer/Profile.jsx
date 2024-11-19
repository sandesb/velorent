import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import ChangePasswordPopover from "../../components/customer/ChangePasswordPopover";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
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

      {/* Form */}
      <Form.Root className="space-y-4">
        <div>
          <Form.Field className="mb-4">
            <Form.Label className="block text-sm font-medium text-gray-700">
              Full Name
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                placeholder="Enter your full name"
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
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
                placeholder="Enter your email"
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
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
                placeholder="Enter your number"
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
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
                placeholder="Enter your address"
                rows="3"
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                  isEditable ? "border-gray-400" : "bg-gray-100 border-gray-300"
                }`}
              />
            </Form.Control>
          </Form.Field>
        </div>
      </Form.Root>

      {/* Buttons */}
  {/* Action Buttons */}
  <div className="flex justify-between mt-6">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          {isEditable ? "Save Changes" : "Edit"}
        </button>
        <ChangePasswordPopover />
      </div>
    </div>
  );
};

export default Profile;
