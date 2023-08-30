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
import FullScreenImage from './FullScreenImage/FullScreenImage';
import './BlogDetails.css';

const MemberBlogDetails = () => {
    useTitle("BlogDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    console.log(source);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);
    const navigate = useNavigate();

    const handleImageClick = () => {
        setShowFullScreenImage(true);
    };


    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/blog/${user.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`, // Replace with your actual authentication token
            },
        })
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

    if (blog) {
        console.log(blog?.summery);
    }


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
                    <div className='flex   items-center mt-1'>
                        <p className=' d-flex'>  <FaUserAlt className=' fs-5 mx-1'></FaUserAlt>   {blog?.memberName}</p>
                        <p className=' d-flex ms-2 '> <BsCalendarDateFill className=' fs-5 mx-1'></BsCalendarDateFill>  {formatDate(blog.created_at)}</p>
                    </div>
                    <p>{blog?.summery}</p>

                    <div className='d-lg-flex justify-content-between gap-2'>
                        <div className='col-lg-5'>
                            {blog?.image &&
                                <img className='mx-auto rounded-lg blogDetailsImg' src={blog?.image} alt="blog_image" onClick={handleImageClick} />
                            }
                        </div>

                        <div className=' col-lg-7'>
                            {blog?.description &&
                                <p className="my-0" dangerouslySetInnerHTML={{ __html: `${blog?.description.slice(0, 1500)}` }}></p>
                            }
                        </div>

                        <p />
                    </div>
                    {blog?.description &&
                        <p className="my-0" dangerouslySetInnerHTML={{ __html: `${blog?.description.slice(1500)}` }}></p>
                    }


                    <div className=' d-flex justify-content-end'>
                        <Link to={"/memberProfile"} className='btn btn-primary btn-sm ' >Back</Link>
                    </div>
                </div>

                {showFullScreenImage &&
                    <FullScreenImage
                        image={blog?.image}
                        id={blog?.id}
                    />}
            </section>
        </div>
    );
};

export default MemberBlogDetails;