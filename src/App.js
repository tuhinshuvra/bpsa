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
import MemberProfilePage from "./Pages/MemberProfile/MemberProfilePage";
import MemberBlogDetails from "./Pages/Blogs/MemberBlogDetails";
import MemberAllBlog from "./Pages/Blogs/MemberAllBlog";
import UpdateBlog from "./Pages/Blogs/UpdateBlog";
import Blog_details from "./Pages/Blogs/Blog_details";
import PublishedBlogs from "./Pages/Blogs/PublishedBlogs";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import MemberImageUpload from "./Pages/MemberProfile/MemberImageUpload";
import MemberCoCurriculamActivitiesEntry from "./Pages/MemberProfile/MemberCoCurriculamActivitiesEntry";
import AllEventPage from "./Pages/Event/AllEventPage";
import EventDetailsPage from "./Pages/Event/EventDetailsPage";
import AdminAllBlog from "./Pages/Blogs/AdminAllBlog";
import AllMemberDirectoryPage from "./Pages/AllMemberDirectory/AllMemberDirectoryPage";
import AllMemberDirectorySearchResultPage from "./Pages/AllMemberDirectory/AllMemberDirectorySearchResultPage";
import NewCommittee from "./Components/CommitteeComponent/NewCommittee";
import PublishBLogDetails from "./Pages/Blogs/PublishBLogDetails";
import BlogAdminAssign from "./Pages/Blogs/BlogAdminAssign";
import MemberShipFeePage from "./Pages/MemberShipFeePage/MemberShipFeePage";
import SSLCommerz from "./Pages/MemberShipFeePage/SSLCommerz";

export default function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Toaster
        containerStyle={{
          marginTop: '145px',
        }}
      />
      <SocialButtonComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:newsId" element={<NewsDetailsPage />} />
        <Route path="/message/:messageId" element={<MessageDetailsPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/memberProfile" element={<MemberProfilePage />} />
        <Route path="/memberImageUpload" element={<MemberImageUpload />} />
        <Route path="/coCurriculamEntry" element={<MemberCoCurriculamActivitiesEntry />} />
        <Route path="/memberDirectory" element={<AllMemberDirectoryPage />} />
        <Route path="/memberDirectorySearchResult" element={<AllMemberDirectorySearchResultPage />} />
        <Route path="/events" element={<AllEventPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="/membershipFee/:id" element={<MemberShipFeePage />} />
        <Route path="/sslCommerz/:id" element={<SSLCommerz />} />


        <Route path="/blog_entry" element={<EntryBlog />} />
        <Route path="/blog_details/:id" element={<MemberBlogDetails />} />
        <Route path="/adminAllBlog" element={<AdminAllBlog />} />
        <Route path="/memberAllBlog" element={<MemberAllBlog />} />
        <Route path="/updateBlog/:id" element={<UpdateBlog />} />
        <Route path="/blogDetails/:id" element={<Blog_details />} />
        <Route path="/publishedBlogs" element={<PublishedBlogs />} />
        <Route path="/publishedBlogDetail/:id" element={<PublishBLogDetails />} />
        <Route path="/newCommittee" element={<NewCommittee />} />
        <Route path="/blogAdminAssign" element={<BlogAdminAssign />} />
      </Routes>
      <Footer />
    </div>
  );
}
