import React, { useState } from "react";
import { Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../utils/toastUtils";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check credentials
    if (username === "admin" && password === "admin") {
      // Save admin role to localStorage
      localStorage.setItem("role", "Admin");

      // Show success toast
      showSuccessToast("Login successful!");

      // Redirect to admin dashboard
      navigate("/admin-dashboard");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <Flex
      height="100vh"
      direction={{ initial: "column", sm: "row" }}
      gap="0"
    >
      {/* Left Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        width={{ initial: "100%", sm: "50%" }}
        padding="4"
        style={{
          backgroundColor: "white",
        }}
      >
        <h1
          className="text-3xl font-bold text-gray-900 mb-4"
          style={{ marginTop: "200px" }}
        >
          Welcome, Master.
        </h1>
        <p className="text-gray-600">
          Log in to your account.
        </p>

        <div className="flex items-center w-full max-w-xs my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Inline Login Form */}
        <form className="w-[260px] mb-52" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-900 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-gray-100 px-2.5 text-[15px] leading-none text-gray-900 shadow-sm outline-none focus:shadow-md"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-900 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-gray-100 px-2.5 text-[15px] leading-none text-gray-900 shadow-sm outline-none focus:shadow-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Log In
          </button>
        </form>
      </Flex>

      {/* Right Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        width={{ initial: "100%", sm: "50%" }}
        padding="4"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      ></Flex>
    </Flex>
  );
};

export default AdminLogin;
