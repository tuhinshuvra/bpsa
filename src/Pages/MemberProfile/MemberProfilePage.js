import DefaultMemberImg from '../../assets/Image/member/default_member_image.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { getCookie } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import { BsCalendarDateFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImPrevious, ImNext } from 'react-icons/im';
import { formatDate } from '../../utlis/dateFormat';
import { sliceTextWithMaxLength, stripHTMLTags } from '../../utlis/DetectLanguage';
import MemberImageUpload from './MemberImageUpload';
import MemberCoCurriculamActivitiesEntry from './MemberCoCurriculamActivitiesEntry';
import './MemberProfilePage.css';
import '../Blogs/BlogListShow.css';
import axios from 'axios';

const MemberProfilePage = () => {
    useTitle("Profile");
    const { user, loading, setLoading, showImageUpload, setShowImageUpload, showCoCurricular, setShowCoCurricular, setMemberBCSBatch } = useContext(AllContext);
    const [memberData, setMemberData] = useState();
    const [userNewData, setUserNewData] = useState();
    const [approvedPosts, setApprovedPosts] = useState([]);
    const [pendingPosts, setPendingPosts] = useState([]);

    // console.log("memberBCSBatch", memberBCSBatch);

    const [profileUser,setProfileUser]=useState("");
    const [accessToken, setAccessToken] = useState('');
    const tokenUrl = 'https://pims.police.gov.bd:8443/pimslive/webpims/oauth/token';
    const clientId = 'ipzE6wqhPmeED-EV3lvPUA..';
    const clientSecret = 'ZIBtAfMkfuKKYqZtbik-TA..';
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = 'grant_type=client_credentials';

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const response = await axios.post(tokenUrl, data, { headers });
                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        }
        getAccessToken();
    }, [])

    useEffect(() => {
        const profileData = async () => {
            if (!accessToken) {
                return;
            }
            await axios.get("https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/member-profile/BP7303027822",{
                headers:{
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            .then(result=>{
                setProfileUser(result.data.items[0]);
            })
        }
        profileData();
    }, [accessToken])

    if(profileUser){
        console.log(profileUser);
    }

    // console.log("MemberProfilePage User Data: ", user);
    console.log("Member Profile Data memberData: ", memberData);
    // console.log("User UniqueID: ", user?.BPID);
    // console.log("userNewData :", userNewData);
    // user new data
    useEffect(() => {
        setLoading(true);
        fetch(`https://dev.bpsa.com.bd/api/pms?PIMS_ID= ${user?.BPID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member User table  Data: ", data.value)
                setUserNewData(data?.value)
                setLoading(false)
            })
    }, [])

    // login member profile data
    useEffect(() => {
        setLoading(true);
        // fetch(`https://dev.bpsa.com.bd/api/profile/${user?.BPID}`)
        fetch(`https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/member-profile/BP7603027839`)
            .then(res => res.json())
            .then(data => {
                console.log("pims.police.gov.bd Member Profile Data: ", data)
                setMemberData(data?.member)
                setMemberBCSBatch(data?.member?.batch);
                setLoading(false)
            })
    }, [setLoading, user?.BPID])

    // id, nameB,nameE,bpn,fname,batch,birth,blood,bpn,phone    // designation,district,email,fname, gift, id, mname,nameB, ,    //  qualificattion,ranK,religion,status,unit,

    // member all post
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
                const approvedPosts = result.data.blog.filter(post => post?.memberName == user.name && post?.status == "Approved");
                setApprovedPosts(approvedPosts);
                const pendingPosts = result.data.blog.filter(post => post?.memberName == user.name && post?.status != "Approved");
                setPendingPosts(pendingPosts);
            })
            .catch(error => console.log(error));
    }, [setLoading, user.name])


    // pagination start
    const totalPendingPosts = pendingPosts.length;
    const totalApprovedPosts = approvedPosts.length;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPendingPosts = pendingPosts?.slice(startIndex, endIndex);
    const displayedArrovedBlogs = approvedPosts?.slice(startIndex, endIndex);

    const totalPendingPostPages = Math.ceil(pendingPosts.length / itemsPerPage);
    const totalApprovedPostPages = Math.ceil(pendingPosts.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (totalPendingPostPages) {
            if (newPage >= 1 && newPage <= totalPendingPostPages) {
                setCurrentPage(newPage);
            }
        }
        if (totalApprovedPostPages) {
            if (newPage >= 1 && newPage <= totalApprovedPostPages) {
                setCurrentPage(newPage);
            }
        }
    };
    // pagination end

    if (loading) {
        return <Loader></Loader>
    }

    const toggleImageUpload = () => {
        setShowImageUpload(!showImageUpload);
    };

    const toggleCoCurricularUpload = () => {
        setShowCoCurricular(!showCoCurricular);
    };

    return (
        <div className=' col-md-10 mx-auto'>

            {/* <MemberProfileSample></MemberProfileSample> */}

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">

                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                        <h2 className='fw-bold text-center  '>{memberData?.nameE} Profile</h2>
                    </nav>

                    <div className="row">
                        <div className="col-lg-4 my-1 my-lg-0">
                            <div className="card  proCard shadow-lg">
                                <div className="card-body proCardBody ">
                                    {userNewData?.image ?
                                        <>
                                            <img src={userNewData?.image} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg mb-0" style={{ width: "165px", height: "165px" }} />
                                        </>
                                        :
                                        <>
                                            <img src={DefaultMemberImg} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg mb-0" style={{ width: "165px" }} />
                                        </>
                                    }

                                    <div className='text-center mt-[-11px] mb-[-7px] '>
                                        {showImageUpload ? (
                                            <div>
                                                <MemberImageUpload />
                                            </div>
                                        ) : (
                                            <button className='imageUpload' onClick={toggleImageUpload}>
                                                {userNewData?.image ? <>Update Image</> : <>Image Upload</>}
                                            </button>
                                        )}
                                    </div>


                                    <div className=' text-center'>
                                        <h6 className="my-0 fw-bold">{memberData?.nameE?.slice(0, 40)}
                                        </h6>
                                        <h6 className="my-0 fs-6 ">{memberData?.designation},&nbsp;{memberData?.unit}</h6>
                                        {userNewData?.CoCurriculumActivities &&
                                            <p className="mt-1 mb-0 coCurriculur"> <b>Interest on</b> : {userNewData?.CoCurriculumActivities} </p>
                                        }


                                        {showCoCurricular ? (
                                            <div>
                                                <MemberCoCurriculamActivitiesEntry />
                                            </div>
                                        ) : (
                                            <button className='coCurricularUpload' onClick={toggleCoCurricularUpload}>
                                                {userNewData?.CoCurriculumActivities ? <>Update Co-Curricular Activities</> : <>  CoCurricular Activities Upload</>}
                                            </button>
                                        )}
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
                                            <p className="my-0"> <b> Email</b>    : <small>{memberData?.email}</small>
                                                {memberData?.email02 && <>, <small>  {memberData?.email02}</small></>}
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
                                <h4 className=' text-center'>Approved Posts</h4>
                            </nav>
                        </div>
                    </div>

                    {displayedArrovedBlogs && displayedArrovedBlogs.map((blog, index) => (
                        <div className="card blogArea my-1 px-1" key={index}>
                            <div className="d-flex px-lg-3 px-md-2">
                                {blog?.image && blog?.image !== 'link' && (
                                    <div className="col-md-2 my-auto">
                                        <img src={blog?.image} className="adminBlogListImg rounded-lg" alt="..." />
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
                    ))}

                    {/* pagination start */}
                    {totalApprovedPosts > 5 &&
                        <div className="pagination d-flex justify-content-center align-items-center pt-1 pb-4">
                            <button
                                className=" btn btn-outline-light   mx-1"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                {/* Previous */}
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
                                {/* Next */}
                                <ImNext className=' fs-3 fw-bold text-main' />
                            </button>
                        </div>
                    }
                    {/* pagination end */}


                    {/* member's non approved posts */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Non Approved Posts</h4>
                            </nav>
                        </div>
                    </div>


                    {displayedPendingPosts && displayedPendingPosts.map((post, index) => (
                        <div className="card blogArea my-1 px-1" key={index} >
                            <div className="d-flex px-lg-3 px-md-2">
                                {post?.image && post?.image !== 'link' && (
                                    <div className="col-md-2 my-auto">
                                        <img src={post?.image} className="adminBlogListImg rounded-lg" alt="..." />
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
                                                <Link to={`/updateBlog/${post?.id}`} className=' btn btn-primary btn-sm ms-3 w-24 '>Edit</Link>
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
                                                <Link to={`/updateBlog/${post?.id}`} className=' btn btn-primary btn-sm ms-3 w-24 '>Edit</Link>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                    ))}
                </div>

                {/* pagination start */}
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
                {/* pagination end */}

            </section>
        </div>
    );
};

export default MemberProfilePage; 