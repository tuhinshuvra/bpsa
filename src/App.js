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
 
import LoginPage from "./Pages/Authentication/LoginPage";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import MemberProfilePage from "./Pages/MemberProfile/MemberProfilePage";
import MemberProfileUpdatePage from "./Pages/MemberProfile/MemberProfileUpdatePage";
import MemberBlogDetails from "./Pages/Blogs/MemberBlogDetails";
import AdminAllBlog from "./Pages/Blogs/AdminAllBlog";
import MemberAllBlog from "./Pages/Blogs/MemberAllBlog";
import UpdateBlog from "./Pages/Blogs/UpdateBlog";
import Blog_details from "./Pages/Blogs/Blog_details";
import PublishedBlogs from "./Pages/Blogs/PublishedBlogs";

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
        <Route path="/blog_details/:id" element={<MemberBlogDetails />} />
        <Route path="/adminAllBlog" element={<AdminAllBlog/>}/>
        <Route path="/memberAllBlog" element={<MemberAllBlog/>}/>
        <Route path="/updateBlog/:id" element={<UpdateBlog/>}/>
        <Route path="/blogDetails/:id" element={<Blog_details/>}/>
        <Route path="/publishedBlogs" element={<PublishedBlogs/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
