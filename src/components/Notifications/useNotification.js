import { toast } from 'react-toastify';
import "./style.css"
const useNotification = () => {

  const toastNotify = (message, statusType) => {
    toast(message, {
      position: "top-center",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      style: {
        backgroundColor: "black"
      },
      type: statusType
    });
  };
  return { toastNotify };
};

export default useNotification;