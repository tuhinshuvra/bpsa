import MemberImg from '../../assets/Image/messages/President_2021_Stamp.jpg'
import BlogImg from '../../assets/Image/blog/blog_image.png'
import './MemberProfilePage.css';
import { Link } from 'react-router-dom';

const MemberProfilePage = () => {

    return (
        <div className=' col-md-10 mx-auto'>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center'>Profile</h3>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body  ">
                                    <img src={MemberImg} alt="avatar" className="rounded-circle img-fluid mx-auto " style={{ width: "150px" }} />

                                    <div className=' text-center'>
                                        <h6 className=" my-0">Abul Kashem(আবুল কাসেম)</h6>
                                        <h6 className=" my-0 ">Designation : AIG</h6>
                                    </div>
                                    <div className='col-md-8 mx-auto d-flex flex-column justify-content-lg-start'>
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
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">Father’s Name : Abbas Uddin</p>
                                            <p className="mb-4">Mother’s Name: Momena Khatun</p>
                                            <p className="mb-4">DOB          : 15/06/1987</p>
                                            <p className="mb-4">Religion     : Islam</p>
                                            <p className="mb-4">Religion     : Islam</p>
                                            <p className="mb-4">Blood Group    : O- </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">Marital Status : Married</p>
                                            <p className="mb-4">Own District   : Sylhet</p>
                                            <p className="mb-4">Mobile no      : 01234567890</p>
                                            <p className="mb-4">Phone no(govt) : 012345634324</p>
                                            <p className="mb-4">Highest Degree : MSC in Mathematics</p>
                                            <p className="mb-4">Prize Achieve  : 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 mb-2">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                                <h5 className=' text-center'>My Blogs</h5>
                            </nav>
                        </div>
                    </div>
                    {/* member all blog */}

                    <div>
                        <div className="card my-1"  >
                            <div className="d-flex ">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Blog title</h5>
                                        <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' col-md-5 me-auto d-flex'>

                                            <p className="card-text"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
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
                        <div className="card my-1"  >
                            <div className="d-flex ">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Blog title</h5>
                                        <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' col-md-5 me-auto d-flex'>

                                            <p className="card-text"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
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
                        <div className="card my-1"  >
                            <div className="d-flex ">
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Blog title</h5>
                                        <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestias itaque, porro a, fugiat eaque soluta repellendus earum quasi odit blanditiis explicabo ratione sed dolorum!    </p>
                                        <div className=' col-md-5 me-auto d-flex'>

                                            <p className="card-text"><small className="text-body-secondary"> <b> Blogger:</b> Abul Kashem </small></p>
                                            <p className="card-text"><small className="text-body-secondary"> <b> Published:</b> 2023/08/12</small></p>
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
                <div className=' d-flex justify-content-center'>

                    <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <Link class="page-link">Previous</Link>
                            </li>
                            <li class="page-item"><Link class="page-link" href="#">1</Link></li>
                            <li class="page-item active" aria-current="page">
                                <Link class="page-link" href="#">2</Link>
                            </li>
                            <li class="page-item"><Link class="page-link" href="#">3</Link></li>
                            <li class="page-item">
                                <Link class="page-link" href="#">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>



        </div>
    );
};

export default MemberProfilePage; 