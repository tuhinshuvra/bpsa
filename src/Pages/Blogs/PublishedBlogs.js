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
    const formatDate = (dateString) => {
        const options = { year: 'numeric', day: '2-digit', month: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <div className=' container '>
            <div className="row mt-5 mb-2">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                        <h3 className=' text-center text-primary fw-bold'>Published Blogs </h3>
                    </nav>
                </div>
            </div>
            {
                blogs.map(blog => (
                    <div className="card blogArea my-1" key={blog?.id}>
                        <div className="d-flex">
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className=" ">{blog?.title}</h5>
                                    <p className=" my-0 ">{blog?.description}</p>
                                    <p>{blog.summary}</p>
                                    <div className=' d-flex justify-content-evenly'>
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> {blog?.memberName} </small></p>

                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> {formatDate(blog?.created_at)}</small></p>
                                            {/* <p className="card-text my-0"><small className="text-body-secondary"> <b> status:</b> {blog?.status}</small></p> */}
                                        </div>
                                        <div>
                                            <Link to={`/blogDetails/${blog.id}?source=publishedBlogs`} className=' btn btn-primary btn-sm  '>Show Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 my-auto">
                                <img src={blog.image} className="memberBlogImg rounded-lg" alt="..." />
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PublishedBlogs;