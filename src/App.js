import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
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
import LoginPage from "./Pages/LoginPage";
import ScrollToTop from "./Components/Common/ScrollToTop";
import NewsDetailsPage from "./Pages/NewsDetailsPage";
import MessageDetailsPage from "./Pages/MessageDetailsPage";
import EntryBlog from "./Pages/Blogs/EntryBlog";
import MemberBlockDetails from "./Pages/Blogs/MemberBlockDetails";
import MemberAllBlocks from "./Pages/Blogs/MemberAllBlocks";
import AdminAllBlocks from "./Pages/Blogs/AdminAllBlocks";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news/:newsId" element={<NewsDetailsPage />} />
        <Route path="/message/:messageId" element={<MessageDetailsPage />} />
        <Route path="/block_entry" element={<EntryBlog/>} />
        <Route path="/admin_all_blocks" element={<AdminAllBlocks/>}/>
        <Route path="/member_block_details" element={<MemberBlockDetails/>}/>
        <Route path="/member_all_blocks" element={<MemberAllBlocks/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
