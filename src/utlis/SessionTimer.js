import React, { useEffect, useState } from 'react';

const SessionTimer = ({ onLogout }) => {
    const inactivityTimeout = 10 * 1000; // 10 seconds in milliseconds

    useEffect(() => {
        let timer;

        const handleActivity = () => {
            clearTimeout(timer);
            timer = setTimeout(onLogout, inactivityTimeout);
        };

        // Add event listeners for user activity
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);

        // Start the initial timer when the component mounts
        timer = setTimeout(onLogout, inactivityTimeout);

        // Cleanup: Remove event listeners and clear the timer when the component unmounts
        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
        };
    }, [onLogout]);

    return null; // This component doesn't render anything visible
};

export default SessionTimer;
