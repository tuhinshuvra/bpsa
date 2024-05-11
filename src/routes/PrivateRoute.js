import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AllContext } from "../hooks/ContextData";
import Loader from "../Components/Common/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AllContext);


    const location = useLocation();

    // if (loading) {
    //     return <Loader></Loader>;
    // }

    if (user?.UserID) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    // return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;