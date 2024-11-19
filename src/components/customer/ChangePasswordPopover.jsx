import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { LockIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";

const ChangePasswordPopover = () => {
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
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
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
              Submit
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
