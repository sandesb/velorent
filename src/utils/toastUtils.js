// utils/toastUtils.js
import { toast } from "react-hot-toast";

export const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 4000,
    position: "top-center",
    style: {
      border: "1px solid #4CAF50",
      padding: "16px",
      color: "#4CAF50",
      fontWeight: "bold",
    },
    iconTheme: {
      primary: "#4CAF50",
      secondary: "#FFFFFF",
    },
  });
};

export const showFailureToast = (message) => {
  toast.error(message, {
    duration: 4000,
    position:"top-center",
    style: {
      border: "1px solid #FF4C4C",
      padding: "16px",
      color: "#FF4C4C",
      fontWeight: "bold",
    },
    iconTheme: {
      primary: "#FF4C4C",
      secondary: "#FFFFFF",
    },
  });
};
