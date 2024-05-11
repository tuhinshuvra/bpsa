import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImPrevious, ImNext } from 'react-icons/im';
import { formatDate } from '../../utlis/dateFormat';
import { sliceTextWithMaxLength, stripHTMLTags } from '../../utlis/DetectLanguage';
import './BlogListShow.css';

const PublishedBlogs = () => {
    useTitle("Posts");
    const { user, loading, setLoading } = useContext(AllContext);
    const [posts, setPosts] = useState([]);

    // Pagination
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPosts = posts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(posts.length / itemsPerPage);
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
                setPosts(result.data.blog);
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
                            <h3 className='text-center fw-bold'>Posts</h3>
                        </nav>
                    </div>
                    <div className=' col-lg-10 mx-auto'>
                        {displayedPosts.map((post) => (
                            <div className="card blogArea my-1 px-1" key={post?.id}>
                                <div className="d-flex px-lg-3 px-md-2">
                                    {post?.image && post?.image !== 'link' && (
                                        <div className="col-md-2 my-auto">
                                            <img src={post?.image} className="adminBlogListImg" alt="..." />
                                        </div>
                                    )}

                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <Link className='fs-5 blogDetailsLink' to={`/publishedBlogDetail/${post?.id}`}>{post?.title.slice(0, 95)}</Link>

                                            {(post?.image && post?.image !== 'link') ?
                                                <>
                                                    <small className="my-0" dangerouslySetInnerHTML={{
                                                        __html: `${sliceTextWithMaxLength(stripHTMLTags(post?.description), 115)}... <a href="/publishedBlogDetail/${post.id}">details</a>`
                                                    }}></small>
                                                </>

                                                :
                                                <>
                                                    <small className="my-0" dangerouslySetInnerHTML={{
                                                        __html: `${sliceTextWithMaxLength(stripHTMLTags(post?.description), 120)}... <a href="/publishedBlogDetail/${post.id}">details</a>`
                                                    }}></small>
                                                </>
                                            }

                                            <div className='d-flex my-0'>
                                                <div className='my-0 d-flex justify-content-between'>
                                                    <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{post?.memberName}</small>
                                                    <small className='d-flex ms-1'><BsCalendarDateFill className='fs-5 mx-1'></BsCalendarDateFill>{formatDate(post?.created_at)}</small>
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
                            Page {currentPage} of {totalPages}, Total posts = {posts.length}
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