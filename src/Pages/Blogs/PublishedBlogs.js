import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const PublishedBlogs = () => {
    useTitle("PublishedBlog");
    let count = 1;
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://dev.bpsa.com.bd/api/blog")
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.filter(blog => blog.status == "Approved"));

                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, []);
    return (
        <div>
            <h1 className='text-center text-main my-5'>Published Blogs</h1>
            {
                blogs && blogs.map(blog => <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5' key={blog.id}>
                    <div className='col-span-3'>
                        <Link to={`/blogDetails/${blog.id}?source=publishedBlogs`}>
                            <div className='flex -mx-6'>
                                <h3 className='me-2'>{count++}.</h3>
                                <h3 className='text-main'>{blog?.title}</h3>
                            </div>
                            <p>{blog?.description}</p>
                            <p>{blog?.summary}</p>
                        </Link>
                    </div>
                    <div className='col-span-2'>
                        <img className='rounded-lg h-[30vh] w-[25vw]' src={blog?.image}></img>
                    </div>
                    <div className='col-span-1 grid mx-[5vw] '>
                        <button className='btn btn-info'>{blog?.status}</button>
                        {/* <Link to={`/updateBlog/${blog?.id}`} className='btn btn-info  mt-[10vh]'>Edit</Link> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default PublishedBlogs;