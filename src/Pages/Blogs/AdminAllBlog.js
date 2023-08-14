import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { useContext } from 'react';

const AdminAllBlog = () => {
    const {user}=useContext(AllContext);
    let count=1;
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://dev.bpsa.com.bd/api/blog")
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.filter(blog=>blog.status!="Approved"));

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

                                        <Link to={`/blog_details/${blog.id}`} className='btn btn-info'>details</Link>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <img className='h-[20vh] w-[25vw] rounded' src={blog.image}></img>
                                <p className='my-2'>Blogger: Md Rasel Islam</p>
                            </div>
                            <div className='col-span-1'>
                                <button className='btn btn-info '>{blog.status}</button>
                                <p className='mt-5'>Published: 07/08/2023</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminAllBlog;
