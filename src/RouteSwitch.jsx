// import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Carousel  from "./Carousel";

const RouteSwitch = () => {
  return (
    <>
    <BrowserRouter> 
    <Navbar></Navbar>
    <Carousel></Carousel>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default RouteSwitch;