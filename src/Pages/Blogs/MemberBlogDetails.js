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
import BlogDetailsComponent from './BlogDetailsComponent';
import './BlogDetails.css';
import { formatDate } from '../../utlis/dateFormat';

const MemberBlogDetails = () => {
    useTitle("BlogDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    console.log(source);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);

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

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-3 ">
                    <div className="mb-0 pb-0">
                        <nav aria-label="" className="bg-light rounded-3 p-2  ">
                            <h3 className='fw-bold text-center text-success'>{blog?.title}</h3>
                        </nav>

                        <div className="col-lg-10 mx-auto">
                            <small className=' d-flex   items-center mt-1'>
                                <p className=' d-flex'>  <FaUserAlt className=' fs-6 mx-1'></FaUserAlt>   {blog?.memberName}</p>
                                <p className=' d-flex ms-2 '> <BsCalendarDateFill className=' fs-6 mx-1'></BsCalendarDateFill>  {formatDate(blog.created_at)}</p>
                            </small>
                            <p>{blog?.summery}</p>
                        </div>

                        <BlogDetailsComponent data={blog} />
                    </div>

                    <div className=' d-flex justify-content-end'>
                        <Link to={"/memberProfile"} className='btn btn-primary btn-sm w-28'>Back</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberBlogDetails;