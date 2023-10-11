import React from 'react';
import { Link } from 'react-router-dom';
import { sliceTextWithMaxLength, stripHTMLTags } from '../../utlis/DetectLanguage';
import { FaUserAlt } from 'react-icons/fa';
import { BsCalendarDateFill } from 'react-icons/bs';
import { ImPrevious, ImNext } from 'react-icons/im';
import { useState } from 'react';
import { formatDate } from '../../utlis/dateFormat';
import PaginationComponent from '../../Components/Common/PaginationComponent';

const ApprovedBlogComp = ({ approvedPosts }) => {

    const totalApprovedPosts = approvedPosts.length;


    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);
    const itemsPerPage = 5;
    const [showperPage, setShowPerPage] = useState(5);

    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedArrovedBlogs = approvedPosts?.slice(startIndex, endIndex);

    const totalApprovedPostPages = Math.ceil(approvedPosts.length / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
        setStart(showperPage * value - showperPage);
        setEnd(showperPage * value);
    };

    const handlePageChange = (newPage) => {
        if (totalApprovedPostPages) {
            if (newPage >= 1 && newPage <= totalApprovedPostPages) {
                setCurrentPage(newPage);
            }
        }
    };


    return (
        <div>
            <div className="row mt-4 mb-2">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                        <h4 className=' text-center'>Approved Posts</h4>
                    </nav>
                </div>
            </div>

            {displayedArrovedBlogs.length > 0 ? displayedArrovedBlogs.map((blog, index) => (
                <div className="card blogArea my-1 px-1" key={index}>
                    <div className="d-flex px-lg-3 px-md-2">
                        {blog?.image && blog?.image !== 'link' && (
                            <div className="col-md-2 my-auto">
                                <img src={blog?.image} className="adminBlogListImg" alt="..." />
                            </div>
                        )}

                        <div className="col-md-10">
                            <div className="card-body">
                                <Link className='blogDetailsLink fs-5' to={`/blogDetails/${blog.id}?source=memberAllBlog`}>{blog?.title?.slice(0, 95)}</Link>

                                {(blog?.image && blog?.image !== 'link') ?
                                    <>
                                        <small className="my-0" dangerouslySetInnerHTML={{
                                            __html: `${sliceTextWithMaxLength(stripHTMLTags(blog?.description), 145)}... <a href="/blogDetails/${blog.id}">details</a>`
                                        }}></small>
                                    </>

                                    :
                                    <>
                                        <small className="my-0" dangerouslySetInnerHTML={{
                                            __html: `${sliceTextWithMaxLength(stripHTMLTags(blog?.description), 150)}... <a href="/blogDetails/${blog.id}">details</a>`
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
            )) : <h5 className=' fw-bold text-center'>No blog to show</h5>}

            {/* pagination start */}
            {totalApprovedPosts > 5 &&
                <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                    <button
                        className=" btn btn-outline-light   mx-1"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ImPrevious className=' fs-3 text-main fw-bold' />
                    </button>
                    <span className="pagination-info text-black fw-bold mx-2">
                        Page {currentPage} of {totalApprovedPostPages}, Total post = {totalApprovedPosts}
                    </span>
                    <button
                        className=" btn btn-outline-light  mx-1"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalApprovedPostPages}
                    >
                        <ImNext className=' fs-3 fw-bold text-main' />
                    </button>
                </div>
            }
            {/* pagination end */}

            {/* <PaginationComponent
                count={Math.ceil(approvedPosts?.length / showperPage)}
                pageNumber={page}
                handleChange={handleChange}
                className="flex items-center justify-between px-lg-5 py-3"
                start={start}
                end={end}
                total={approvedPosts?.length}
                isShow={true}
            /> */}


        </div>
    );
};

export default ApprovedBlogComp;