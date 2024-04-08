// import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"; // Correct import statements

import "./App.css";
import { Toaster } from "react-hot-toast";
// import Footer from "./components/fototer/Footer";
import NavBar from "./components/navbar/NavBar";
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
import CartPage from "./components/cart/CartPage";
import PaymentPage from "./components/payment/PaymentPage";
import MoreDetials from "./components/banner/MoreDetials";
import PageNotFound from "./page/pagenotfound/PageNotFound";
import Footer from "./components/footer/Footer";

function App() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated.user);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>

        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/course" element={isAuthenticated?.user?(<CoursePage />):(<Navigate to='/  ' />)} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/more_detials" element={<MoreDetials />} />
        </Routes>

        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
