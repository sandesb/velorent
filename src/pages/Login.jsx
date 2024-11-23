import React, {useState, useEffect} from "react";
import { Flex } from "@radix-ui/themes";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    setRole(savedRole); // 'Customer' or 'Vendor'
  }, []);

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
          {role === "Vendor" ? "Vendor Login" : "Customer Login"}
          </h1>
        <p className="text-gray-600 ">
        Log in to your {role || "Vehicle Rental"} account.
        </p>

        <div className="flex items-center w-full max-w-xs my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Include LoginForm */}
        <LoginForm />
      </Flex>

     {/* Right Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        width={{ initial: "100%", sm: "50%" }}
        padding="4"
        style={{
          backgroundImage:
            role === "Vendor"
              ? "url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a')"
              : "url('https://pikwizard.com/pw/medium/0ddb8b73e8125f175858e8dec81eadfe.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      ></Flex>
    </Flex>
  );
};

export default Login;