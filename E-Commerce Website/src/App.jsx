import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  About,
  Kids,
  Man,
  Woman,
  AllProducts,
  SingleProductPage,
  ErrorPage,
  Cart,
  SignupPage,
  LoginPage,
} from "./pages/index";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const ModalVisible = useSelector((state) => state.modal.isModalVisible);

  return (
    <>
      {ModalVisible && <SingleProductPage />}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />

          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
