import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Main />
      <Footer/>
      <ToastContainer />
    </div>
  );
};
export default App;
