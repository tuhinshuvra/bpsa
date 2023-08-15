import MemberImg from '../../assets/Image/messages/President_2021_Stamp.jpg'
import BlogImg from '../../assets/Image/blog/blog_image.png'
import { Link } from 'react-router-dom';
import './MemberProfilePage.css';
import useTitle from '../../hooks/useTitle';

const MemberProfilePage = () => {
    useTitle("Profile");

    return (
        <div className=' col-md-10 mx-auto'>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center fw-bold'>Abdur Razzak Profile</h3>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card  proCartBody shadow-lg">
                                <div className="card-body">
                                    <img src={MemberImg} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg" style={{ width: "150px" }} />

                                    <div className='text-center'>
                                        <Link className='imageUpload' to="/memberImageUpload" >Image Upload</Link>
                                    </div>

                                    <div className=' text-center'>
                                        <h6 className="my-0">Abdur Razzak(আব্দুর রাজ্জাক)</h6>
                                        <h6 className="my-0 ">Designation : AIG</h6>
                                    </div>
                                    <div className='col-md-7 mx-auto d-flex flex-column justify-content-lg-start memberProFont'>
                                        <p className="  my-0"> <b> BP/SIV No.</b>: BP750510460</p>
                                        <p className="  my-0"> <b> Rank</b>   : SP</p>
                                        <p className="  my-0"><b>Main Unit</b>: ABPN</p>
                                        <p className="  my-0"><b>Unit     </b>: CTSB</p>
                                        <p className="  my-0"><b>BCS Batch</b>: 23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card proCartBody shadow-lg">
                                        <div className="card-body  my-auto">
                                            <p className="my-0"><b> Father’s Name </b> : Abbas Uddin</p>
                                            <p className="my-0"><b> Mother’s Name </b>: Momena Khatun</p>
                                            <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                            <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                            <p className="my-0"><b> Religion    </b>  : Islam</p>
                                            <p className="my-1"> <b> Marital Status </b>: Married</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card proCartBody shadow-lg">
                                        <div className="card-body ">
                                            <p className="my-1"> <b> Mobile no  </b>    : 01234567890</p>
                                            <p className="my-1"> <b>Phone no(govt) </b> : 012345634324</p>
                                            <p className="my-1"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                            <p className="my-1"> <b>Email(govt) </b>    : abulkashemgovt@gmail.com</p>
                                            <p className="my-1"> <b> Highest Degree </b> : MSC in Mathematics</p>
                                            <p className="my-1"> <b> Prize Achieve </b> : 5</p>
                                            <p className="my-1"> <b> Co Curricular Activities </b> : Football and cricket playing, gardening </p>
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

                    <div>
                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className=" ">Welcome to Bangladesh</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>

                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className=" ">Arise awake and stop not till the goal reached</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>

                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>

                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>

                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>

                            </div>
                        </div>
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


                    {/* member's non approved blogs */}
                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h4 className=' text-center'>Non Approved Blogs </h4>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Welcome to Bangladesh</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Arise awake and stop not till the goal reached</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Ask for Review</p>
                                </div>
                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                            </div>
                                            <div>
                                                <Link className='  fw-bold my-0' to="/member_blog_details">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
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