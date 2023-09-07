import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const WrongRoute = () => {
    useTitle('Wrong Route');

    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 1 * 3 * 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [navigate]);

    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link class="btn btn-primary btn-sm" to="/" >Go Home</Link>
            </div>
        </div>
    );
};

export default WrongRoute;