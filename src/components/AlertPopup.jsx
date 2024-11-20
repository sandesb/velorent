import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const AlertPopup = ({ onRoleSelect }) => (
  <AlertDialog.Root open>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
      <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-lg focus:outline-none">
        <AlertDialog.Title className="m-0 text-[17px] font-medium text-gray-800">
          Select Your Role
        </AlertDialog.Title>
        <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-gray-600">
          Please select whether you want to sign up as a Customer or a Vendor.
        </AlertDialog.Description>
        <div className="flex justify-center space-x-4 mt-4">
          <AlertDialog.Action asChild>
            <button
              onClick={() => onRoleSelect("Customer")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
            >
              Customer
            </button>
          </AlertDialog.Action>
          <AlertDialog.Action asChild>
            <button
              onClick={() => onRoleSelect("Vendor")}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-300"
            >
              Vendor
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertPopup;
