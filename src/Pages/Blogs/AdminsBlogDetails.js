import React from 'react';
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
import BlogDetailsComponent from './BlogDetailsComponent';
import './BlogDetails.css';
import { formatDate } from '../../utlis/dateFormat';

const AdminsBlogDetails = () => {
    useTitle("BlogDetails");
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [isInputVisible, setInputVisible] = useState(false);

    useEffect(() => {
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
        console.log(blogStatus);
        console.log(blog.user_id);
        const data = {
            blog_id: id,
            status: blogStatus,
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

                    <div className='col-lg-10 mx-auto d-flex justify-content-between align-items-baseline mt-0 pt-0 '>

                        <Link to={"/adminAllBlog"} className='btn btn-primary btn-sm w-28'>Back</Link>

                        <form onSubmit={handleSubmit} className=' d-flex align-items-baseline'>
                            <div>
                                <select
                                    id="status"
                                    value={blogStatus}
                                    onChange={(e) => handleStatusChange(e.target.value)}
                                    className='form-select    max-w-xs' >
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
                                <button className='btn btn-primary btn-sm w-36 ms-1' type="submit">update status</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminsBlogDetails;