import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FullScreenImage.css'

const FullScreenImage = ({ image, id }) => {
    const navigate = useNavigate();




    const handleClose = () => {
        navigate(-0);
    };

    return (
        <div className="fullscreen-image-container">
            <button className="close-button" onClick={handleClose}>
                Close
            </button>
            <img src={image} className="fullscreen-image" alt="blog_image" />
        </div>
    );
};

export default FullScreenImage;