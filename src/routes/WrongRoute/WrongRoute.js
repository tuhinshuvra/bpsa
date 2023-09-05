import React from 'react';
import { Link } from 'react-router-dom';
import './WrongRoute.css'
import useTitle from '../../hooks/useTitle';

const WrongRoute = () => {
    useTitle('Wrong Route');
    return (
        <div className='error-page my-40'>
            <h1 className=' text-4xl text-red-600 font-bold'>404</h1>
            <h2 className='text-white text-3xl' >Sorry! Wrong Route</h2>

            <Link className=' text-green-700 text-3xl font-bold' to="/"> Go Home</Link>
        </div>
    );
};

export default WrongRoute;