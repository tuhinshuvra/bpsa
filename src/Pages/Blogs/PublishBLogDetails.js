import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import './BlogListShow.css';
import FullScreenImage from './FullScreenImage/FullScreenImage';
import BlogDetailsComponent from './BlogDetailsComponent';

// Utility function to strip HTML tags from a string
function stripHTMLTags(htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || '';
}

// Utility function to slice the text differently based on language
function sliceTextWithMaxLength(text, maxLength) {
    const regexBengali = /^[\u0980-\u09FF\s]+$/;
    const regexEnglish = /^[A-Za-z\s]+$/;

    let slicedText = '';
    let charCount = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char.match(regexBengali)) {
            if (charCount < 199960) {
                slicedText += char;
                charCount++;
            }
        } else if (char.match(regexEnglish)) {
            if (charCount < 199950) {
                slicedText += char;
                charCount++;
            }
        } else {
            // Other characters (e.g., HTML tags), add them without counting towards charCount
            slicedText += char;
        }

        if (charCount === maxLength) {
            break;
        }
    }

    return slicedText;
}

const PublishBLogDetails = () => {
    useTitle("BlogDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const navigate = useNavigate();
    // CgCalendarDates

    // console.log(source);

    const handleImageClick = () => {
        setShowFullScreenImage(true);
    };

    useEffect(() => {
        fetch("https://dev.bpsa.com.bd/api/Approvedblog")
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.find(blog => blog.id == id));
                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, []);


    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }


    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <nav aria-label="" className="bg-light rounded-3 p-2  ">
                        <h3 className='fw-bold text-center text-success'>{blog?.title}</h3>
                    </nav>
                    <small className=' d-flex   items-center mt-1'>
                        <p className=' d-flex'>  <FaUserAlt className=' fs-6 mx-1'></FaUserAlt>   {blog?.memberName}</p>
                        <p className=' d-flex ms-2 '> <BsCalendarDateFill className=' fs-6 mx-1'></BsCalendarDateFill>  {formatDate(blog.created_at)}</p>
                    </small>
                    <p>{blog?.summery}</p>

                    <BlogDetailsComponent data={blog} />
                </div>
                <div className=' d-flex justify-content-end me-3 pb-2'>
                    <Link to={"/publishedBlogs"} className='btn btn-primary btn-sm w-28'>Back</Link>
                </div>
            </section>
        </div>
    );
};

export default PublishBLogDetails;
