// import React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // Correct import statements

import "./App.css";
import { Toaster } from "react-hot-toast";
// import Footer from "./components/fototer/Footer";
// import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/contact";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ForgetPage from "./page/forgetpage.jsx/ForgetPage";
import ResetPasswordPage from "./page/resetpasswordpage/ResetPasswordPage";
import ProfilePage from "./components/profile/ProfilePage";
import CoursePage from "./components/course/CoursePage";
import { useAuth } from "./helper/context/auth";
import Cartpage from "./components/cart/cartpp";
// import PaymentPage from "./components/payment/PaymentPage";
import MoreDetials from "./components/banner/MoreDetials";
import PageNotFound from "./page/pagenotfound/PageNotFound";
// import Footer from "./components/footer/Footer";
import DashBoard from "./components/dashboard/Admin/DashBoard";
import { useEffect, useState } from "react";
// import Spinner2 from "./spinner/Spinner2";
// import axios from "axios";
import CreateBook from "./components/dashboard/Admin/CreateBook";
import MangeBook from "./components/dashboard/Admin/MangeBook";
import AdminHome from "./components/dashboard/Admin/AdminHome";
import Products from "./components/dashboard/Admin/Products";
import Help from "./components/help/Help";
import PaymentCancle from "./components/payment/PaymentCancle";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import AdminOrder from "./components/dashboard/Admin/AdminOrder";
import UserHome from "./components/dashboard/User/UserHome";
import UserOrder from "./components/dashboard/User/UserOrder";

function App() {
  // const { isAuthenticated } = useAuth();
  const { isLogged } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(isLogged);
    setTimeout(() => {
      if (!isLogged) {
        navigate("/login");
      }
    });
  }, [isLogged]);

  return (
    <>
      {/* <NavBar /> */}

      <Routes>
        {/* <Route path="/payment" element={<PaymentPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cancel" element={<PaymentCancle />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<ForgetPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/reset" element={<ResetPasswordPage />} />

        <Route path="/dashboard/admin" element={<DashBoard />}>
          <Route path="/dashboard/admin" element={<AdminHome />} />
          <Route path="createbook" element={<CreateBook />} />
          <Route path="createbook/:id" element={<CreateBook />} />
          <Route path="mangebook" element={<MangeBook />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="product" element={<Products />} />
          <Route path="order" element={<AdminOrder />} />
        </Route>
        <Route path="/dashboard/user" element={<DashBoard />}>
          <Route path="/dashboard/user" element={<UserHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="order" element={<UserOrder />} />
        </Route>

        <Route path="/help" element={<Help />} />
        <Route path="/book" element={<CoursePage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/more_detials" element={<MoreDetials />} />
      </Routes>

      {/* <Footer /> */}

      <Toaster />
    </>
  );
}

export default App;
