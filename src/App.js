import React from "react";
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

export default function App() {
  return (
    <div>
      <Navbar />
      <SocialButtonComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
