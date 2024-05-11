import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImPrevious, ImNext } from 'react-icons/im';
import { formatDate } from '../../utlis/dateFormat';
import { sliceTextWithMaxLength, stripHTMLTags } from '../../utlis/DetectLanguage';
import './BlogListShow.css';

const AdminAllBlog = () => {
    useTitle("Admin'sAllBlog")
    const { loading, setLoading } = useContext(AllContext);
    const [blogs, setBlogs] = useState([]);
    let count = 1;

    useEffect(() => {
        setLoading(true);
        fetch("https://dev.bpsa.com.bd/api/blog", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`,
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
                setLoading(false);
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, [setLoading]);

    console.log(blogs);



    // pagination start
    const totalPosts = blogs.length;
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPosts = blogs.slice(startIndex, endIndex);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    // pagination end

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center fw-bold'>Admin's All Post</h3>
                            </nav>
                        </div>
                    </div>

                    <div className=' col-lg-10 mx-auto'>
                        {
                            displayedPosts.map(post => (
                                <div className="card blogArea my-1 px-1" key={post?.id}>
                                    <div className="d-flex px-lg-3 px-md-2">
                                        {post?.image && post?.image !== 'link' && (
                                            <div className="col-md-2 my-auto">
                                                <img src={post?.image} className="adminBlogListImg" alt="..." />
                                            </div>
                                        )}

                                        {(post?.image && post?.image !== 'link') ?
                                            <>
                                                <div className="col-md-10">
                                                    <div className="card-body">
                                                        <Link className='fs-5 blogDetailsLink' to={`/blog_details/${post?.id}`}>{post?.title.slice(0, 95)}</Link>

                                                        <div className="my-0 small" dangerouslySetInnerHTML={{
                                                            __html: `${sliceTextWithMaxLength(stripHTMLTags(post?.description), 120)}
                                                    ... <a href="/blogDetails/${post.id}">details</a>`
                                                        }}>

                                                        </div>

                                                        <div className='d-flex my-0'>
                                                            <div className='my-0 d-flex justify-content-between'>
                                                                <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{post?.memberName}</small>
                                                                <small className='d-flex ms-1'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(post?.created_at)}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="col-md-12">
                                                    <div className="card-body">
                                                        <Link className=' fs-5 blogDetailsLink ' to={`/blog_details/${post?.id}`}>{post?.title.slice(0, 95)}</Link>

                                                        <div className="my-0 small" dangerouslySetInnerHTML={{
                                                            __html: `${sliceTextWithMaxLength(stripHTMLTags(post?.description), 130)}
                                                    ... <a href="/blogDetails/${post.id}">details</a>`
                                                        }}>

                                                        </div>

                                                        <div className='d-flex my-0'>
                                                            <div className='my-0 d-flex justify-content-between'>
                                                                <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{post?.memberName}</small>
                                                                <small className='d-flex ms-1'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(post?.created_at)}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>


                {/* pagination start */}
                {totalPages > 1 && (
                    <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                        <button
                            className="btn btn-outline-light   mx-1"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ImPrevious className='fs-3 text-main fw-bold' />
                        </button>
                        <span className="pagination-info text-black fw-bold mx-2">
                            Page {currentPage} of {totalPages}, Total post = {blogs.length}
                        </span>
                        <button
                            className="btn btn-outline-light    mx-1"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ImNext className=' fs-3  fw-bold text-main' />
                        </button>
                    </div>
                )}
                {/* pagination end */}
            </section>
        </div>
    );
};

export default AdminAllBlog;
