import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastify = {
  success: (msg) => {
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  },
  error: (msg) => {
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  },
  info: (msg) => {
    toast.info(msg, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  },
};
