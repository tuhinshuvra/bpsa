import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
const PublishBLogDetails = () => {
    useTitle("BlogDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    console.log(source);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://dev.bpsa.com.bd/api/Approvedblog")
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

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <nav aria-label="" className="bg-light rounded-3 p-2  ">
                        <h3 className='fw-bold text-center text-success'>{blog?.title}</h3>
                    </nav>
                    <div className='flex   items-center'>
                        <p className='mr-5'> <b> Blogger:</b> {blog?.memberName}</p>
                        <p className=' ms-1'> <b> Published:</b> 07/08/2023</p>
                    </div>
                    <p>{blog?.summery}</p>

                    <div className='d-lg-flex justify-content-between gap-2'>
                        <div className=' col-lg-5'>
                            <img className=' rounded-lg ' src={blog?.image} alt='blog_image'></img>
                        </div>
                        <div className=' col-lg-7'>
                            <p className=''>{blog?.description && blog?.description.slice(0, 1200)}</p>
                        </div>
                    </div>

                    <p className='my-2'>{blog?.description && blog?.description.slice(1201, 1700)}</p>
                    <p className='my-2'>{blog?.description && blog?.description.slice(1701, 10000)}</p>

                    <div className=' d-flex justify-content-end'>
                        <Link to={"/publishedBlogs"} className='btn btn-primary btn-sm ' >Back</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PublishBLogDetails;
