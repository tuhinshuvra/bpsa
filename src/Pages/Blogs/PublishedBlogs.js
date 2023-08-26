import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import './BlogListShow.css';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

const PublishedBlogs = () => {
    useTitle("PublishedBlog");
    const { user, loading, setLoading, } = useContext(AllContext);
    const [blogLoading, setBlogLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    let count = 1;

    useEffect(() => {
        setBlogLoading(true);
        fetch("https://dev.bpsa.com.bd/api/Approvedblog")
            .then(res => res.json())
            .then(result => {
                setBlogs(result.data.blog);
                // if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                //     setBlogs(result.data.blog.filter(blog => blog.status == "Approved"));

                // } else {
                //     console.error("Invalid API response:", result);
                // }
                setLoading(false);
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
    if (blogs) {
        console.log(blogs);
    }


    if (loading || blogLoading) {
        <Loader></Loader>
    }

    return (
        <div className='col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="col-lg-10 mx-auto">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                            <h3 className=' text-center fw-bold'> Published Blogs</h3>
                        </nav>
                    </div>
                    <div className=' col-lg-10 mx-auto'>
                        {
                            blogs.map(blog => (
                                <div className="card blogArea my-1" key={blog?.id}>
                                    <div className="d-flex px-lg-3 px-md-2">
                                        <div className="col-md-2 my-auto">
                                            <img src={blog.image} className="memberBlogImg rounded-lg" alt="..." />
                                        </div>

                                        <div className="card-body">
                                            <Link className=' fs-5 blogDetailsLink ' to={`/publishedBlogDetail/${blog?.id}`}>{blog?.title}</Link>
                                            <p className=" my-0 ">{blog?.description.slice(0, 90)}...
                                                <Link className=' fst-italic ' to={`/publishedBlogDetail/${blog?.id}`}>details</Link>
                                            </p>
                                            {/* <p>{blog.summery}</p> */}
                                            <div className=' my-0  d-flex items-center'>
                                                <p className='d-flex'><FaUserAlt className='fs-5 mx-1'></FaUserAlt>{blog?.memberName}</p>
                                                <p className='d-flex'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(blog.created_at)}</p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PublishedBlogs;