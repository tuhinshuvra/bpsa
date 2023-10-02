import React, { createContext, useEffect, useState } from "react";
import { isAuth } from "../utlis/helper";

export const AllContext = createContext();

const ContextData = ({ children }) => {
    const [user, setUser] = useState(isAuth());
    const [userDetails, setUserDetails] = useState(isAuth());
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [authSuccess, setAuthSuccess] = useState("");
    const [showImageUpload, setShowImageUpload] = useState(false);
    const [showCoCurricular, setShowCoCurricular] = useState(false);
    const [token, setToken] = useState("");
    const [memberBCSBatch, setMemberBCSBatch] = useState("");

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
        showImageUpload,
        setShowImageUpload,
        showCoCurricular,
        setShowCoCurricular,
        memberBCSBatch,
        setMemberBCSBatch
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
