import { toast } from "react-toastify";
export const success = (data) => {
  return toast.success(`${data}`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });
};
export const error = (data) => {
  return toast.success(`${data}`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });
};
