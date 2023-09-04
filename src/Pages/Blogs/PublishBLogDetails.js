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
import './BlogListShow.css';
import FullScreenImage from './FullScreenImage/FullScreenImage';
import BlogDetailsComponent from './BlogDetailsComponent';
import { formatDate } from '../../utlis/dateFormat';

const PublishBLogDetails = () => {
    useTitle("BlogDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const navigate = useNavigate();
    // CgCalendarDates

    // console.log(source);

    const handleImageClick = () => {
        setShowFullScreenImage(true);
    };

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

                    <div className="col-lg-10 mx-auto">
                        <small className=' d-flex   items-center mt-1'>
                            <p className=' d-flex'>  <FaUserAlt className=' fs-6 mx-1'></FaUserAlt>   {blog?.memberName}</p>
                            <p className=' d-flex ms-2 '> <BsCalendarDateFill className=' fs-6 mx-1'></BsCalendarDateFill>  {formatDate(blog.created_at)}</p>
                        </small>
                        <p>{blog?.summery}</p>
                    </div>

                    <BlogDetailsComponent data={blog} />
                </div>
                <div className=' d-flex justify-content-end me-3 pb-2'>
                    <Link to={"/publishedBlogs"} className='btn btn-primary btn-sm w-28'>Back</Link>
                </div>
            </section>
        </div>
    );
};

export default PublishBLogDetails;
