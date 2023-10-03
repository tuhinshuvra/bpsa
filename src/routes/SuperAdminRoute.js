import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AllContext } from "../hooks/ContextData";

const SuperAdminRoute = ({ children }) => {
    const { user, loading } = useContext(AllContext);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();



    // if (loading || isAdminLoading) {
    //     return (
    //         <Loader></Loader>
    //     );
    // }
    if (user?.UserID && user?.MemberRole == "super_admin") {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SuperAdminRoute;
