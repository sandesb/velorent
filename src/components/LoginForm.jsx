import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Text, Flex, Switch } from "@radix-ui/themes";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm = () => {
  const [isVendor, setIsVendor] = useState(false); // State for toggle
  const location = useLocation(); // Hook to get the current URL path
  const navigate = useNavigate(); // Hook to navigate after form submission

  // Check if the current path is "/admin"
  const isAdminPath = location.pathname === "/admin";

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const loginType = isVendor ? "Vendor" : "Customer";
    localStorage.setItem("loginType", loginType); // Store loginType in localStorage

    // Navigate to the appropriate path based on login type
    if (isVendor) {
      navigate("/vendor");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Form.Root className="w-[260px] mb-52" onSubmit={handleSubmit}>
      {/* Email Field */}
      <Form.Field className="mb-2.5 grid" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-900">
            Email
          </Form.Label>
          <Form.Message
            className="text-[13px] text-gray-900 opacity-80"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-[13px] text-gray-900 opacity-80"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-gray-900 shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-gray-900 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="email"
            required
          />
        </Form.Control>
      </Form.Field>

      {/* Password Field */}
      <Form.Field className="mb-2.5 grid" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-900">
            Password
          </Form.Label>
          <Form.Message
            className="text-[13px] text-gray-900 opacity-80"
            match="valueMissing"
          >
            Please enter your password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-gray-900 shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-gray-900 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="password"
            required
          />
        </Form.Control>
      </Form.Field>

      {/* Conditionally render the Switch button */}
      {!isAdminPath && (
        <Text as="label" size="3" className="text-gray-900 mb-4">
          <Flex gap="2" align="center">
            <Switch
              size="2"
              defaultChecked={isVendor}
              onCheckedChange={(checked) => setIsVendor(checked)}
            />
            {isVendor ? "Vendor" : "Customer"}
          </Flex>
        </Text>
      )}

      {/* Submit Button */}
      <Form.Submit asChild>
        <button
          className="mt-2.5 box-border text-gray-50 inline-flex h-[35px] w-full items-center justify-center rounded bg-mauve8 px-[15px] font-medium leading-none  shadow-[0_2px_10px] shadow-blackA4 hover:bg-blue-400 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
          type="submit"
        >
          Log In
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
