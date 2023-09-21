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
import { formatDate } from '../../utlis/dateFormat';
import Loader from '../../Components/Common/Loader';
import BlogDetailsComponent from './BlogDetailsComponent';
import './BlogDetails.css';

const AdminsBlogDetails = () => {
    useTitle("BlogDetails");
    const { id } = useParams();
    const { user, loading, setLoading } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [isInputVisible, setInputVisible] = useState(false);

    console.log("Admin Blog Details : ", blog);

    useEffect(() => {
        setLoading(true);
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
                setLoading(false);
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

    const approveDate = new Date().toISOString();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            blog_id: id,
            status: blogStatus,
            approveDate: approveDate,
            // massege: event.target.message.value,
        }
        if (isInputVisible) {
            data.message = event.target.message.value;
        }
        console.log("Post Approved Data : ", data)

        setLoading(true);
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
                setLoading(false);
                navigate("/adminAllBlog");
            })
            .catch(error => {
                console.log(error);
            })
    };


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-3 ">
                    <div className="mb-0 pb-0">
                        <nav aria-label="" className="bg-light rounded-3 p-2  ">
                            <h3 className='fw-bold text-center text-success'>{blog?.title}</h3>
                        </nav>

                        <div className="">
                            <small className=' d-flex justify-content-center mt-2'>
                                <p className=' d-flex  '> <BsCalendarDateFill className=' fs-6 mx-1'></BsCalendarDateFill>  {formatDate(blog.created_at)}</p>
                                <p className=' d-flex ms-3'>  <FaUserAlt className=' fs-6 mx-1'></FaUserAlt>   {blog?.memberName}</p>
                            </small>
                        </div>
                    </div>
                    <div className=' col-lg-8 mx-auto' >
                        <p>{blog?.summery}</p>
                        <BlogDetailsComponent data={blog} />

                        <div className=' d-flex justify-content-between align-items-baseline mt-0 pt-0 '>

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
                                        <input type="text" name='message' placeholder="feedback message for update" className="input input-bordered w-full max-w-xs my-3" required />
                                    )}
                                </div>

                                <div>
                                    <button className='btn btn-primary btn-sm w-36 ms-1' type="submit">update status</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminsBlogDetails;