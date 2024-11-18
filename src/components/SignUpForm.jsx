import React from "react";
import * as Form from "@radix-ui/react-form";

const SignUpForm = () => (
  <Form.Root className="w-[260px] mb-52">
    {/* Full Name Field */}
    <Form.Field className="mb-2.5 grid" name="fullName">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-900">
          Full Name
        </Form.Label>
        <Form.Message
          className="text-[13px] text-gray-900 opacity-80"
          match="valueMissing"
        >
          Please enter your full name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-gray-900 shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-gray-900 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>

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

    {/* Number Field */}
    <Form.Field className="mb-2.5 grid" name="number">
      <div className="flex items-baseline justify-between">
        <Form.Label type="number" className="text-[15px] font-medium leading-[35px] text-gray-900">
          Number
        </Form.Label>
        <Form.Message
          className="text-[13px] text-gray-900 opacity-80"
          match="valueMissing"
        >
          Please enter your phone number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-gray-900 shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-gray-900 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
          type="number"
          required
        />
      </Form.Control>
    </Form.Field>

    {/* Address Field */}
    <Form.Field className="mb-2.5 grid" name="address">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-900">
          Address
        </Form.Label>
        <Form.Message
          className="text-[13px] text-gray-900 opacity-80"
          match="valueMissing"
        >
          Please enter your address
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border inline-flex h-[35px] w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-gray-900 shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-gray-900 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
          required
        />
      </Form.Control>
    </Form.Field>

    {/* Submit Button */}
    <Form.Submit asChild>
      <button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-mauve8 px-[15px] font-medium leading-none text-black shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve1 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Sign Up
      </button>
    </Form.Submit>
  </Form.Root>
);

export default SignUpForm;
