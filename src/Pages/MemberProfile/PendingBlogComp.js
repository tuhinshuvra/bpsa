import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sliceTextWithMaxLength, stripHTMLTags } from '../../utlis/DetectLanguage';
import { FaUserAlt } from 'react-icons/fa';
import { BsCalendarDateFill } from 'react-icons/bs';
import { ImPrevious, ImNext } from 'react-icons/im';
import { formatDate } from '../../utlis/dateFormat';

const PendingBlogComp = ({ pendingPosts }) => {


    const totalPendingPosts = pendingPosts.length;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPendingPosts = pendingPosts?.slice(startIndex, endIndex);

    const totalPendingPostPages = Math.ceil(pendingPosts.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (totalPendingPostPages) {
            if (newPage >= 1 && newPage <= totalPendingPostPages) {
                setCurrentPage(newPage);
            }
        }

    };

    return (
        <div>
            <div className="row mt-5 mb-2">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                        <h4 className=' text-center'>Non Approved Posts</h4>
                    </nav>
                </div>
            </div>


            {displayedPendingPosts.length > 0 ? displayedPendingPosts.map((post, index) => (
                <div className="card blogArea my-1 px-1" key={index} >
                    <div className="d-flex px-lg-3 px-md-2">
                        {post?.image && post?.image !== 'link' && (
                            <div className="col-md-2 my-auto">
                                <img src={post?.image} className="adminBlogListImg" alt="..." />
                            </div>
                        )}

                        {(post?.image && post?.image !== 'link') ?
                            <>
                                <div className="col-md-10 d-md-flex justify-content-between">
                                    <div className=" card-body">
                                        <Link className='blogDetailsLink fs-5' to={`/blogDetails/${post.id}`}>{post?.title?.slice(0, 95)}</Link>

                                        <div className="my-0 small" dangerouslySetInnerHTML={{
                                            __html: `${sliceTextWithMaxLength(stripHTMLTags(post?.description), 120)}
                                                    ... <a href="/blogDetails/${post.id}">details</a>`
                                        }}>
                                        </div>

                                        <div className='d-flex my-0'>
                                            <div className='my-0 d-flex justify-content-between'>
                                                <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{post?.memberName}</small>
                                                <small className='d-flex ms-1'>
                                                    <BsCalendarDateFill className='fs-5 mx-1'>
                                                    </BsCalendarDateFill>{formatDate(post?.created_at)}
                                                </small>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="my-auto">
                                        <p className=' fw-bold text-center '>{post?.status}</p>
                                        <Link to={`/updateBlog/${post?.id}`} className=' btn btn-outline-secondary btn-sm ms-3 w-24 '>Edit</Link>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="col-md-12 d-md-flex justify-content-between">
                                    <div className=" card-body">
                                        <Link className='blogDetailsLink fs-5' to={`/blogDetails/${post.id}`}>{post?.title?.slice(0, 95)}</Link>

                                        <div className="my-0 small" dangerouslySetInnerHTML={{
                                            __html: `${sliceTextWithMaxLength(stripHTMLTags(post?.description), 140)}
                                                    ... <a href="/blogDetails/${post.id}">details</a>`
                                        }}>
                                        </div>

                                        <div className='d-flex my-0'>
                                            <div className='my-0 d-flex justify-content-between'>
                                                <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{post?.memberName}</small>
                                                <small className='d-flex ms-1'>
                                                    <BsCalendarDateFill className='fs-5 mx-1'>
                                                    </BsCalendarDateFill>{formatDate(post?.created_at)}
                                                </small>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="my-auto">
                                        <p className=' fw-bold text-center '>{post?.status}</p>
                                        <Link to={`/updateBlog/${post?.id}`} className=' btn btn-outline-secondary btn-sm ms-3 w-24 '>Edit</Link>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>

            )) : <h5 className=' fw-bold text-center'>No blog to show</h5>
            }

            {totalPendingPosts > 5 &&
                <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                    <button
                        className="btn btn-outline-light mx-1"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ImPrevious className='fs-3 text-main fw-bold' />
                    </button>
                    <span className="pagination-info text-black fw-bold mx-2">
                        Page {currentPage} of {totalPendingPostPages}, Total post = {totalPendingPosts}
                    </span>
                    <button
                        className="btn btn-outline-light mx-1"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPendingPostPages}
                    >
                        <ImNext className=' fs-3 fw-bold  text-main' />
                    </button>
                </div>
            }
        </div>
    );
};

export default PendingBlogComp;