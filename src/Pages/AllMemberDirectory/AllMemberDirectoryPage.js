import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AllContext } from "../../hooks/ContextData";
import axios from "axios";
import PaginationComponent from "../../Components/Common/PaginationComponent";
import Loader from "../../Components/Common/Loader";
import MemberModal from "./MemberModal";
import './AllMemberDirectoryPage.css';

const AllMemberDirectoryPage = () => {
    useTitle("Directory");

    const [BcsList, setBcsList] = useState();
    const [rank, setRank] = useState();
    const [MainUnit, setMainUnit] = useState();
    const [blood, setBlood] = useState();
    const [Designation, setDesignation] = useState();
    const [district, setDistrict] = useState();
    const { user, loading, setLoading, memberBCSBatch } = useContext(AllContext);
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);

    const [listBCS, setListBCS] = useState(1);
    const [startList, setStartList] = useState(0);
    const [endList, setEndList] = useState(12);


    const [showperPage, setShowPerPage] = useState(12);
    const [accessToken, setAccessToken] = useState('');
    const [batch, setBatch] = useState();
    const [searchBatch, setSearchBatch] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [filterData, setFilterData] = useState(null);
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

    // console.log("Login User Data : ", user);
    // console.log("Directory Page filterData : ", filterData);
    // console.log("memberBCSBatch", memberBCSBatch);

    const [selectedPage, setSelectedPage] = useState(1);
    const totalPages = 50; // Total number of pages

    const handlePageClick = (newPage) => {
        setSelectedPage(newPage);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handldelModal = (memberId) => {
        openModal()
        setModalData(memberId)
    }
    const modalMember = filterData?.find(mem => mem?.employeecode === modalData);
    // console.log("modalData:", modalData);
    // console.log("showedMember:", modalMember);

    useEffect(() => {
        setBatch({ memberBCSBatch });
    }, [memberBCSBatch])

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
        const BcsLIST = async () => {
            if (!accessToken) {
                return;
            }

            await axios.get("https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/cadrelist", {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
                .then(result => {
                    setBcsList(result.data.items);
                    console.log(result.data.items[0].display_value)
                })

        }
        BcsLIST();

    }, [accessToken])


    useEffect(() => {
        const batchCadre = async () => {
            if (!accessToken) {
                return;
            }
            const apiUrl = `https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/member-profile/${user?.BPID}`;
            const headers = {
                'Authorization': `Bearer ${accessToken}`,
            };

            try {
                const response = await axios.get(apiUrl, { headers });
                setBatch(response.data.items[0]?.cadre);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        }
        batchCadre();
    }, [accessToken])

    useEffect(() => {
        setLoading(true);
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
                setLoading(false);
                // console.log(apiResponse)
                setRank([...new Set(response.data?.items.map(obj => obj.rank))]);
                setMainUnit([...new Set(response.data?.items.map(obj => obj.main_unit))]);
                setBlood([...new Set(response.data?.items.map(obj => obj.blood_group))]);
                setDesignation([...new Set(response.data?.items.map(obj => obj.current_designation))]);
                setDistrict([...new Set(response.data?.items.map(obj => obj.homedistrict))]);

            } catch (error) {
                console.error('Error calling API:', error);
                setLoading(false);
            }
        }
        batchData();
    }, [accessToken, batch])

    if (apiResponse) {
        // console.log(rank)
    }


    const [searchData, setSearchData] = useState({
        batch: batch,
        searchKeyword: "",
        phoneNumber: "",
        rank: "",
        unit: "",
        blood: "",
        designation: "",
        district: "",
    });
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

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
        let filterData = apiResponse;
        if (searchData?.searchKeyword) {
            filterData = filterData.filter(batchData => batchData.employeenameinenglish.toLowerCase().includes(searchData?.searchKeyword.toLowerCase()));
            console.log(filterData)
        }
        if (searchData.phoneNumber) {
            filterData = filterData.filter(batchData => batchData.mobilephone.includes(searchData?.phoneNumber));
        }
        if (searchData.rank != 'Select Rank' && searchData.rank) {
            filterData = filterData.filter(batchData => searchData.rank == batchData.rank);
        }
        if (searchData.unit != 'Select Main Unit' && searchData.unit) {
            filterData = filterData.filter(batchData => searchData.unit == batchData.main_unit);
        }
        if (searchData.district !== "Own District" && searchData.district) {
            filterData = filterData.filter(batchData => searchData.district == batchData.homedistrict);
        }
        if (searchData.designation != 'Select Designation' && searchData.designation) {
            filterData = filterData.filter(batchData => searchData.designation == batchData.current_designation);
        }
        if (searchData.blood != 'Select Blood group' && searchData.blood) {
            filterData = filterData.filter(batchData => searchData.blood == batchData.blood_group);
        }


        // console.log("Search Data:", searchData);
        setFilterData(filterData);
        setSearchButtonClicked(true);
    }

    const handleChange = (event, value) => {
        setPage(value);
        setStart(showperPage * value - showperPage);
        setEnd(showperPage * value);
    };


    if (loading) {
        return <Loader></Loader>
    }



    return (
        <div className=' col-md-10 col-12 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container gx-lg-5 gx-md-4 gx-0 pt-3 pb-1 ">

                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                        <h2 className='fw-bold text-center'>MEMBER DIRECTORY</h2>
                    </nav>

                    <div className=" d-lg-flex memberDirectory ">
                        <div className=" col-lg-3 px-2">
                            <p className=" fs-5 fw-bold text-center rounded-lg py-1 ms-1 ">Search Pannel</p>
                            <form id="searchForm" onSubmit={handleSearchResult}>
                                <div className=" d-md-flex d-lg-inline">
                                    <label htmlFor="searchKeyword" className="form-label my-0 d-none d-lg-block fw-bold">Search name</label>
                                    <input onChange={getSearchData} type="text" name="searchKeyword" aria-label="searchKeyword" className="form-control mt-lg-0 mt-md-2 mt-0   searchField mx-lg-0 mx-1" placeholder="Enter name" />
                                    <label htmlFor="phoneNumber" className="form-label my-0 d-none d-lg-block fw-bold">search mobile number</label>
                                    <input onChange={getSearchData} type="text" name="phoneNumber" aria-label="phoneNumber" className="form-control mt-lg-0 mt-md-2 mt-0   searchField mx-lg-0 mx-1" placeholder="Enter mobile number" />
                                    <select onChange={getSearchData} name="rank" className="form-select my-2 mx-lg-0 mx-1" >
                                        <option defaultValue>Select Rank</option>
                                        {
                                            rank && rank.map(rank => <option value={rank}>{rank}</option>)
                                        }
                                    </select>
                                </div>

                                <div className=" d-md-flex d-lg-inline">
                                    <select onChange={getSearchData} name="unit" className="form-select my-2 mx-lg-0 mx-1">
                                        <option defaultValue>Select Main Unit</option>
                                        {
                                            MainUnit && MainUnit.map(MainUnit => <option value={MainUnit}>{MainUnit}</option>)
                                        }
                                    </select>
                                    <select onChange={getSearchData} name="blood" className="form-select my-2 mx-lg-0 mx-1">
                                        <option defaultValue>Select Blood group</option>
                                        {
                                            blood && blood.map(blood => <option value={blood}>{blood}</option>)
                                        }
                                    </select>
                                </div>

                                <div className=" d-md-flex d-lg-inline">
                                    <select onChange={getSearchData} name="designation" className="form-select my-2 mx-lg-0 mx-1">
                                        <option defaultValue>Select Designation</option>
                                        {
                                            Designation && Designation.map(Designation => <option value={Designation}>{Designation}</option>)
                                        }
                                    </select>

                                    <select onChange={getSearchData} name="district" className="form-select my-2 mx-lg-0 mx-1">
                                        <option defaultValue>Own District</option>
                                        {
                                            district && district.map(district => <option value={district}>{district}</option>)
                                        }
                                    </select>
                                </div>

                                <button type="submit" className=" btn btn-primary w-full btn-sm   mt-2 mb-lg-0 mb-4">Search</button>

                            </form>
                        </div>

                        <div className=" col-lg-9">

                            {/* bcs batch pagination */}
                            <div className=" text-center  ">
                                <div className=" d-flex justify-content-center align-items-center">
                                    <p className=" fw-bold mt-2">BCS Batch:</p>

                                    {/* <BCSBatchPaginationComponent
                                        count={Math.ceil(50)}
                                        pageNumber={page}
                                        handleChange={handleBatch}
                                        className="flex items-center justify-between px-lg-5 py-3"
                                        start={1}
                                        end={50}
                                        total={apiResponse?.length}
                                    /> */}

                                    {/* <div>
                                        <PageNumbers
                                            selectedPage={selectedPage}
                                            totalPages={totalPages}
                                            onPageClick={handlePageClick}

                                        />
                                    </div> */}


                                    <nav className=" ms-2 d-none d-md-block " aria-label="Page navigation example" >
                                        <ul className="pagination my-auto py-2 ">
                                            {
                                                BcsList && BcsList.slice(0, 10).map(BCS => (
                                                    <li onClick={() => setBatch(BCS?.display_value)} className="page-item">
                                                        <Link className="page-link" href="#">{BCS?.display_value}</Link>
                                                    </li>
                                                ))
                                            }



                                            {/* <li className="page-item"><Link className="page-link" href="#">Next</Link></li> */}
                                        </ul>
                                    </nav>

                                    <nav className=" ms-2 d-md-none  " aria-label="Page navigation example" >
                                        <ul className="pagination my-auto py-2 ">

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="defaultDataShow">
                                {
                                    filterData && filterData.slice(start, end).map((member, index) =>
                                        <div className="d-flex px-md-3 px-1  py-2 directoryMember shadow-lg my-1 mx-1" onClick={() => handldelModal(member?.employeecode)} key={index}>

                                            <div className="mx-auto d-flex flex-column">
                                                <div className=" d-flex justify-content-center">
                                                    <img src={`data:image/jpeg;base64,${member?.pic}`} className="memberDirectoryImg" alt="member_Image" />
                                                </div>
                                                <p className="fw-bold my-0">{member?.employeenameinenglish}</p>
                                                {
                                                    member.current_designation ? <p className=" my-0"> <b> Designation </b>: {member.current_designation}</p> : <p className=" my-0"> <b> Designation </b>:N/A</p>
                                                }
                                                <p className="my-0"><b> Rank</b>   : {member?.rankinenglish}</p>

                                                <p className="my-0"><b> BCS Batch.</b>: {member?.cadre}</p>
                                                <p className="my-0"> <b>Mobile no  </b>    : {member?.mobilephone}</p>
                                                <p className="my-0"> <b>Blood Group  </b>    : {member?.blood_group}</p>
                                            </div>

                                        </div>)
                                }
                            </div>

                            <div className="">
                                <MemberModal
                                    isOpen={isModalOpen}
                                    onClose={closeModal}
                                    modalMember={modalMember}
                                />
                            </div>


                            <PaginationComponent
                                count={Math.ceil(apiResponse?.length / showperPage)}
                                pageNumber={page}
                                handleChange={handleChange}
                                className="flex items-center justify-between px-lg-5 py-3"
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