import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { TbStatusChange } from 'react-icons/tb';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
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

    console.log(blogs);


    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    if (loading) {
        <Loader></Loader>
    }

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


    return (
        <div className='col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center fw-bold'> Admin's All Blog</h3>
                            </nav>
                        </div>
                    </div>
                    <div className=' col-lg-10 mx-auto'>
                        {
                            displayedBlogs.map(blog => (
                                <div className="card blogArea my-1 px-1" key={blog?.id}>
                                    <div className="d-flex px-lg-3 px-md-2">
                                        {(blog?.image && blog?.image != 'link') &&
                                            <div className="col-md-2 my-auto">
                                                <img src={blog?.image} className="adminBlogListImg rounded-lg" alt="..." />
                                            </div>
                                        }

                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <Link className=' fs-5 blogDetailsLink ' to={`/blog_details/${blog?.id}`}>{blog?.title}</Link>
                                                {/* <p className=" my-0 ">{blog?.description.slice(0, 80)}...
                                                    <Link className=' fst-italic ' to={`/blog_details/${blog?.id}`}>details</Link>
                                                </p> */}

                                                <small className="my-0" dangerouslySetInnerHTML={{
                                                    __html: `${blog?.description.slice(0, 180)} <a href="/blog_details/${blog.id}">...details</a>`
                                                }}></small>

                                                {/* <p>{blog.summary}</p> */}

                                                <div className=' d-flex        my-0'>
                                                    <div className=' my-0  d-flex justify-content-between '>
                                                        <p className='d-flex'><FaUserAlt className='fs-5 mx-1'></FaUserAlt>{blog?.memberName}</p>
                                                        <p className='d-flex ms-1'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(blog?.created_at)}</p>
                                                    </div>
                                                    <p className=" d-flex "> <TbStatusChange className='fs-4 ms-4'></TbStatusChange> {blog?.status} </p>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>


                {/* pagination start */}
                {totalBlogs > 0 &&
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

export default AdminAllBlog;
