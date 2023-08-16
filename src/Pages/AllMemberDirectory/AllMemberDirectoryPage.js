import { Link, useNavigate } from "react-router-dom";
import DirectoryImg from '../../assets/Image/messages/assaduzzaman.jpg';
import './AllMemberDirectoryPage.css';

const AllMemberDirectoryPage = () => {

    const navigate = useNavigate();

    const handleSearchResult = () => {
        console.log('Handle Search Result');
        navigate('/memberDirectorySearchResult')

    }

    return (
        <div className=" container">
            <h1 className=' fw-bold text-center text-success my-4'>Member Directory</h1>
            <div className=" d-flex memberDirectory ">
                <div className=" col-lg-3   px-2">
                    <p className=" fs-5 fw-bold text-center   rounded-lg py-1 text-white ">Search Pannel</p>

                    <form onClick={handleSearchResult}>
                        <input type="text" name="bcs_batch" aria-label="bcs_batch" className="form-control" placeholder="Enter BCS Batch" />
                        <input type="text" name="designation" aria-label="designation" className="form-control my-4" placeholder="Enter Designation" />
                        <input type="text" name="unit" aria-label="unit" className="form-control" placeholder="Enter Unit" />
                        <input type="text" name="sub_unit" aria-label="sub_unit" className="form-control my-4" placeholder="Enter Sub Unit" />
                        <input type="text" name="district" aria-label="district" className="form-control" placeholder="Enter District" />
                        <input type="text" name="rank" aria-label="rank" className="form-control my-4" placeholder="Enter Rank" />
                        <input type="text" name="name" aria-label="name" className="form-control" placeholder="Enter Name" />
                        <input type="text" name="phone" aria-label="phone" className="form-control my-4" placeholder="Enter Phone No" />
                        <input type="text" name="email" aria-label="email" className="form-control my-4" placeholder="Enter Email Address" />
                        <input type="text" name="bloodGroup" aria-label="bloodGroup" className="form-control my-4" placeholder="Enter Blood Group" />
                        <div className=" d-flex  justify-content-between   align-items-center rounded-md py-1 bg-white ">
                            <label for="birthDate" class="form-label ms-2 my-auto text-muted">Birth Date</label>
                            <input type="date" name="birthDate" aria-label="birthDate" className=" p-1 rounded-lg" placeholder="Enter birthDate" />
                        </div>
                        <input type="text" name="degree" aria-label="degree" className="form-control my-4" placeholder="Enter Degree" />
                        <input type="text" name="religion" aria-label="religion" className="form-control my-4" placeholder="Enter Religion" />
                        <button type="submit" className=" btn btn-success w-full btn-sm mt-4">Search</button>
                    </form>
                </div>
                <div className=" col-lg-9">

                    {/* bcs batch pagination */}
                    <div className=" text-center  ">
                        <div className=" d-flex justify-content-center align-items-center">
                            <h5 className=" text-white">BSC Batch:</h5>
                            <nav className=" ms-2" aria-label="Page navigation example" >
                                <ul className="pagination my-auto py-2 ">
                                    <li class="page-item disabled">
                                        <Link class="page-link">Previous</Link>
                                    </li>
                                    <li class="page-item"><Link class="page-link" href="#">1</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">2</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">3</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">4</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">5</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">6</Link></li>
                                    <li className=" fs-5 mx-2 text-white fw-bolder">... ... </li>
                                    <li class="page-item"><Link class="page-link" href="#">18</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">19</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">20</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">21</Link></li>
                                    <li class="page-item active" aria-current="page">
                                        <Link class="page-link" href="#">22 <span class="visually-hidden">(current)</span></Link>
                                    </li>
                                    <li class="page-item"><Link class="page-link" href="#">23</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">Next</Link></li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                    {/* Default Member Show */}
                    <div className="defaultDataShow">

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div class="card cardArea">
                            <img src={DirectoryImg} class=" cardImg" alt="..." />
                            <div class="cardText">
                                <p class=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p class=" my-0"> <b> Designation:</b> DIG</p>
                                <p class=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>


                    </div>

                    {/* member data show pagination */}
                    <div className=" text-center  ">
                        <div className=" d-flex justify-content-center align-items-center">
                            <nav className=" ms-2" aria-label="Page navigation example" >
                                <ul className="pagination my-auto py-2 ">
                                    <li class="page-item disabled">
                                        <Link class="page-link">Previous</Link>
                                    </li>
                                    <li class="page-item active" aria-current="page">
                                        <Link class="page-link" href="#">1 <span class="visually-hidden">(current)</span></Link>
                                    </li>
                                    <li class="page-item"><Link class="page-link" href="#">2</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">3</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">4</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">5</Link></li>
                                    <li class="page-item"><Link class="page-link" href="#">6</Link></li>
                                    <li className=" fs-5 mx-2 text-white fw-bolder">... ... </li>
                                    <li class="page-item"><Link class="page-link" href="#">Next</Link></li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default AllMemberDirectoryPage;