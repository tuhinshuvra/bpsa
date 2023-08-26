import { Link, useNavigate } from "react-router-dom";
import DirectoryImg from '../../assets/Image/messages/assaduzzaman.jpg';
import { useState } from "react";
import './AllMemberDirectoryPage.css';

const AllMemberDirectoryPage = () => {
    const [searchData, setSearchData] = useState({
        batch: "22",
        searchKeyword: "",
        rank: "",
        unit: "",
        subUnit: "",
        designation: "",
        district: "",
    });
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

    const navigate = useNavigate();


    console.log("Search Data : ", searchData);

    const getSearchData = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        setSearchData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleSearchResult = (event) => {
        event.preventDefault();
        console.log("Search Data:", searchData);

        setSearchButtonClicked(true);
        // navigate('/memberDirectorySearchResult')

    }

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-1 ">

                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                        <h2 className='fw-bold text-center text-success'>MEMBER DIRECTORY</h2>
                    </nav>

                    <div className=" d-lg-flex memberDirectory ">
                        <div className=" col-lg-3 px-2">
                            <p className=" fs-5 fw-bold text-center   rounded-lg py-1 text-white ">Search Pannel</p>
                            <form id="searchForm" onSubmit={handleSearchResult}>
                                <div className=" d-md-flex d-lg-inline">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-white my-0 d-none d-lg-block">Search Keyword</label>
                                    <input onChange={getSearchData} type="text" name="searchKeyword" aria-label="searchKeyword" className="form-control mt-0 my-1 searchField mx-lg-0 mx-1" placeholder="Enter searchKeyword" />


                                    <select onChange={getSearchData} name="rank" className="form-select my-3 mx-lg-0 mx-1" aria-label="Default select example">
                                        <option defaultValue>Select Rank</option>
                                        <option value="RankOne">RankOne</option>
                                        <option value="RankTwo">RankTwo</option>
                                        <option value="RankThree">RankThree</option>
                                        <option value="RankFour">RankFour</option>
                                    </select>
                                </div>

                                <div className=" d-md-flex d-lg-inline">
                                    <select onChange={getSearchData} name="unit" className="form-select my-3 mx-lg-0 mx-1" aria-label="Default select example">
                                        <option defaultValue>Select Unit</option>
                                        <option value="UnitOne">UnitOne</option>
                                        <option value="UnitTwo">UnitTwo</option>
                                        <option value="UnitThree">UnitThree</option>
                                        <option value="UnitFour">UnitFour</option>
                                    </select>


                                    <select onChange={getSearchData} name="subUnit" className="form-select my-3 mx-lg-0 mx-1" aria-label="Default select example">
                                        <option defaultValue>Select Sub Unit</option>
                                        <option value="SubUnitOne">SubUnitOne</option>
                                        <option value="SubUnitTwo">SubUnitTwo</option>
                                        <option value="SubUnitThree">SubUnitThree</option>
                                        <option value="SubUnitFour">SubUnitFour</option>
                                    </select>
                                </div>

                                <div className=" d-md-flex d-lg-inline">
                                    <select onChange={getSearchData} name="designation" className="form-select my-3 mx-lg-0 mx-1" aria-label="Default select example">
                                        <option defaultValue>Select Designation</option>
                                        <option value="DesignationOne">DesignationOne</option>
                                        <option value="DesignationTwo">DesignationTwo</option>
                                        <option value="DesignationThree">DesignationThree</option>
                                        <option value="DesignationFour">DesignationFour</option>
                                    </select>

                                    <select onChange={getSearchData} name="district" className="form-select my-3 mx-lg-0 mx-1" aria-label="Default select example">
                                        <option defaultValue>Own District</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Chattogram">Chattogram</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Barishal">Barishal</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Bagerhat">Bagerhat</option>
                                        <option value="Jessore">Jessore</option>
                                        <option value="Gazipur">Gazipur</option>
                                    </select>
                                </div>

                                <button type="submit" className=" btn btn-success w-full btn-sm mt-lg-4 mt-2 mb-lg-0 mb-4">Search</button>

                            </form>
                        </div>

                        <div className=" col-lg-9">

                            {/* bcs batch pagination */}
                            <div className=" text-center  ">
                                <div className=" d-flex justify-content-center align-items-center">
                                    <h6 className=" text-white ">BCS Batch:</h6>

                                    <nav className=" d-none d-lg-block ms-2" aria-label="Page navigation example" >
                                        <ul className="pagination my-auto py-2 ">
                                            <li className="page-item disabled">
                                                <Link className="page-link">Previous</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                            <li className=" fs-5 mx-2 text-white fw-bolder">... ... </li>
                                            <li className="page-item"><Link className="page-link" href="#">18</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">19</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">20</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">21</Link></li>
                                            <li className="page-item active" aria-current="page">
                                                <Link className="page-link" href="#">22 <span className="visually-hidden">(current)</span></Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">23</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
                                        </ul>
                                    </nav>

                                    {/* for mobile and tab */}
                                    <nav className=" d-lg-none  ms-2" aria-label="Page navigation example" >
                                        <ul className="pagination my-auto py-2 ">
                                            <li className="page-item disabled">
                                                <Link className="page-link">Previous</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                            <li className=" fs-5 mx-2 text-white fw-bolder">...</li>
                                            <li className="page-item active" aria-current="page">
                                                <Link className="page-link" href="#">22 <span className="visually-hidden">(current)</span></Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">25</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-baseline">
                                {searchButtonClicked && (
                                    <>
                                        <h4 className="text-white">Data is showing for:</h4>
                                        <ul className="text-white d-flex">
                                            {Object.entries(searchData).map(([key, value]) => (
                                                value !== "" && ( // Only render if the value is not empty
                                                    <div key={key} className="mx-1">
                                                        {value}
                                                    </div>
                                                )
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>


                            {/* Default Member Show */}
                            <div className="defaultDataShow">

                                <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1">
                                    <div className="col-md-5 my-auto d-flex flex-column   align-items-center">
                                        <img src={DirectoryImg} className="memberDirectoryImg" alt="..." />
                                        <p className="fw-bold my-0">Md. Asaduzzaman</p>
                                        <p className=" my-0"> <b> Designation </b>: AIG</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className=" d-flex justify-content-between">
                                            <div className=" ">
                                                <p className="my-0"><b> BP/SIV No.</b>: BP750510460</p>
                                                <p className="my-0"><b> Rank</b>   : SP</p>
                                                <p className="my-0"><b> Main Unit</b>: ABPN</p>
                                                <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : 01234567890</p>
                                                <p className="my-0"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                                <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                                <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1">
                                    <div className="col-md-5 col-5 my-auto d-flex flex-column   align-items-center">
                                        <img src={DirectoryImg} className="memberDirectoryImg" alt="..." />
                                        <p className="fw-bold my-0">Md. Asaduzzaman</p>
                                        <p className=" my-0"> <b> Designation </b>: AIG</p>
                                    </div>
                                    <div className="col-md-7 col-7">
                                        <div className=" d-flex justify-content-between">
                                            <div className=" ">
                                                <p className="my-0"><b> BP/SIV No.</b>: BP750510460</p>
                                                <p className="my-0"><b> Rank</b>   : SP</p>
                                                <p className="my-0"><b> Main Unit</b>: ABPN</p>
                                                <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : 01234567890</p>
                                                <p className="my-0"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                                <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                                <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1">
                                    <div className="col-md-5 my-auto d-flex flex-column   align-items-center">
                                        <img src={DirectoryImg} className="memberDirectoryImg" alt="..." />
                                        <p className="fw-bold my-0">Md. Asaduzzaman</p>
                                        <p className=" my-0"> <b> Designation </b>: AIG</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className=" d-flex justify-content-between">
                                            <div className=" ">
                                                <p className="my-0"><b> BP/SIV No.</b>: BP750510460</p>
                                                <p className="my-0"><b> Rank</b>   : SP</p>
                                                <p className="my-0"><b> Main Unit</b>: ABPN</p>
                                                <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : 01234567890</p>
                                                <p className="my-0"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                                <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                                <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1">
                                    <div className="col-md-5 my-auto d-flex flex-column   align-items-center">
                                        <img src={DirectoryImg} className="memberDirectoryImg" alt="..." />
                                        <p className="fw-bold my-0">Md. Asaduzzaman</p>
                                        <p className=" my-0"> <b> Designation </b>: AIG</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className=" d-flex justify-content-between">
                                            <div className=" ">
                                                <p className="my-0"><b> BP/SIV No.</b>: BP750510460</p>
                                                <p className="my-0"><b> Rank</b>   : SP</p>
                                                <p className="my-0"><b> Main Unit</b>: ABPN</p>
                                                <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : 01234567890</p>
                                                <p className="my-0"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                                <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                                <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1">
                                    <div className="col-md-5 my-auto d-flex flex-column   align-items-center">
                                        <img src={DirectoryImg} className="memberDirectoryImg" alt="..." />
                                        <p className="fw-bold my-0">Md. Asaduzzaman</p>
                                        <p className=" my-0"> <b> Designation </b>: AIG</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className=" d-flex justify-content-between">
                                            <div className=" ">
                                                <p className="my-0"><b> BP/SIV No.</b>: BP750510460</p>
                                                <p className="my-0"><b> Rank</b>   : SP</p>
                                                <p className="my-0"><b> Main Unit</b>: ABPN</p>
                                                <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : 01234567890</p>
                                                <p className="my-0"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                                <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                                <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1">
                                    <div className="col-md-5 my-auto d-flex flex-column   align-items-center">
                                        <img src={DirectoryImg} className="memberDirectoryImg" alt="..." />
                                        <p className="fw-bold my-0">Md. Asaduzzaman</p>
                                        <p className=" my-0"> <b> Designation </b>: AIG</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className=" d-flex justify-content-between">
                                            <div className=" ">
                                                <p className="my-0"><b> BP/SIV No.</b>: BP750510460</p>
                                                <p className="my-0"><b> Rank</b>   : SP</p>
                                                <p className="my-0"><b> Main Unit</b>: ABPN</p>
                                                <p className="my-0"><b> Birth Date  </b>  : 15/06/1978</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : 01234567890</p>
                                                <p className="my-0"> <b>Email     </b>      : abulkashem@gmail.com</p>
                                                <p className="my-0"><b> Blood Group  </b>  : O- </p>
                                                <p className="my-0"><b> Own District </b> : Sylhet</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* member data show pagination */}
                            <div className=" text-center  ">
                                <div className=" d-flex justify-content-center align-items-center">
                                    <nav className=" ms-2" aria-label="Page navigation example" >
                                        <ul className="pagination my-auto py-2 ">
                                            <li className="page-item disabled">
                                                <Link className="page-link">Previous</Link>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <Link className="page-link" href="#">1 <span className="visually-hidden">(current)</span></Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                            <li className=" fs-5 mx-2 text-white fw-bolder">...</li>
                                            <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllMemberDirectoryPage;