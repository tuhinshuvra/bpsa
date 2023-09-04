import DefaultMemberImg from '../../assets/Image/member/default_member_image.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { getCookie } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
// import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { ImPrevious, ImNext } from 'react-icons/im';
import './MemberProfilePage.css';
import '../Blogs/BlogListShow.css';


// Utility function to strip HTML tags from a string
function stripHTMLTags(htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || '';
}

// Utility function to slice the text differently based on language
function sliceTextWithMaxLength(text, maxLength) {
    const regexBengali = /^[\u0980-\u09FF\s]+$/;
    const regexEnglish = /^[A-Za-z\s]+$/;

    let slicedText = '';
    let charCount = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char.match(regexBengali)) {
            if (charCount < 160) {
                slicedText += char;
                charCount++;
            }
        } else if (char.match(regexEnglish)) {
            if (charCount < 150) {
                slicedText += char;
                charCount++;
            }
        } else {
            // Other characters (e.g., HTML tags), add them without counting towards charCount
            slicedText += char;
        }

        if (charCount === maxLength) {
            break;
        }
    }

    return slicedText;
}


const MemberProfilePage = () => {
    useTitle("Profile");
    const { user, loading, setLoading } = useContext(AllContext);
    const [memberData, setMemberData] = useState();
    const [userNewData, setUserNewData] = useState();
    const [approvedBlogs, setApprovedBlogs] = useState([]);
    const [pendingBlogs, setPendingBlogs] = useState([]);

    // console.log("Member Profile Data: ", memberData);
    // console.log("User UniqueID: ", user.UniqueID);
    // console.log("pendingBlogs :", pendingBlogs);
    // console.log("approvedBlogs :", approvedBlogs);
    // console.log("userNewData :", userNewData);

    // user new data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/forgetpass?PIMS_ID= ${user.UniqueID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member User table  Data: ", data.member)
                setUserNewData(data.member)
                setLoading(false)
            })
    }, [setLoading, user.UniqueID])


    // login member profile data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/profile/${user.UniqueID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member Profile Data: ", data)
                setMemberData(data.member)
                setLoading(false)
            })
    }, [setLoading, user.UniqueID])

    // id, nameB,nameE,bpn,fname,batch,birth,blood,bpn,phone    // designation,district,email,fname, gift, id, mname,nameB, ,    //  qualificattion,ranK,religion,status,unit,

    // member all blog
    useEffect(() => {
        setLoading(true);
        fetch("https://dev.bpsa.com.bd/api/blog", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}`);
                }
                return res.json();
            })
            .then(result => {
                const approvedBlogs = result.data.blog.filter(blog => blog?.memberName == user.name && blog?.status == "Approved");
                setApprovedBlogs(approvedBlogs);
                const pendingBlogs = result.data.blog.filter(blog => blog?.memberName == user.name && blog?.status != "Approved");
                setPendingBlogs(pendingBlogs);
            })
            .catch(error => console.log(error));
    }, [setLoading, user.name])


    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // pagination start
    const totalPendingBlogs = pendingBlogs.length;
    const totalApprovedBlogs = approvedBlogs.length;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPendingBlogs = pendingBlogs.slice(startIndex, endIndex);
    const displayedArrovedBlogs = approvedBlogs.slice(startIndex, endIndex);

    const totalPendingBlogPages = Math.ceil(pendingBlogs.length / itemsPerPage);
    const totalApprovedBlogPages = Math.ceil(pendingBlogs.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (totalPendingBlogPages) {
            if (newPage >= 1 && newPage <= totalPendingBlogPages) {
                setCurrentPage(newPage);
            }
        }
        if (totalApprovedBlogPages) {
            if (newPage >= 1 && newPage <= totalApprovedBlogPages) {
                setCurrentPage(newPage);
            }
        }
    };
    // pagination end

    if (loading) {
        <Loader></Loader>
    }

    return (
        <div className=' col-md-10 mx-auto'>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">

                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                        <h2 className='fw-bold text-center text-success'>{memberData?.nameE} Profile</h2>
                    </nav>

                    <div className="row">
                        <div className="col-lg-4 my-1 my-lg-0">
                            <div className="card  proCard shadow-lg">
                                <div className="card-body proCardBody">
                                    {userNewData?.image ?
                                        <>
                                            <img src={userNewData?.image} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg" style={{ width: "170px", height: "170px" }} />
                                        </>
                                        :
                                        <>
                                            <img src={DefaultMemberImg} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg" style={{ width: "170px" }} />
                                        </>
                                    }

                                    <div className='text-center my-0'>
                                        <Link className='imageUpload' to="/memberImageUpload" >Image Upload</Link>
                                    </div>

                                    <div className=' text-center'>
                                        <h6 className="my-0 fw-bold">{memberData?.nameE}
                                            {/* {memberData?.nameB} */}
                                        </h6>
                                        <h6 className="my-0 ">{memberData?.designation},&nbsp;{memberData?.unit}</h6>
                                        {userNewData?.CoCurriculumActivities &&
                                            <p className="mt-1 mb-0"> <b>Interest on</b> : {userNewData?.CoCurriculumActivities} </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">

                            <div className="row">
                                <div className="col-md-6 my-1 my-lg-0">
                                    <div className="card proCard shadow-lg">
                                        <div className="card-body proCardBody my-auto">
                                            <p className="my-0"><b> BP ID</b>: {memberData?.bpn}</p>
                                            <p className="my-0"><b> BCS Batch</b>: {memberData?.batch}</p>
                                            <p className="my-0"><b> Rank</b>: {memberData?.ranK}</p>
                                            <p className="my-0"><b> DOB  </b>  : {memberData?.birth}</p>
                                            <p className="my-0"><b> Phone no  </b>    : {memberData?.phone}
                                                {memberData?.Phone_office && <>,&nbsp;{memberData?.Phone_office}</>}
                                            </p>
                                            <p className="my-0"> <b> Email</b>    : {memberData?.email}
                                                {memberData?.email02 && <>, <br /> &nbsp;{memberData?.email02}</>}
                                            </p>
                                            <p className="my-0"> <b> Medal </b> : {memberData?.gift}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-1 my-lg-0">
                                    <div className="card proCard shadow-lg">
                                        <div className="card-body proCardBody">
                                            <p className="my-0"><b> Father’s Name </b> : {memberData?.fname} </p>
                                            <p className="my-0"><b> Mother’s Name </b>: {memberData?.mname}</p>
                                            <p className="my-0"><b> Education </b> : {memberData?.qualificattion}</p>
                                            <p className="my-0"><b> Marital Status </b>: {memberData?.status}</p>
                                            <p className="my-0"><b> Blood Group  </b>  : {memberData?.blood} </p>
                                            <p className="my-0"><b> Religion    </b>  : {memberData?.religion}</p>
                                            <p className="my-0"><b> Home District </b> : {memberData?.district}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' d-lg-flex justify-content-end my-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className=' text-center'>
                            <Link className=' text-white btn btn-sm btn-primary ' to="/coCurriculamEntry">Enter/Update Co Curricular Activities</Link>
                        </div>
                    </div>


                    {/* membership fee section start */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Membership Fee </h4>
                            </nav>
                        </div>
                    </div>

                    <div className="card blogArea text-center"  >
                        <div className="card-body">
                            <p className=' fs-5 fw-bold my-auto'>
                                Your membership fee payment clear till {2020}
                                <Link className='fst-italic ms-1' to={`/membershipFee/${user?.id}`}>Show Details</Link>
                            </p>
                        </div>
                    </div>
                    {/* membership fee section end */}


                    {/* member's approved blogs */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Approved Blogs </h4>
                            </nav>
                        </div>
                    </div>
                    {/* <Link className='blogDetailsLink fs-5' to={`/blogDetails/${blog.id}?source=memberAllBlog`}>{blog?.title}</Link>
                    <Link className=' fst-italic' to={`/blogDetails/${blog.id}?source=memberAllBlog`}>details</Link> */}

                    {displayedArrovedBlogs && displayedArrovedBlogs.map(blog => (
                        <div className="card blogArea my-1 px-1" key={blog?.id}>
                            <div className="d-flex px-lg-3 px-md-2">
                                {blog?.image && blog?.image !== 'link' && (
                                    <div className="col-md-2 my-auto">
                                        <img src={blog?.image} className="adminBlogListImg rounded-lg" alt="..." />
                                    </div>
                                )}

                                <div className="col-md-10">
                                    <div className="card-body">
                                        <Link className='blogDetailsLink fs-5' to={`/blogDetails/${blog.id}?source=memberAllBlog`}>{blog?.title}</Link>

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
                    ))}

                    {/* pagination start */}
                    {totalApprovedBlogs > 5 &&
                        <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                            <button
                                className=" btn    mx-1"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                {/* Previous */}
                                <ImPrevious className=' fs-3 text-main fw-bold' />
                            </button>
                            <span className="pagination-info text-black fw-bold mx-2">
                                Page {currentPage} of {totalApprovedBlogPages}, Total blog = {totalApprovedBlogs}
                            </span>
                            <button
                                className=" btn   mx-1"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalApprovedBlogPages}
                            >
                                {/* Next */}
                                <ImNext className=' fs-3 fw-bold text-main' />
                            </button>
                        </div>
                    }
                    {/* pagination end */}


                    {/* member's non approved blogs */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Non Approved Blogs </h4>
                            </nav>
                        </div>
                    </div>


                    {displayedPendingBlogs && displayedPendingBlogs.map(blog => (
                        <div className="card blogArea my-1 px-1"  >
                            <div className="d-flex px-lg-3 px-md-2">
                                {blog?.image && blog?.image !== 'link' && (
                                    <div className="col-md-2 my-auto">
                                        <img src={blog?.image} className="adminBlogListImg rounded-lg" alt="..." />
                                    </div>
                                )}

                                {(blog?.image && blog?.image !== 'link') ?
                                    <>
                                        <div className="col-md-10 d-md-flex justify-content-between">
                                            <div className=" card-body">
                                                <Link className='blogDetailsLink fs-5' to={`/blogDetails/${blog.id}`}>{blog?.title}</Link>

                                                <div className="my-0 small" dangerouslySetInnerHTML={{
                                                    __html: `${sliceTextWithMaxLength(stripHTMLTags(blog?.description), 120)}
                                                    ... <a href="/blogDetails/${blog.id}">details</a>`
                                                }}>
                                                </div>

                                                <div className='d-flex my-0'>
                                                    <div className='my-0 d-flex justify-content-between'>
                                                        <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{blog?.memberName}</small>
                                                        <small className='d-flex ms-1'>
                                                            <BsCalendarDateFill className='fs-5 mx-1'>
                                                            </BsCalendarDateFill>{formatDate(blog?.created_at)}
                                                        </small>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="my-auto">
                                                <p className=' fw-bold text-center '>{blog?.status}</p>
                                                <Link to={`/updateBlog/${blog?.id}`} className=' btn btn-primary btn-sm ms-3 w-24 '>Edit</Link>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="col-md-12 d-md-flex justify-content-between">
                                            <div className=" card-body">
                                                <Link className='blogDetailsLink fs-5' to={`/blogDetails/${blog.id}`}>{blog?.title}</Link>

                                                <div className="my-0 small" dangerouslySetInnerHTML={{
                                                    __html: `${sliceTextWithMaxLength(stripHTMLTags(blog?.description), 140)}
                                                    ... <a href="/blogDetails/${blog.id}">details</a>`
                                                }}>
                                                </div>

                                                <div className='d-flex my-0'>
                                                    <div className='my-0 d-flex justify-content-between'>
                                                        <small className='d-flex'><FaUserAlt className='fs-6 mx-1'></FaUserAlt>{blog?.memberName}</small>
                                                        <small className='d-flex ms-1'>
                                                            <BsCalendarDateFill className='fs-5 mx-1'>
                                                            </BsCalendarDateFill>{formatDate(blog?.created_at)}
                                                        </small>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="my-auto">
                                                <p className=' fw-bold text-center '>{blog?.status}</p>
                                                <Link to={`/updateBlog/${blog?.id}`} className=' btn btn-primary btn-sm ms-3 w-24 '>Edit</Link>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                    ))}
                </div>

                {/* pagination start */}
                {totalPendingBlogs > 5 &&
                    <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                        <button
                            className="btn mx-1"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ImPrevious className='fs-3 text-main fw-bold' />
                        </button>
                        <span className="pagination-info text-black fw-bold mx-2">
                            Page {currentPage} of {totalPendingBlogPages}, Total blog = {totalPendingBlogs}
                        </span>
                        <button
                            className="btn mx-1"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPendingBlogPages}
                        >
                            <ImNext className=' fs-3 fw-bold  text-main' />
                        </button>
                    </div>
                }
                {/* pagination end */}

            </section>
        </div>
    );
};

export default MemberProfilePage; 