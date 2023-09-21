import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import './PostDetails.css';
import { formatDate } from '../../utlis/dateFormat';
import Loader from '../../Components/Common/Loader';
import PostDetailsComponent from './PostDetailsComponent';

const MemberPostDetails = () => {
    useTitle("PostDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    console.log(source);
    const { id } = useParams();
    const { user, loading, setLoading } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);

    console.log("MemberPostDetails : ", blog);

    useEffect(() => {
        setLoading(true)
        fetch(`https://dev.bpsa.com.bd/api/blog/${user.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`, // Replace with your actual authentication token
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.find(blog => blog.id == id));
                } else {
                    console.error("Invalid API response:", result);
                }
                setLoading(false)
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, []);

    if (blog) {
        console.log(blog?.summery);
    }

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
                            <small className=' d-flex justify-content-center  mt-2'>
                                <p className=' d-flex'> <BsCalendarDateFill className=' fs-6 mx-1'></BsCalendarDateFill>  {formatDate(blog.created_at)}</p>
                                <p className=' d-flex ms-3'>  <FaUserAlt className=' fs-6 mx-1'></FaUserAlt>   {blog?.memberName}</p>
                            </small>
                        </div>

                        <div className=' col-lg-8 mx-auto'>
                            <p>{blog?.summery}</p>
                            <PostDetailsComponent data={blog} />
                            <div className=' d-flex justify-content-end'>
                                <Link to={"/memberProfile"} className='btn btn-primary btn-sm w-28'>Back</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default MemberPostDetails;