import React from 'react';
import img from "../Blogs/s1.jpg"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import FullScreenImage from './FullScreenImage/FullScreenImage';
import './BlogDetails.css';

const AdminsBlogDetails = () => {
    useTitle("BlogDetails");
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [isInputVisible, setInputVisible] = useState(false);
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);

    const handleImageClick = () => {
        setShowFullScreenImage(true);
    };

    useEffect(() => {
        // fetch(`https://dev.bpsa.com.bd/api/blog/${user.id}`
        fetch("https://dev.bpsa.com.bd/api/blog", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`,
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.find(blog => blog.id == id));
                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, [id]);
    // console.log(blog);
    const { selectedStatus, setSelectedStatus } = useState(blog?.status);
    const [blogStatus, setBlogStatus] = useState(blog?.status);
    const handleStatusChange = (newStatus) => {
        setBlogStatus(newStatus);
        if (newStatus == 'Ask for Review') {
            setInputVisible(true);
        } else {
            setInputVisible(false);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            blog_id: id,
            status: blogStatus,
            massege:event.target.message.value,
        }
        console.log(data)
        await fetch("https://dev.bpsa.com.bd/api/blog-status", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                toast.success(result.message);
                navigate("/adminAllBlog");
            })
            .catch(error => {
                console.log(error);
            })
    };

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    function formatCustomDate(dateString) {
        const date = new Date(dateString);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`;
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
                        {blog?.image &&
                            <div className=' col-lg-5'>
                                <img className='rounded-lg blogDetailsImg' src={blog?.image} alt="blog_image" onClick={handleImageClick} />
                            </div>
                        }

                        <div className=' col-lg-7'>
                            {/* <p className=''>{blog?.description && blog?.description.slice(0, 1200)}</p> */}
                            <p className='' dangerouslySetInnerHTML={{ __html: blog?.description }} />
                        </div>
                    </div>

                    {/* <p className='my-2'>{blog?.description && blog?.description.slice(1201, 1700)}</p> */}
                    {/* <p className='my-2'>{blog?.description && blog?.description.slice(1701, 10000)}</p> */}

                    <div className=' d-flex justify-content-between align-items-baseline '>

                        <Link to={"/adminAllBlog"} className='btn btn-primary' >Back</Link>

                        <form onSubmit={handleSubmit} className=' d-flex align-items-baseline'>
                            <div>
                                <select
                                    id="status"
                                    value={blogStatus}
                                    onChange={(e) => handleStatusChange(e.target.value)}
                                    className='select select-bordered w-full max-w-xs' >
                                    <option disabled selected>{blog?.status}</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Ask for Review">Ask for Review</option>
                                    <option value="Disabled">Disabled</option>
                                </select>
                                {isInputVisible && (
                                    <input type="text" name='message' placeholder="feedback message for update" className="input input-bordered w-full max-w-xs my-3" />
                                )}
                            </div>

                            <div>
                                <button className='btn btn-info ms-1' type="submit">update status</button>
                            </div>
                        </form>
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

export default AdminsBlogDetails;