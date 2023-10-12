import { useEffect, useState } from 'react';

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Loader from "../Components/Common/Loader";
import policeLogo from "../assets/Image/logo/police_logo_removebg.png";
import bpsaLogo from "../assets/Image/logo/bpsa_logo_removebg.png";
import TextField from "@mui/material/TextField";
import ButtonComponent from "../Components/Common/ButtonComponent";
import PaginationComponent from "../Components/Common/PaginationComponent";
import useTitle from '../hooks/useTitle';
import '../Components/CommitteeComponent/CommitteeComponent.css';

const columns = [{ label: "পরিচিতি" }, { label: "নাম, পদবি " }];

const CommitteePage = () => {
  useTitle("Committee")
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");
  const [igpData, setIgpData] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [showperPage, setShowPerPage] = useState(10);

  const [AllYearData, setAllYearData] = useState();
  const [yearCommittee, setYearCommittee] = useState();
  const [year, setYear] = useState(2023);
  const [commGroup, setCommGroup] = useState();

  // console.log("igpData newCommtee : ", igpData);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dev.bpsa.com.bd/api/committee/session/${year}`)
      .then(res => res.json())
      .then(result => {
        // console.log("result", result);
        setAllYearData(result.data.committees);
        setCommGroup([...new Set(result.data.committees.map(obj => obj.commGroup))]);
        setYearCommittee(result.data.committees)

        const filterIgp = result.data.committees?.filter((item) => item?.comm_group_slug === "IGP");
        setIgpData(filterIgp[0]);
        setLoading(false);
      });
  }, [year])


  const handleChangeYear = (id) => {
    setLoading(true);
    fetch(`https://dev.bpsa.com.bd/api/committee/session/${id}`)
      .then(res => res.json())
      .then(result => {
        setYear(id);
        // console.log(" handleChangeYear result :", result)
        setAllYearData(result.data.committees);
        setYearCommittee((result.data.committees?.filter((item) => item?.comm_group_slug !== "IGP")));
        setCommGroup([...new Set(result.data.committees.map(obj => obj.commGroup))]);
        const filterIgp = result.data.committees?.filter(
          (item) => item?.comm_group_slug === "IGP"
        );
        setIgpData(filterIgp[0]);

        setLoading(false);
      });
  }


  const handleChange = (event, value) => {
    setPage(value);

    setStart(showperPage * value - showperPage);
    setEnd(showperPage * value);
  };

  const filterHandler = (title) => {
    setYearCommittee(AllYearData?.filter((val) => val?.commGroup === title));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let searchData = event.target.value;

    if (searchData) {
      let filterData = yearCommittee?.filter(
        (item) =>
          item?.Name?.toLowerCase()?.includes(
            searchData?.toLowerCase()
          ) ||
          item?.designation
            ?.toLowerCase()
            .includes(searchData.toLowerCase()) ||
          item?.Officail_Designation?.toLowerCase().includes(
            searchData.toLowerCase()
          ) ||
          item?.PIMS_ID === searchData
      );
      setYearCommittee(filterData);
    }
  }

  return (

    <div className=' col-lg-10  mx-auto'>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container pt-3 pb-5 ">
          <nav aria-label="" className="bg-light rounded-3 p-2 mb-4">
            <h2 className='fw-bold text-center'>COMMITTEE</h2>
          </nav>
          <div>
            <div className='col-lg-3 ms-auto '>
              <div className='d-flex align-items-center '>
                <button className='btn btn-secondary btn-sm w-1/2   me-1' type="submit">Select Year:</button>
                <select
                  id="selectMenu"
                  onChange={(e) => handleChangeYear(parseInt(e.target.value))}
                  className="form-select w-1/2 "
                  defaultValue={year} // Set the value to the selected year
                >
                  <option value={2023} className='my-1 fw-bold'>2023</option>
                  <option value={2022} className='my-1 fw-bold'>2022</option>
                  <option value={2021} className='my-1 fw-bold'>2021</option>
                  <option value={2020} className='my-1 fw-bold'>2020</option>
                </select>
              </div>
            </div>

            <div className="newCommitteArea">
              <div className="flex items-center justify-center space-x-4 pt-3">
                <img src={policeLogo} className='comPoliceLogo' alt="" />

                <div className="text-center py-4 ">
                  <h2 className="text-sm md:text-2xl  fw-bold  ">
                    বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন
                  </h2>
                  <h2 className="text-sm md:text-xl font-semibold ">
                    কেন্দ্রীয় কার্যনির্বাহী কমিটি {igpData?.Association_Year}
                  </h2>
                </div>
                <img src={bpsaLogo} className='comBPSALogo' alt="" />
              </div>

              <h5 className="text-center text-sm font-semibold md:text-xl  ">
                {igpData?.designation}
              </h5>

              <div className="">
                {/* <ImageComponent
              image={igpData?.photo}
              className="w-[150px] h-[150px] object-contain rounded-md block mx-auto my-3"
            /> */}
                <img src={igpData?.photo} className='comIGPPhoto mx-auto' alt="" />

              </div>
              <h5 className="text-center text-sm md:text-xl ">
                {igpData?.Name} <br /> {igpData?.Officail_Designation}
              </h5>
              <div>

                <div className="mx-auto mb-4">
                  <Paper className="p-4 mb-2">
                    <div className="">
                      <TextField
                        onChange={handleSearch}
                        fullWidth
                        className="w-[300px]"
                        label="Search"
                      />
                    </div>
                    <div className="d-flex  flex-wrap  mt-3">
                      <ButtonComponent
                        onClick={() => {
                          setYearCommittee(AllYearData);
                          setSelectedItem("All");
                        }}
                        className={`${selectedItem === "All"
                          ? "bg-[#E2E3E7] text-black"
                          : "border border-second"
                          }  px-4 py-1 m-1 rounded-sm `}

                        title={`All`}
                      />
                      {commGroup &&
                        commGroup?.map((item) => {
                          return (
                            <div className="">
                              <ButtonComponent
                                onClick={() => {
                                  setSelectedItem(item);
                                  filterHandler(item);
                                  setPage(1);
                                  setStart(showperPage * 1 - showperPage);
                                  setEnd(showperPage * 1);
                                }}
                                className={`${item === selectedItem
                                  ? "bg-[#E2E3E7] text-black"
                                  : "border border-second"
                                  }  px-2 py-1 m-1 rounded-sm`}
                                title={item}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </Paper>

                  {loading ? (
                    <Loader />
                  ) : (
                    <Paper sx={{ width: "100%", overflow: "hidden" }}>
                      <TableContainer>
                        <Table stickyHeader aria-label="sticky table" style={{ border: "1.5px solid white" }}>
                          <TableHead>
                            <TableRow>
                              {columns.map((column, index) => (
                                <TableCell
                                  style={{
                                    fontWeight: 600,
                                    textAlign: "center",
                                    backgroundColor: "#E2E3E7",
                                    color: "black",
                                    fontSize: 18,
                                    fontFamily: "SolaimanLipi"
                                  }}
                                  key={index}
                                >
                                  {column.label}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {yearCommittee &&
                              yearCommittee.slice(start, end).map((row, index) => {
                                return (
                                  <>
                                    <TableRow hover key={index}>
                                      <TableCell
                                        style={{
                                          borderRight: "1px solid #F5F5F5",
                                        }}
                                      >
                                        <p className=" text-center font-semibold">
                                          {row?.designation}
                                        </p>
                                      </TableCell>
                                      <TableCell>
                                        <p className=" ">
                                          <div className="flex items-center flex-col md:flex-row">
                                            <img src={row?.photo} className='comNewRowPhoto ' alt="" />
                                            <div className="ml-4 md:text-left">
                                              <p className="text-md  m-0 pb-1 font-semibold">
                                                {row?.Name}
                                              </p>
                                              <p className="  text-sm text-gray-600">
                                                {row?.Officail_Designation}
                                              </p>
                                              {/* <p className="text-sm text-gray-600">
                                              মোবাইল নম্বর: {row?.Mobile_Number}
                                            </p> */}
                                            </div>
                                          </div>
                                        </p>
                                      </TableCell>
                                    </TableRow>
                                  </>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      {/* <TablePagination
                      rowsPerPageOptions={[10, 20, 50, 100]}
                      component="div"
                      count={responseData.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    /> */}
                      <PaginationComponent
                        count={Math.ceil(yearCommittee?.length / showperPage)}
                        pageNumber={page}
                        handleChange={handleChange}
                        className="flex items-center justify-between px-10 py-3"
                        start={start}
                        end={end}
                        total={yearCommittee?.length}
                        isShow={true}
                      />
                    </Paper>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>
    </div>

  );
};

export default CommitteePage;