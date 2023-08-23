import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import './BlogListShow.css';

const AdminAllBlog = () => {
    useTitle("Admin'sAllBlog")
    const { user, loading, setLoading, } = useContext(AllContext);
    const [blogs, setBlogs] = useState([]);
    let count = 1;

    useEffect(() => {
        setLoading(true);
        fetch("https://dev.bpsa.com.bd/api/blog", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`, // Replace with your actual authentication token
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.filter(blog => blog.status != "Approved"));
                    setLoading(false);

                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, [setLoading]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', day: '2-digit', month: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    console.log(blogs);


    if (loading) {
        <Loader></Loader>
    }


    return (
        <div className=' container col-lg-8 mx-auto mb-lg-5 '>
            <div className="row mt-5 mb-2">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                        <h3 className=' text-center fw-bold'>Admin's All Blogs </h3>
                    </nav>
                </div>
            </div>
            {
                blogs.map(blog => (
                    <div className="card blogArea my-1 px-1" key={blog?.id}>
                        <div className="d-flex px-lg-3 px-md-2">

                            <div className="col-md-2 my-auto">
                                <img src={blog.image} className="adminBlogListImg rounded-lg" alt="..." />
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <Link className=' fs-5 blogDetailsLink ' to={`/blog_details/${blog?.id}`}>{blog?.title}</Link>
                                    <p>{blog.summary}</p>
                                    <div className=''>
                                        <div className=' d-flex justify-content-evenly   me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> {blog?.memberName} </small></p>

                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> {formatDate(blog?.created_at)}</small></p>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> status:</b> {blog?.status}</small></p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminAllBlog;
