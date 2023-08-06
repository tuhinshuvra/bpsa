import React, { createContext, useEffect, useState } from "react";
import { isAuth } from "../utlis/helper";

export const AllContext = createContext();

const ContextData = ({ children }) => {
    const [user, setUser] = useState(isAuth());
    const [userDetails, setUserDetails] = useState(isAuth());
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState("");
    const [authSuccess, setAuthSuccess] = useState("");
    const [token, setToken] = useState("");

    const contextInfo = {
        user,
        setUser,
        userDetails,
        setUserDetails,
        token,
        isLoading,
        setIsLoading,
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
