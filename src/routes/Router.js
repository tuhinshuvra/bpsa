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
import EntryPost from "../Pages/Posts/EntryPosts";
import AdminAllPost from "../Pages/Posts/AdminAllPost";
import MemberAllPost from "../Pages/Posts/MemberAllPost";
import UpdatePost from "../Pages/Posts/UpdatePost";
import MemberPostDetails from "../Pages/Posts/MemberPostDetails";
import PublishedPosts from "../Pages/Posts/PublishedPosts";
import PublishPostDetails from "../Pages/Posts/PublishPostDetails";
import PostAdminAssign from "../Pages/Posts/PostAdminAssign";
import MemberImageUpload from "../Pages/MemberProfile/MemberImageUpload";
import MemberCoCurriculamActivitiesEntry from "../Pages/MemberProfile/MemberCoCurriculamActivitiesEntry";
import AllMemberDirectoryPage from "../Pages/AllMemberDirectory/AllMemberDirectoryPage";
import AllMemberDirectorySearchResultPage from "../Pages/AllMemberDirectory/AllMemberDirectorySearchResultPage";
import HomePage from "../Pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import WrongRoute from "./WrongRoute/WrongRoute";
import SuperAdminRoute from "./SuperAdminRoute";
import AdminRoute from "./AdminRoute";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import AdminsPostDetails from "../Pages/Posts/AdminsPostDetails";


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

            // authentication route
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
            {
                path: "/resetPassword",
                element: <PrivateRoute><ResetPassword /></PrivateRoute>
            },

            // Private Routes
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
                element: <PrivateRoute><EntryPost></EntryPost></PrivateRoute>
            },
            {
                path: "/memberAllBlog",
                element: <PrivateRoute><MemberAllPost></MemberAllPost></PrivateRoute>
            },
            {
                path: "/blogDetails/:id",
                element: <PrivateRoute><MemberPostDetails></MemberPostDetails></PrivateRoute>
            },
            {
                path: "/updateBlog/:id",
                element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>
            },
            {
                path: "/adminAllBlog",
                element: <AdminRoute> <AdminAllPost></AdminAllPost></AdminRoute>
            },
            {
                path: "/blog_details/:id",
                element: <AdminRoute> <AdminsPostDetails></AdminsPostDetails> </AdminRoute>
            },
            {
                path: "/publishedBlogs",
                element: <PrivateRoute><PublishedPosts></PublishedPosts></PrivateRoute>
            },
            {
                path: "/publishedBlogDetail/:id",
                element: <PrivateRoute><PublishPostDetails></PublishPostDetails></PrivateRoute>
            },
            {
                path: "/blogAdminAssign",
                element: <SuperAdminRoute><PostAdminAssign></PostAdminAssign></SuperAdminRoute>
            }
        ],
    },
    {
        path: "*",
        element: <WrongRoute> </WrongRoute>,
    },
]);

export default router;
