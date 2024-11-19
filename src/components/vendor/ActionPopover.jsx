import React from "react";
import * as Popover from "@radix-ui/react-popover";

const ActionPopover = ({ buttons }) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button className="py-1 px-3 bg-gray-200 text-sm rounded-md">...</button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="bg-white shadow-md rounded-lg p-4 w-48">
          <div className="flex flex-col gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`py-2 px-4 text-sm rounded-md ${
                  button.variant === "delete"
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                }`}
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ActionPopover;
