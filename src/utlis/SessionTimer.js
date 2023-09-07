import { useEffect, } from 'react';

const SessionTimer = ({ onLogout }) => {
    const inactivityTimeout = 1 * 60 * 1000;

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

        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
        };
    }, [onLogout, inactivityTimeout]);

    return null;
};

export default SessionTimer;
