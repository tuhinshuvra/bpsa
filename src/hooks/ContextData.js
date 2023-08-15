import React, { createContext, useEffect, useState } from "react";
import { isAuth } from "../utlis/helper";

export const AllContext = createContext();

const ContextData = ({ children }) => {
    const [user, setUser] = useState(isAuth());
    const [userDetails, setUserDetails] = useState(isAuth());
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [authSuccess, setAuthSuccess] = useState("");
    const [token, setToken] = useState("");

    const contextInfo = {
        user,
        setUser,
        userDetails,
        setUserDetails,
        token,
        setToken,
        loading,
        setLoading,
        authError,
        setAuthError,
        authSuccess,
        setAuthSuccess,
    };

    return (
        <div>
            <AllContext.Provider value={contextInfo}>
                {children}
            </AllContext.Provider>
        </div>
    );
};

export default ContextData;
