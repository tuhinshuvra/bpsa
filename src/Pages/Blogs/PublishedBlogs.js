import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import './BlogListShow.css';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImPrevious, ImNext } from 'react-icons/im';
import { formatDate } from '../../utlis/dateFormat';
import { sliceTextWithMaxLength, stripHTMLTags } from '../../utlis/DetectLanguage';

const PublishedBlogs = () => {
    useTitle("Blogs");
    const { user, loading, setLoading } = useContext(AllContext);
    const [blogLoading, setBlogLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    // Pagination
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

    useEffect(() => {
        setLoading(true);
        fetch("https://dev.bpsa.com.bd/api/Approvedblog")
            .then((res) => res.json())
            .then((result) => {
                setBlogs(result.data.blog);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API request error:", error);
                setLoading(false);
            });
    }, [setLoading]);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3">
                    <div className="col-lg-10 mx-auto">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                            <h3 className='text-center fw-bold'>Blogs</h3>
                        </nav>
                    </div>
                    <div className=' col-lg-10 mx-auto'>
                        {displayedBlogs.map((blog) => (
                            <div className="card blogArea my-1 px-1" key={blog?.id}>
                                <div className="d-flex px-lg-3 px-md-2">
                                    {blog?.image && blog?.image !== 'link' && (
                                        <div className="col-md-2 my-auto">
                                            <img src={blog?.image} className="adminBlogListImg rounded-lg" alt="..." />
                                        </div>
                                    )}

                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <Link className='fs-5 blogDetailsLink' to={`/publishedBlogDetail/${blog?.id}`}>{blog?.title.slice(0, 95)}</Link>

                                            {(blog?.image && blog?.image !== 'link') ?
                                                <>
                                                    <small className="my-0" dangerouslySetInnerHTML={{
                                                        __html: `${sliceTextWithMaxLength(stripHTMLTags(blog?.description), 115)}... <a href="/publishedBlogDetail/${blog.id}">details</a>`
                                                    }}></small>
                                                </>

                                                :
                                                <>
                                                    <small className="my-0" dangerouslySetInnerHTML={{
                                                        __html: `${sliceTextWithMaxLength(stripHTMLTags(blog?.description), 120)}... <a href="/publishedBlogDetail/${blog.id}">details</a>`
                                                    }}></small>
                                                </>
                                            }

                                            <div className='d-flex my-0'>
                                                <div className='my-0 d-flex justify-content-between'>
                                                    <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{blog?.memberName}</small>
                                                    <small className='d-flex ms-1'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(blog?.created_at)}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {totalPages > 1 && (
                    <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                        <button
                            className="btn btn-outline-light  mx-1"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ImPrevious className='fs-3 text-main fw-bold' />
                        </button>
                        <span className="pagination-info text-black fw-bold mx-2">
                            Page {currentPage} of {totalPages}, Total blog = {blogs.length}
                        </span>
                        <button
                            className="btn  btn-outline-light mx-1"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ImNext className=' fs-3  fw-bold text-main' />
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default PublishedBlogs;