import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes, } from "react-router-dom";
import { ProtectedRoute } from "./Components/Common/ProtectedRoute";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer/Footer";
import SocialButtonComponent from "./Components/Common/SocialButtonComponent";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import CommitteePage from "./Pages/CommitteePage";
import NewsPage from "./Pages/NewsPage";
import { Toaster } from "react-hot-toast";
import SignupPage from "./Pages/Authentication/SignupPage";
import ScrollToTop from "./Components/Common/ScrollToTop";
import NewsDetailsPage from "./Pages/NewsDetailsPage";
import MessageDetailsPage from "./Pages/MessageDetailsPage";
import EntryBlog from "./Pages/Blogs/EntryBlog";
import MemberBlockDetails from "./Pages/Blogs/MemberBlockDetails";
 
import LoginPage from "./Pages/Authentication/LoginPage";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import MemberProfilePage from "./Pages/MemberProfile/MemberProfilePage";
import MemberProfileUpdatePage from "./Pages/MemberProfile/MemberProfileUpdatePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Toaster reverseOrder={false} />
      <SocialButtonComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/news/:newsId" element={<NewsDetailsPage />} />
        <Route path="/message/:messageId" element={<MessageDetailsPage />} />
 
 
        <Route path="/memberProfile" element={<MemberProfilePage />} />
        <Route path="/memberProfileUpdate" element={<MemberProfileUpdatePage />} />
        <Route path="/blog_entry" element={<EntryBlog />} />
        <Route path="/blog_det" element={<BlogDetails />} />
        <Route path="/member_blog_details" element={<MemberBlockDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
