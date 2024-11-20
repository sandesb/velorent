import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useDropzone } from "react-dropzone";


const CreateVehicleForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    type: "Sedan",
    newType: "",
    rate_per_day: "",
    availability_status: "Available",
  });

  const [qrCode, setQrCode] = useState(null);

const onDrop = (acceptedFiles) => {
  const file = acceptedFiles[0];
  const reader = new FileReader();
  reader.onload = () => {
    setQrCode(reader.result);
  };
  reader.readAsDataURL(file);
};
const { getRootProps, getInputProps } = useDropzone({
  onDrop,
  accept: "image/*",
});

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeChange = (value) => {
    if (value === "custom") {
      setFormData({ ...formData, type: "", newType: "" });
    } else {
      setFormData({ ...formData, type: value, newType: "" });
    }
  };

  return (
    <div className="w-full max-w-1xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Rent New Vehicle</h2>
      <div className="flex justify-between items-center mb-4">
        {["General Info", "Rate Details", "Availability"].map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center px-2 py-1 ${
              currentStep === index + 1
                ? "border-b-2 border-blue-400 font-semibold"
                : "text-gray-500"
            }`}
          >
            {index + 1}. {step}
          </div>
        ))}
      </div>

      {currentStep === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Step 1: General Info</h3>
          <div className="mb-4">
            <label className="block text-sm mb-1">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter vehicle model"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter manufacture year"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Type</label>
            <RadioGroup.Root
              className="flex flex-col gap-2"
              value={formData.type || "custom"}
              onValueChange={(value) => handleTypeChange(value)}
            >
              {["Sedan", "SUV", "Truck", "Hatchback"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <RadioGroup.Item
                    value={type}
                    className={`w-4 h-4 border rounded-full ${
                      formData.type === type ? "bg-blue-400" : ""
                    }`}
                  />
                  {type}
                </label>
              ))}
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroup.Item
                  value="custom"
                  className={`w-4 h-4 border rounded-full ${
                    formData.type === "" && formData.newType !== ""
                      ? "bg-blue-400"
                      : ""
                  }`}
                />
                <div className="flex items-center gap-2">
                  Other:
                  <input
                    type="text"
                    name="newType"
                    value={formData.newType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        newType: e.target.value,
                        type: e.target.value,
                      })
                    }
                    placeholder="Write a new type"
                    className="px-3 py-1 border rounded"
                  />
                </div>
              </label>
            </RadioGroup.Root>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Step 2: Rate Details</h3>
          <div className="mb-4">
            <label className="block text-sm mb-1">Rate Per Day</label>
            <input
              type="text"
              name="rate_per_day"
              value={formData.rate_per_day}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter rate per day"
            />
          </div>
        </div>
      )}

{currentStep === 3 && (
  <div>
    <h3 className="text-lg font-semibold mb-2">Step 3: Availability</h3>
    <label className="block text-sm mb-1">Availability Status</label>
    <RadioGroup.Root
      className="flex flex-col gap-2"
      value={formData.availability_status}
      onValueChange={(value) =>
        handleRadioChange("availability_status", value)
      }
    >
      {["Available", "Booked", "Maintenance"].map((status) => (
        <label
          key={status}
          className="flex items-center gap-2 cursor-pointer"
        >
          <RadioGroup.Item
            value={status}
            className={`w-4 h-4 border rounded-full ${
              formData.availability_status === status ? "bg-blue-400" : ""
            }`}
          />
          {status}
        </label>
      ))}
    </RadioGroup.Root>

    {/* Dropzone for QR Code Upload */}
    <div className="mt-4">
      <label className="block text-sm mb-2 font-semibold">
        Final Step: Upload QR Code to receive your Payment
      </label>
      <div
        {...getRootProps({
          className:
            "border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-600">
          Drag and drop an image here, or click to select one
        </p>
      </div>
      {qrCode && (
        <div className="mt-4">
          <img
            src={qrCode}
            alt="QR Code Preview"
            className="max-w-full h-auto border rounded-md"
          />
        </div>
      )}
    </div>
  </div>
)}


      <div className="mt-4 flex justify-between">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Back
          </button>
        )}
        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-400 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => console.log("Submit Data:", formData)}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateVehicleForm;
