import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Text, Flex, Switch } from "@radix-ui/themes";
import { useLocation, useNavigate } from "react-router-dom";
import usersApi from "../services/usersApi";

const LoginForm = () => {
  const [isVendor, setIsVendor] = useState(null); // Changed default to null for validation
  const [formData, setFormData] = useState({ email: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminPath = location.pathname === "/admin";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (isVendor === null) {
      alert("Please select Vendor or Customer.");
      return;
    }
  
    try {
      const response = await usersApi.login(
        formData.email,
        formData.password,
        isVendor // Pass boolean role
      );
      console.log("Login successful:", response);
  
      const { id,full_name, email } = response.user;
      
  
      // Store user details in localStorage
      localStorage.setItem("loginType", isVendor ? "Vendor" : "Customer");
      localStorage.setItem("fullName", full_name);
      localStorage.setItem("userId", id);

      localStorage.setItem("email", email); // Store full_name
       // Store full_name
  
      // Navigate to the appropriate dashboard
      if (isVendor) {
        navigate("/vendor");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };
  

  return (
    <Form.Root className="w-[260px] mb-52" onSubmit={handleSubmit}>
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
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Control>
      </Form.Field>

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
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Control>
      </Form.Field>

      {!isAdminPath && (
        <Text as="label" size="3" className="text-gray-900 mb-4">
          <Flex gap="2" align="center">
            <Switch
              size="2"
              checked={isVendor === null ? false : isVendor}
              onCheckedChange={(checked) => setIsVendor(checked)}
            />
            {isVendor === null ? "Please select" : isVendor ? "Vendor" : "Customer"}
          </Flex>
        </Text>
      )}

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
