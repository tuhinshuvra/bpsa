import { Link, useNavigate } from "react-router-dom";
import DirectoryImg1 from '../../assets/Image/messages/bdPolice03.jfif';
import DirectoryImg2 from '../../assets/Image/messages/bdPolice02.jfif';
import DirectoryImg3 from '../../assets/Image/messages/bdPolice04.jfif';
import DirectoryImg4 from '../../assets/Image/messages/bdPolice05.jfif';
import DirectoryImg5 from '../../assets/Image/messages/bdPolice06.jfif';
import DirectoryImg6 from '../../assets/Image/messages/bdPolice07.jfif';
import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import './AllMemberDirectoryPage.css';
import { AllContext } from "../../hooks/ContextData";
import axios from "axios";
import PaginationComponent from "../../Components/Common/PaginationComponent";

const AllMemberDirectoryPage = () => {
    useTitle("Directory");
    const { user } = useContext(AllContext);
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const [showperPage, setShowPerPage] = useState(10);
    const [accessToken, setAccessToken] = useState('');
    const [batch, setBatch] = useState();
    const [searchBatch, setSearchBatch] = useState();
    const [apiResponse, setApiResponse] = useState(null);
    const [filterData,setFilterData]=useState(null);
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
        const batchCadre = async () => {
            if (!accessToken) {
                return;
            }
            const apiUrl = `https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/member-profile/BP7303027822`;
            const headers = {
                'Authorization': `Bearer ${accessToken}`,
            };

            try {
                const response = await axios.get(apiUrl, { headers });
                setBatch(response.data.items[0].cadre);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        }
        batchCadre();
    }, [accessToken])

    useEffect(() => {
        const batchData = async () => {
            if (!accessToken) {
                return;
            }
            if (!batch) {
                return;
            }
            const apiUrl = `https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/batchmates-list/${batch}`;
            const headers = {
                'Authorization': `Bearer ${accessToken}`,
            };
            try {
                const response = await axios.get(apiUrl, { headers });
                setApiResponse(response.data?.items);
                setFilterData(response.data?.items)
            } catch (error) {
                console.error('Error calling API:', error);
            }
        }
        batchData();
    }, [accessToken, batch])

    if (apiResponse) {
        // console.log(apiResponse)
    }

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


    // console.log("Search Data : ", searchData);

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
        let filterData=apiResponse;
        if(searchData?.searchKeyword){
          filterData=filterData.filter(batchData => searchData?.searchKeyword === batchData.employeename);
          console.log(filterData)
        }
        if(searchData.rank!='Select Rank'&&searchData.rank){
            filterData=filterData.filter(batchData => searchData.rank === batchData.rank);
        }
        if(searchData.unit!='Select Main Unit'&&searchData.unit){
            filterData=filterData.filter(batchData => searchData.unit === batchData.main_unit);
        }
        if(searchData.district!=="Own District"&&searchData.district){
            filterData=filterData.filter(batchData => searchData.district === batchData.homedistrict);
        }
        console.log("Search Data:", searchData);
        setFilterData(filterData);
        setSearchButtonClicked(true);
        // navigate('/memberDirectorySearchResult')
    }

    const handleChange = (event, value) => {

        setPage(value);

        setStart(showperPage * value - showperPage);
        setEnd(showperPage * value);
    };
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
                                        <option value="এসপি">এসপি</option>
                                        <option value="অ্যাডিশনাল ডিআইজি">অ্যাডিশনাল ডিআইজি</option>
                                        <option value="RankThree">RankThree</option>
                                        <option value="RankFour">RankFour</option>
                                    </select>
                                </div>

                                <div className=" d-md-flex d-lg-inline">
                                    <select onChange={getSearchData} name="unit" className="form-select my-3 mx-lg-0 mx-1" aria-label="Default select example">
                                        <option defaultValue>Select Main Unit</option>
                                        <option value="পুলিশ হেডকোয়ার্টার্স">পুলিশ হেডকোয়ার্টার্স</option>
                                        <option value="খুলনা রেঞ্জ">খুলনা রেঞ্জ</option>
                                        <option value="N/A">N/A</option>
                                        <option value="ডিএমপি, ঢাকা">ডিএমপি, ঢাকা</option>
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
                                        <option value="পাবনা">পাবনা</option>
                                        <option value="নড়াইল">নড়াইল</option>
                                        <option value="খুলনা">খুলনা</option>
                                        <option value="মাগুরা">মাগুরা</option>
                                        <option value=" সুনামগঞ্জ"> সুনামগঞ্জ</option>
                                        <option value="সিরাজগঞ্জ">সিরাজগঞ্জ</option>
                                        <option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                                        <option value="সাতক্ষীরা">সাতক্ষীরা</option>
                                        <option value="ফরিদপুর">ফরিদপুর</option>
                                        <option value="গাজীপুর">গাজীপুর</option>
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
                                            <li onClick={() => setBatch(18)} className="page-item"><Link className="page-link" href="#">18</Link></li>
                                            <li onClick={() => setBatch(19)} className="page-item"><Link className="page-link" href="#">19</Link></li>
                                            <li onClick={() => setBatch(20)} className="page-item"><Link className="page-link" href="#">20</Link></li>
                                            <li onClick={() => setBatch(21)} className="page-item"><Link className="page-link" href="#">21</Link></li>
                                            <li onClick={() => setBatch(22)} className="page-item active" aria-current="page">
                                                <Link className="page-link" href="#">22 <span className="visually-hidden">(current)</span></Link>
                                            </li>
                                            <li onClick={() => setBatch(24)} className="page-item"><Link className="page-link" href="#">23</Link></li>
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
                                {
                                    filterData && filterData.slice(start, end).map((row, index) => <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1" key={index}>
                                        <div className="col-md-5 my-auto d-flex flex-column   align-items-center">
                                            <img src={DirectoryImg1} className="memberDirectoryImg" alt="..." />
                                            <p className="fw-bold my-0">{row.employeename}</p>
                                            {
                                                row.current_designation ? <p className=" my-0"> <b> Designation </b>: {row.current_designation}</p> : <p className=" my-0"> <b> Designation </b>:N/A</p>
                                            }

                                        </div>
                                        <div className="col-md-7">
                                            <div className=" d-flex justify-content-between">
                                                <div className=" ">
                                                    <p className="my-0"><b> BP/SIV No.</b>: {row.employeecode}</p>
                                                    <p className="my-0"><b> Rank</b>   : {row.rank}</p>
                                                    {
                                                        row.unit ? <p className="my-0"><b> Main Unit</b>: {row.main_unit}</p> : <p className="my-0"><b> Main Unit</b>:N/A</p>
                                                    }
                                                    <p className="my-0"><b>Present work Place  </b>  : {row.present_workplace}</p>
                                                    <p className="my-0"> <b>Mobile no  </b>    : {row.mobilephone}</p>
                                                    {/* <p className="my-0"> <b>Email     </b>      : {row.email}</p> */}
                                                    {
                                                        row.email ? <> <p className="my-0"> <b>Email     </b>      : {row.email}</p></> : <> <p className="my-0"> <b>Email     </b>      :N/A</p></>
                                                    }
                                                    <p className="my-0"><b> Degree  </b>  : {row.degree} </p>
                                                    <p className="my-0"><b> Gender </b> :  {row.idsex}</p>
                                                    <p className="my-0"><b> Own District </b> : {row.homedistrict}</p>

                                                </div>

                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>

                            <PaginationComponent
                                count={Math.ceil(apiResponse?.length / showperPage)}
                                pageNumber={page}
                                handleChange={handleChange}
                                className="flex items-center justify-between px-10 py-3"
                                start={start}
                                end={end}
                                total={apiResponse?.length}
                                isShow={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllMemberDirectoryPage;