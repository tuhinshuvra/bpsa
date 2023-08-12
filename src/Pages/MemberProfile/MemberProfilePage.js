import MemberImg from '../../assets/Image/messages/President_2021_Stamp.jpg'
import BlogImg from '../../assets/Image/blog/blog_image.png'
import { Link } from 'react-router-dom';
import './MemberProfilePage.css';

const MemberProfilePage = () => {

    const handleUploadProfileImage = () => {
        console.log("Profile Image uploaded");
    }

    return (
        <div className=' col-md-10 mx-auto'>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center fw-bold'>Abul Kashem Profile</h3>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card  proCartBody shadow-lg">
                                <div className="card-body">
                                    <img src={MemberImg} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg " style={{ width: "150px" }} />

                                    <div className=' text-center'>
                                        <Link className=' btn btn-sm btn-primary w-50' onClick={handleUploadProfileImage} >Image Upload</Link>
                                    </div>

                                    <div className=' text-center'>
                                        <h6 className="my-0">Abul Kashem(আবুল কাসেম)</h6>
                                        <h6 className="my-0 ">Designation : AIG</h6>
                                    </div>
                                    <div className='col-md-7 mx-auto d-flex flex-column justify-content-lg-start memberProFont'>
                                        <p className="text-muted my-0">BP/SIV No.  : BP750510460</p>
                                        <p className="text-muted my-0">Rank        : SP</p>
                                        <p className="text-muted my-0">Main Unit   : ABPN</p>
                                        <p className="text-muted my-0">Unit        : CTSB</p>
                                        <p className="text-muted my-0">BCS Batch   : 23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card proCartBody shadow-lg">
                                        <div className="card-body  my-auto">
                                            <p className="my-0">Father’s Name : Abbas Uddin</p>
                                            <p className="my-0">Mother’s Name : Momena Khatun</p>
                                            <p className="my-0">Birth Date    : 15/06/1978</p>
                                            <p className="my-0">Own District  : Sylhet</p>
                                            <p className="my-0">Blood Group   : O- </p>
                                            <p className="my-0">Religion      : Islam</p>
                                            <p className="my-1">Marital Status : Married</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card proCartBody shadow-lg">
                                        <div className="card-body ">
                                            <p className="my-1">Mobile no      : 01234567890</p>
                                            <p className="my-1">Phone no(govt) : 012345634324</p>
                                            <p className="my-1">Email          : abulkashem@gmail.com</p>
                                            <p className="my-1">Email(govt)    : abulkashemgovt@gmail.com</p>
                                            <p className="my-1">Highest Degree : MSC in Mathematics</p>
                                            <p className="my-1">Prize Achieve  : 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' d-flex justify-content-end my-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <Link className=' text-white btn btn-sm btn-primary' to="/memberProfileUpdate" >Enter Co Curricular Activities</Link>
                    </div>



                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h5 className=' text-center'>My Blogs</h5>
                            </nav>
                        </div>
                    </div>
                    {/* member's all blog */}

                    <div>
                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Welcome to Bangladesh</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Approved</p>
                                </div>
                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Arise awake and stop not till the goal reached</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
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
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
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
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Approved</p>
                                </div>
                            </div>
                        </div>

                        <div className="card blogArea my-1"  >
                            <div className="d-flex">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className=" ">Blog title</h5>
                                        <p className=" my-0 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={BlogImg} className="memberBlogImg rounded-lg" alt="..." />
                                </div>
                                <div className="col-md-1 my-auto">
                                    <p className=' fw-bold '>Approved</p>
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