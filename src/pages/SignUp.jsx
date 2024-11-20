import React from "react";
import { Flex } from "@radix-ui/themes";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
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
        padding="6"
        style={{
          backgroundColor: "white",
        }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Get Started Now
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Enter your details to access your Vehicle Rental account.
        </p>

        <div className="flex items-center w-full max-w-xs mb-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Include SignUpForm */}
        <SignUpForm />
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
            "url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      />
    </Flex>
  );
};

export default SignUp;
