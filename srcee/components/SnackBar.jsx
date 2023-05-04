import { toast } from "react-toastify";

const SnackBar = (type, message) => {
  const options = {
    autoClose: 4 * 1000,
    position: "top-right",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
  };

  toast(message, options);
  return true;
};

export default SnackBar;
