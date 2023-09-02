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
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const PublishedBlogs = () => {
    useTitle("Blogs");
    const { user, loading, setLoading, } = useContext(AllContext);
    const [blogLoading, setBlogLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    // pagination start
    const totalBlogs = blogs.length;
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedBlogs = blogs.slice(startIndex, endIndex);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    // pagination end


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

    if (blogs) {
        console.log(blogs);
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
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
                            <h3 className=' text-center fw-bold'>Blogs</h3>
                        </nav>
                    </div>
                    <div className=' col-lg-10 mx-auto'>
                        {
                            displayedBlogs.map(blog => (
                                <div className="card blogArea my-1" key={blog?.id}>
                                    <div className="d-flex px-lg-3 px-md-2">
                                        <div className="col-md-2 my-auto">
                                            <img src={blog.image} className="memberBlogImg rounded-lg" alt="..." />
                                        </div>

                                        <div className="card-body">
                                            <Link className=' fs-5 blogDetailsLink ' to={`/publishedBlogDetail/${blog?.id}`}>{blog?.title}</Link>
                                            {/* <p className=" my-0 ">{blog?.description.slice(0, 90)}...
                                                <Link className=' fst-italic ' to={`/publishedBlogDetail/${blog?.id}`}>details</Link>
                                            </p> */}


                                            {blog?.description &&
                                                <div className=' d-flex'>
                                                    <div className=' d-flex'>
                                                        <p className="my-0" dangerouslySetInnerHTML={{ __html: `${blog?.description.slice(0, 105)}` }}></p>
                                                        ...
                                                    </div>
                                                    <Link className=' fst-italic ' to={`/publishedBlogDetail/${blog?.id}`}>details</Link>
                                                </div>
                                            }


                                            {/* <p>{blog.summery}</p> */}
                                            <div className=' my-0  d-flex items-center'>
                                                <p className='d-flex'><FaUserAlt className='fs-5 mx-1'></FaUserAlt>{blog?.memberName}</p>
                                                <p className='d-flex'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(blog?.created_at)}</p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* pagination start */}
                {totalBlogs > 10 &&
                    <div className="pagination d-flex justify-content-center align-items-baseline pt-1 pb-4">
                        <button
                            className=" btn btn-primary btn-sm  mx-1"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            {/* Previous */}
                            <GrLinkPrevious className=' text-white fw-bold' />
                        </button>
                        <span className="pagination-info text-success fw-bold mx-2">
                            Page {currentPage} of {totalPages}, Total blog = {totalBlogs}
                        </span>
                        <button
                            className=" btn btn-primary btn-sm mx-1"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            {/* Next */}
                            <GrLinkNext className=' fw-bold text-white' />
                        </button>
                    </div>
                }
                {/* pagination end */}

            </section>
        </div>
    );
};

export default PublishedBlogs;