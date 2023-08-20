import DefaultMemberImg from '../../assets/Image/member/default_member_image.png'
import BlogImg from '../../assets/Image/blog/blog_image.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../hooks/ContextData';
import './MemberProfilePage.css';

const MemberProfilePage = () => {
    useTitle("Profile");
    const { user, setUser, userDetails, setUserDetails, token, setToken, loading, setLoading } = useContext(AllContext);
    const [approvedBlogs, setApprovedBlogs] = useState();
    const [pendingBlogs, setPendingBlogs] = useState();
    const [memberData, setMemberData] = useState();

    console.log("Member Profile Data: ", memberData);
    console.log("User UniqueID: ", user.UniqueID);
    // console.log("pendingBlogs :", pendingBlogs);
    // console.log("approvedBlogs :", approvedBlogs);


    // login member profile data
    useEffect(() => {
        fetch(`http://dev.bpsa.com.bd/api/profile/${user.UniqueID}`)
            // fetch(`http://dev.bpsa.com.bd/api/profile/BP750510460`)
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
        fetch(" https://dev.bpsa.com.bd/api/blog")
            .then(res => res.json())
            .then(result => {
                const approvedBlogs = result.data.blog.filter(blog => blog?.memberName == user?.name && blog?.status == "Approved");
                setApprovedBlogs(approvedBlogs);
                const pendingBlogs = result.data.blog.filter(blog => blog?.memberName == user?.name && blog?.status != "Approved");
                setPendingBlogs(pendingBlogs);
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, [user?.name, setLoading])


    const formatDate = (dateString) => {
        const options = { year: 'numeric', day: '2-digit', month: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    if (loading) {
        setLoading();
    }

    return (
        <div className=' col-md-10 mx-auto'>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center fw-bold'>{memberData?.nameE} Profile</h3>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card  proCartBody shadow-lg">
                                <div className="card-body">
                                    {user?.image ? <>

                                        <img src={user?.image} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg" style={{ width: "150px" }} />
                                    </> :
                                        <>
                                            <img src={DefaultMemberImg} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg" style={{ width: "150px" }} />
                                        </>

                                    }

                                    <div className='text-center'>
                                        <Link className='imageUpload' to="/memberImageUpload" >Image Upload</Link>
                                    </div>

                                    <div className=' text-center'>
                                        <h5 className="my-0 fw-bold">{memberData?.nameE}
                                            {/* {memberData?.nameB} */}
                                        </h5>
                                        <h6 className="my-0 ">Designation : {memberData?.designation}</h6>
                                    </div>
                                    <div className='col-md-7 mx-auto d-flex flex-column justify-content-lg-start memberProFont'>
                                        <p className="  my-0"> <b> BP/SIV No.</b>: {memberData?.bpn}</p>
                                        <p className="  my-0"> <b> Rank</b>   : {memberData?.ranK}</p>
                                        {/* <p className="  my-0"><b>Sub Unit</b>: {memberData.unit}</p> */}
                                        <p className="  my-0"><b>Unit     </b>: {memberData?.unit}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card proCartBody shadow-lg">
                                        <div className="card-body  my-auto">
                                            <p className="  my-0"><b>BCS Batch</b>: {memberData?.batch}</p>
                                            <p className="my-0"><b> Father’s Name </b> : {memberData?.fname} </p>
                                            <p className="my-0"><b> Mother’s Name </b>: {memberData?.mname}</p>
                                            <p className="my-0"><b> Birth Year  </b>  : {memberData?.birth}</p>
                                            <p className="my-0"><b> Own District </b> : {memberData?.district}</p>
                                            <p className="my-0"><b> Blood Group  </b>  : {memberData?.blood} </p>
                                            <p className="my-0"><b> Religion    </b>  : {memberData?.religion}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card proCartBody shadow-lg">
                                        <div className="card-body ">
                                            <p className="my-1"> <b> Marital Status </b>: {memberData?.status}</p>
                                            <p className="my-1"> <b> Mobile no  </b>    : {memberData?.phone}</p>
                                            {/* <p className="my-1"> <b>Phone no(govt) </b> : 012345634324</p> */}
                                            <p className="my-1"> <b>Email     </b>      : {memberData?.email}</p>
                                            {/* <p className="my-1"> <b>Email(govt) </b>    : abulkashemgovt@gmail.com</p> */}
                                            <p className="my-1"> <b> Highest Degree </b> : {memberData?.qualificattion}</p>
                                            <p className="my-1"> <b> District </b> : {memberData?.district}</p>
                                            <p className="my-1"> <b> Prize Achieve </b> : {memberData?.gift}</p>
                                            {user?.CoCurriculumActivities &&
                                                <p className="my-1"> <b> Co Curricular Activities </b> : {user?.CoCurriculumActivities} </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' d-flex justify-content-end my-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <Link className=' text-white btn btn-sm btn-primary' to="/memberCoCurriculamActivitiesEntry">Enter/Update Co Curricular Activities</Link>
                    </div>



                    {/* member's approved blogs */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Approved Blogs </h4>
                            </nav>
                        </div>
                    </div>

                    {
                        approvedBlogs && approvedBlogs.map(blog => (
                            <div>
                                <div className="card blogArea my-1"  >
                                    <div className="d-flex">
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className=" ">{blog?.title}</h5>
                                                <p className=" my-0 ">{blog?.description.slice(0, 180)} </p>
                                                <div className=' d-flex justify-content-evenly'>
                                                    <div className=' d-flex col-md-5 me-auto   my-0'>
                                                        <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> {blog?.memberName} </small></p>
                                                        <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> {formatDate(blog?.created_at)}</small></p>
                                                    </div>
                                                    <div>
                                                        <Link className='  fw-bold my-0' to={`/blogDetails/${blog.id}?source=memberAllBlog`}>Show Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 my-auto">
                                            <img src={blog?.image} className="memberBlogImg rounded-lg" alt="..." />
                                        </div>
                                        {/* <div className="col-md-1 my-auto">
                                            <p className=' fw-bold '>{blog?.status}</p>
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                    {/* pagination */}
                    <div className=' d-flex justify-content-center my-0'>
                        <nav aria-label="...">
                            <ul className=" pagination ">
                                <li className="page-item">
                                    <Link className="page-link">Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                <li className="page-item active" aria-current="page">
                                    <Link className="page-link" href="#">2 <span className="visually-hidden">(current)</span></Link>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#">Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    {/* member's non approved blogs */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Non Approved Blogs </h4>
                            </nav>
                        </div>
                    </div>


                    {
                        pendingBlogs && pendingBlogs.map(blog => (
                            <div>
                                <div className="card blogArea my-1"  >
                                    <div className="d-flex">
                                        <div className="col-md-9">
                                            <div className="card-body">
                                                <h5 className=" ">{blog?.title}</h5>
                                                <p className=" my-0 ">{blog?.description.slice(0, 180)} </p>
                                                <div className=' d-flex justify-content-evenly'>
                                                    <div className=' d-flex col-md-5 me-auto   my-0'>
                                                        <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> {blog?.memberName} </small></p>
                                                        <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> {formatDate(blog?.created_at)}</small></p>
                                                    </div>
                                                    <div>
                                                        <Link className='  fw-bold my-0' to={`/blogDetails/${blog.id}?source=memberAllBlog`}>Show Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 my-auto">
                                            <img src={blog?.image} className="memberBlogImg rounded-lg" alt="..." />
                                        </div>
                                        <div className="col-md-1 my-auto">
                                            <p className=' fw-bold '>{blog?.status}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>

                {/* pagination */}
                <div className=' d-flex justify-content-center my-0'>
                    <nav aria-label="...">
                        <ul className=" pagination ">
                            <li className="page-item">
                                <Link className="page-link">Previous</Link>
                            </li>
                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item active" aria-current="page">
                                <Link className="page-link" href="#">2 <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" href="#">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>



        </div>
    );
};

export default MemberProfilePage; 