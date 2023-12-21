import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbar/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <Navbar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincomp />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/registration" element={<Signup />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading...</h2>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
