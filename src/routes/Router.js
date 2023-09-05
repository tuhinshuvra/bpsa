import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactPage from "../Pages/ContactPage";
import GalleryPage from "../Pages/GalleryPage";
import CommitteePage from "../Pages/CommitteePage";
import NewsPage from "../Pages/NewsPage";
import NewsDetailsPage from "../Pages/NewsDetailsPage";
import MessageDetailsPage from "../Pages/MessageDetailsPage";
import SignupPage from "../Pages/Authentication/SignupPage";
import LoginPage from "../Pages/Authentication/LoginPage";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";
import MemberProfilePage from "../Pages/MemberProfile/MemberProfilePage";
import AllEventPage from "../Pages/Event/AllEventPage";
import EventDetailsPage from "../Pages/Event/EventDetailsPage";
import MemberShipFeePage from "../Pages/MemberShipFeePage/MemberShipFeePage";
import SSLCommerz from "../Pages/MemberShipFeePage/SSLCommerz";
import EntryBlog from "../Pages/Blogs/EntryBlog";
import AdminsBlogDetails from "../Pages/Blogs/AdminsBlogDetails";
import AdminAllBlog from "../Pages/Blogs/AdminAllBlog";
import MemberAllBlog from "../Pages/Blogs/MemberAllBlog";
import UpdateBlog from "../Pages/Blogs/UpdateBlog";
import MemberBlogDetails from "../Pages/Blogs/MemberBlogDetails";
import PublishedBlogs from "../Pages/Blogs/PublishedBlogs";
import PublishBLogDetails from "../Pages/Blogs/PublishBLogDetails";
import BlogAdminAssign from "../Pages/Blogs/BlogAdminAssign";
import MemberImageUpload from "../Pages/MemberProfile/MemberImageUpload";
import MemberCoCurriculamActivitiesEntry from "../Pages/MemberProfile/MemberCoCurriculamActivitiesEntry";
import AllMemberDirectoryPage from "../Pages/AllMemberDirectory/AllMemberDirectoryPage";
import AllMemberDirectorySearchResultPage from "../Pages/AllMemberDirectory/AllMemberDirectorySearchResultPage";
import HomePage from "../Pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import WrongRoute from "./WrongRoute/WrongRoute";
import SuperAdminRoute from "./SuperAdminRoute";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/about",
                element: <AboutUsPage></AboutUsPage>,
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>
            },
            {
                path: "/gallery",
                element: <GalleryPage></GalleryPage>
            },
            {
                path: "/committee",
                element: <CommitteePage></CommitteePage>
            },
            {
                path: "/news",
                element: <NewsPage></NewsPage>
            },
            {
                path: "/news/:newsId",
                element: <NewsDetailsPage></NewsDetailsPage>
            },
            {
                path: "/message/:messageId",
                element: <MessageDetailsPage></MessageDetailsPage>
            },
            {
                path: "/events",
                element: <AllEventPage></AllEventPage>
            },
            {
                path: "/events/:eventId",
                element: <EventDetailsPage></EventDetailsPage>
            },
            {
                path: "/events/:eventId",
                element: <EventDetailsPage></EventDetailsPage>
            },


            {
                path: "/signup",
                element: <SignupPage></SignupPage>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/forgotpassword",
                element: <ForgetPassword></ForgetPassword>
            },


            // Private Route
            {
                path: "/memberProfile",
                element: <PrivateRoute> <MemberProfilePage></MemberProfilePage></PrivateRoute>
            },
            {
                path: "/memberImageUpload",
                element: <PrivateRoute> <MemberImageUpload></MemberImageUpload></PrivateRoute>
            },
            {
                path: "/coCurriculamEntry",
                element: <PrivateRoute><MemberCoCurriculamActivitiesEntry></MemberCoCurriculamActivitiesEntry></PrivateRoute>
            },
            {
                path: "/memberDirectory",
                element: <PrivateRoute><AllMemberDirectoryPage></AllMemberDirectoryPage></PrivateRoute>
            },
            {
                path: "/memberDirectorySearchResult",
                element: <PrivateRoute><AllMemberDirectorySearchResultPage></AllMemberDirectorySearchResultPage></PrivateRoute>
            },

            {
                path: "/membershipFee/:id",
                element: <PrivateRoute> <MemberShipFeePage></MemberShipFeePage></PrivateRoute>
            },
            {
                path: "/sslCommerz/:id",
                element: <PrivateRoute><SSLCommerz></SSLCommerz></PrivateRoute>
            },


            // blog routes
            {
                path: "/blog_entry",
                element: <PrivateRoute><EntryBlog></EntryBlog></PrivateRoute>
            },
            {
                path: "/memberAllBlog",
                element: <PrivateRoute><MemberAllBlog></MemberAllBlog></PrivateRoute>
            },
            {
                path: "/blogDetails/:id",
                element: <PrivateRoute><MemberBlogDetails></MemberBlogDetails></PrivateRoute>
            },
            {
                path: "/updateBlog/:id",
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>
            },
            {
                path: "/adminAllBlog",
                element: <AdminRoute> <AdminAllBlog></AdminAllBlog></AdminRoute>
            },
            {
                path: "/blog_details/:id",
                element: <AdminRoute> <AdminsBlogDetails></AdminsBlogDetails> </AdminRoute>
            },
            {
                path: "/publishedBlogs",
                element: <PrivateRoute><PublishedBlogs></PublishedBlogs></PrivateRoute>
            },
            {
                path: "/publishedBlogDetail/:id",
                element: <PrivateRoute><PublishBLogDetails></PublishBLogDetails></PrivateRoute>
            },
            {
                path: "/blogAdminAssign",
                element: <SuperAdminRoute><BlogAdminAssign></BlogAdminAssign></SuperAdminRoute>
            }
        ],
    },
    {
        path: "*",
        element: <WrongRoute> </WrongRoute>,
    },
]);

export default router;
