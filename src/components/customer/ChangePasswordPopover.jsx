import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { LockIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import usersApi from "../../services/usersApi";

const ChangePasswordPopover = () => {
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async () => {
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    try {
      setLoading(true);
      const userId = localStorage.getItem("userId"); // Ensure user ID is stored during login
      if (!userId) throw new Error("User ID not found in localStorage");

      // Use the `updateUser` API method for updating the password
      const userData = { oldPassword, newPassword }; // Construct the data object
      await usersApi.updateUser(userId, userData);

      alert("Password updated successfully!");
    } catch (error) {
      console.error("Error updating password:", error.message);
      alert(error.response?.data?.message || "Failed to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700"
          aria-label="Change Password"
        >
          Change Password
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-[320px] p-4 rounded-lg bg-white shadow-md space-y-4"
          sideOffset={5}
        >
          <h3 className="text-lg font-medium text-gray-700 mb-2 flex items-center space-x-2">
            <LockIcon className="h-5 w-5 text-gray-600" />
            <span>Change Password</span>
          </h3>
          <div className="space-y-3">
            {/* Old Password */}
            <fieldset className="flex flex-col space-y-1 relative">
              <label htmlFor="oldPassword" className="text-sm text-gray-600">
                Old Password
              </label>
              <input
                type={showPassword.oldPassword ? "text" : "password"}
                id="oldPassword"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handleInputChange}
                placeholder="Enter old password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500"
                onClick={() => togglePasswordVisibility("oldPassword")}
              >
                {showPassword.oldPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </fieldset>

            {/* New Password */}
            <fieldset className="flex flex-col space-y-1 relative">
              <label htmlFor="newPassword" className="text-sm text-gray-600">
                New Password
              </label>
              <input
                type={showPassword.newPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handleInputChange}
                placeholder="Enter new password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500"
                onClick={() => togglePasswordVisibility("newPassword")}
              >
                {showPassword.newPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </fieldset>

            {/* Confirm Password */}
            <fieldset className="flex flex-col space-y-1 relative">
              <label
                htmlFor="confirmPassword"
                className="text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter new password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {showPassword.confirmPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </fieldset>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-4 py-2 rounded-md shadow-md ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {loading ? "Updating..." : "Submit"}
            </button>
          </div>

          {/* Close Button */}
          <Popover.Close
            className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
            aria-label="Close"
          >
            <XIcon className="h-4 w-4 text-gray-600" />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ChangePasswordPopover;
