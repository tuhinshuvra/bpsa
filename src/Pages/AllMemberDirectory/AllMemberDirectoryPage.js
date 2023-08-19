import { Link, useNavigate } from "react-router-dom";
import DirectoryImg from '../../assets/Image/messages/assaduzzaman.jpg';
import './AllMemberDirectoryPage.css';
import { useState } from "react";

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

        // Access the searchData state object
        console.log("Search Data:", searchData);

        setSearchButtonClicked(true);

    }

    return (
        <div className=" container">
            <h1 className=' fw-bold text-center text-success my-3'>Member Directory</h1>
            <div className=" d-flex memberDirectory ">
                <div className=" col-lg-3   px-2">
                    <p className=" fs-5 fw-bold text-center   rounded-lg py-1 text-white ">Search Pannel</p>

                    <form id="searchForm" onSubmit={handleSearchResult}>
                        <label htmlFor="exampleInputEmail1" className="form-label text-white my-0">Search result showing all records that contains </label>
                        <input onChange={getSearchData} type="text" name="searchKeyword" aria-label="searchKeyword" className="form-control mt-0 mb-3 searchField" placeholder="Enter searchKeyword" />

                        <select onChange={getSearchData} name="rank" className="form-select my-3" aria-label="Default select example">

                            <option defaultValue>Select Rank</option>
                            <option value="RankOne">RankOne</option>
                            <option value="RankTwo">RankTwo</option>
                            <option value="RankThree">RankThree</option>
                            <option value="RankFour">RankFour</option>
                        </select>



                        <select onChange={getSearchData} name="unit" className="form-select my-3" aria-label="Default select example">
                            <option defaultValue>Select Unit</option>
                            <option value="UnitOne">UnitOne</option>
                            <option value="UnitTwo">UnitTwo</option>
                            <option value="UnitThree">UnitThree</option>
                            <option value="UnitFour">UnitFour</option>
                        </select>

                        <select onChange={getSearchData} name="subUnit" className="form-select my-3" aria-label="Default select example">
                            <option defaultValue>Select Sub Unit</option>
                            <option value="SubUnitOne">SubUnitOne</option>
                            <option value="SubUnitTwo">SubUnitTwo</option>
                            <option value="SubUnitThree">SubUnitThree</option>
                            <option value="SubUnitFour">SubUnitFour</option>
                        </select>

                        <select onChange={getSearchData} name="designation" className="form-select my-3" aria-label="Default select example">
                            <option defaultValue>Select Designation</option>
                            <option value="DesignationOne">DesignationOne</option>
                            <option value="DesignationTwo">DesignationTwo</option>
                            <option value="DesignationThree">DesignationThree</option>
                            <option value="DesignationFour">DesignationFour</option>
                        </select>

                        {/* <select className="form-select my-3" aria-label="Default select example">
                            <option defaultValue>Batch</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select> */}

                        <select onChange={getSearchData} name="district" className="form-select my-3" aria-label="Default select example">
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
                                    <li className="page-item disabled">
                                        <Link className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">4</Link></li>
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

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>

                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
                            </div>
                        </div>
                        <div className="card cardArea">
                            <img src={DirectoryImg} className=" cardImg" alt="..." />
                            <div className="cardText">
                                <p className=" fw-bold my-0">Md. Asaduzzaman</p>
                                <p className=" my-0"> <b> Designation:</b> DIG</p>
                                <p className=" my-0 "><b>Rank:</b> SP</p>
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
                                    <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                    <li className=" fs-5 mx-2 text-white fw-bolder">... ... </li>
                                    <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
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