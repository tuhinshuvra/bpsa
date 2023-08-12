import React from 'react';
import img from "../Blogs/s1.jpg"
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
const MemberBlogDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://dev.bpsa.com.bd/api/blog/${user.id}`)
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
    console.log(blog);
    const { selectedStatus, setSelectedStatus } = useState(blog.status);
    const [blogStatus, setBlogStatus] = useState(blog?.status);
    const handleStatusChange = (newStatus) => {
        setBlogStatus(newStatus);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(blogStatus);
    };
    return (
        <div>
            <h3 className='mt-10 text-center text-main'>{blog.title}</h3>
            <div className='mx-[5vw] my-[1vh]'>
                <img className='w-[40vw] h-[50vh] rounded mx-[25vw] my-5' src={blog.image}></img>
                <p className='my-3'>{blog.description}</p>
                <p>{blog.summary}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <p className='mr-5'>Blogger: Md Rasel Islam</p>
                        <p>Published: 07/08/2023</p>
                    </div>
                    <div className='mb-10'>
                        {/* <button onClick={handleStatus} className='btn btn-info'>{blog.status}</button> */}
                        {/* <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className="btn m-1">{blog.status}</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Pending</a></li>
                                <li><a>Approved</a></li>
                                <li><a>Ask for Review</a></li>
                                <li><a>Disabled</a></li>
                            </ul>
                        </div> */}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <select
                                    id="status"
                                    value={blogStatus}
                                    onChange={(e) => handleStatusChange(e.target.value)}
                                className='select select-bordered w-full max-w-xs' >
                                     <option disabled selected>{blog.status}</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Ask for Review">Ask for Review</option>
                                    <option value="Disabled">Disabled</option>
                                </select>
                            </div>
                            <button className='btn btn-info my-2' type="submit">update status</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberBlogDetails; 


