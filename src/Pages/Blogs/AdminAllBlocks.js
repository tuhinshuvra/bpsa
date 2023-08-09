import React, { useState, useEffect } from 'react';
import img from "../Blogs/s1.jpg";

const AdminAllBlocks = () => {
    let count=1;
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://dev.bpsa.com.bd/api/blog")
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog);
                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, []);
    console.log(blogs);
    return (
        <div>
            <h1 className='text-center'>All Blogs</h1>
            {
                blogs.map(blog => (
                    <div key={blog.id}>
                        <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5'>
                            <div className='col-span-3'>
                                <div className=' flex items-start'>
                                    <p className='text-3xl me-2'>{count++}.</p>
                                    <div>
                                        <h3>
                                           {blog.title}
                                        </h3>
                                        <p>
                                            {blog.description}
                                        </p>
                                        <p>{blog.summary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <img className='h-[30vh] w-[25vw]' src={blog.image}></img>
                                <p className='my-2'>Blogger: Md Rasel Islam</p>
                            </div>
                            <div className='col-span-1'>
                                <details className="dropdown mb-20">
                                    <summary className="m-1 btn btn-info">Action</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><a>Pending</a></li>
                                        <li><a>Approved</a></li>
                                        <li><a>Ask for review</a></li>
                                        <li><a>Disabled</a></li>
                                    </ul>
                                </details>
                                <p className='mt-5'>Published: 07/08/2023</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminAllBlocks;
