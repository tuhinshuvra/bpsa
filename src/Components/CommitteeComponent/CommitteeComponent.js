import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GetCommitteeData } from "../../api";
import HeroComponent1 from "../Common/HeroComponent1";
import ImageComponent from "../Common/ImageComponent";
import Loader from "../Common/Loader";
import policeLogo from "../../assets/Image/logo/police logo.jpg";
import bpsaLogo from "../../assets/Image/logo/bpsa logo red.jpg";
import TextField from "@mui/material/TextField";
import ButtonComponent from "../Common/ButtonComponent";
import PaginationComponent from "../Common/PaginationComponent";

const columns = [{ label: "পরিচিতি" }, { label: "নাম, পদবি " }];

const CommitteeComponent = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [committeeData, setCommitteeData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState([]);
  const [mainData, setMainData] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState("All");
  const [allData, setAllData] = React.useState([]);
  const [commonGroup, setCommonGroup] = React.useState([]);
  const [responseData, setResponseData] = React.useState([]);
  const [igpData, setIgpData] = React.useState("");
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);
  const [showperPage, setShowPerPage] = React.useState(10);

  const handleChange = (event, value) => {
    setPage(value);

    setStart(showperPage * value - showperPage);
    setEnd(showperPage * value);
  };

  const commononGroupHandler = () => {
    const key = "comm_group_slug";
    const commonFilter = [
      ...new Map(allData.map((item) => [item[key], item])).values(),
    ];

    setCommonGroup(
      commonFilter.filter((item) => item?.comm_group_slug !== "IGP")
    );
  };

  const formattingData = (data) => {
    let newArr = [];
    data.forEach((element) => {
      let checkItem = newArr?.find(
        (item) => item?.BPSA_Designation_id === element?.BPSA_Designation_id
      );

      if (checkItem) {
      } else {
        newArr.push(element);
      }
    });

    const listItem = [];

    newArr.forEach((ele) => {
      let filterData = data?.filter(
        (val) => val?.BPSA_Designation_id === ele?.BPSA_Designation_id
      );

      listItem.push({
        title: ele?.designation,
        commGroup: ele?.commGroup,
        memberInfo: filterData,
      });
    });
    setCategory(listItem?.map((item) => item?.title));
    setLoading(false);
    setMainData(listItem);
    setCommitteeData(listItem);
  };

  const getCommitteeData = async () => {
    setLoading(true);
    const result = await GetCommitteeData();

    if (result?.status === "success") {
      let data = result?.data?.committees;
      const filterIgp = await data?.filter(
        (item) => item?.comm_group_slug === "IGP"
      );
      setIgpData(filterIgp[0]);
      setResponseData(data?.filter((item) => item?.comm_group_slug !== "IGP"));
      setAllData(data);
      formattingData(data);
    }
  };

  React.useEffect(() => {
    getCommitteeData();
  }, []);

  React.useEffect(() => {
    if (mainData.length > 0) {
      commononGroupHandler();
    }
  }, [mainData]);

  const filterHandler = (title) => {
    setResponseData(allData?.filter((val) => val?.commGroup === title));
  };

  return (
    <div>
      {/* <HeroComponent1 title="Committee" /> */}
      <div className="bg-[#E8FCF2]">
        {" "}
        <Container>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <ImageComponent
              image={policeLogo}
              className="w-[100px] h-[100px] object-contain"
            />
            <div className="text-center py-4 ">
              <h2 className="text-sm md:text-2xl font-semibold">
                বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন
              </h2>
              <h2 className="text-sm md:text-xl font-semibold">
                কেন্দ্রীয় কার্যনির্বাহী কমিটি-২০২১
              </h2>
            </div>{" "}
            <ImageComponent
              image={bpsaLogo}
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
          <h5 className="text-center text-sm font-semibold md:text-xl">
            {igpData?.designation}
          </h5>

          <div className="text-center">
            <ImageComponent
              image={igpData?.photo}
              className="w-[150px] h-[150px] object-contain rounded-md block mx-auto my-3"
            />
          </div>
          <h5 className="text-center text-sm md:text-xl">
            {igpData?.Name} <br /> {igpData?.Officail_Designation}
          </h5>

          <Row>
            <Col md={8} className="mx-auto my-4">
              <Paper className="p-4 mb-2">
                <div className="">
                  <TextField
                    onChange={(e) => {
                      let searchData = e.target.value;
                      if (searchData) {
                        let filterData = responseData?.filter(
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

                        setResponseData(filterData);
                      } else if (!searchData) {
                        getCommitteeData();
                      }
                    }}
                    fullWidth
                    className="w-[300px]"
                    label="Search"
                  />
                </div>
                <div className="flex items-center  flex-wrap  mt-3">
                  <ButtonComponent
                    onClick={() => {
                      setResponseData(allData);
                      setSelectedItem("All");
                    }}
                    className={`${
                      selectedItem === "All"
                        ? "bg-second text-white"
                        : "border border-second"
                    }  px-4 py-1 m-1 rounded-sm `}
                    title={`All`}
                  />
                  {commonGroup &&
                    commonGroup?.map((item) => {
                      return (
                        <div className="">
                          {" "}
                          <ButtonComponent
                            onClick={() => {
                              setSelectedItem(item?.commGroup);
                              filterHandler(item?.commGroup);
                              setPage(1);
                              setStart(showperPage * 1 - showperPage);
                              setEnd(showperPage * 1);
                            }}
                            className={`${
                              item?.commGroup === selectedItem
                                ? "bg-second text-white"
                                : "border border-second"
                            }  px-2 py-1 m-1 rounded-sm `}
                            title={item?.commGroup}
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
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column, index) => (
                            <TableCell
                              style={{
                                fontWeight: 600,
                                textAlign: "center",
                                backgroundColor: "#009688",
                                color: "white",
                                fontSize: 18,
                              }}
                              key={index}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {responseData &&
                          responseData.slice(start, end).map((row, index) => {
                            return (
                              <>
                                <TableRow hover key={index}>
                                  <TableCell
                                    style={{
                                      borderRight: "1px solid #F5F5F5",
                                    }}
                                  >
                                    <p className=" text-center font-semibold">
                                      {" "}
                                      {row?.designation}
                                    </p>
                                  </TableCell>
                                  <TableCell>
                                    <p className="  ">
                                      {" "}
                                      <div className="flex items-center flex-col md:flex-row ">
                                        <ImageComponent
                                          image={row?.photo}
                                          className=" w-[70px] h-[70px]  md:w-[100px] md:h-[100px] object-cover mb-2 "
                                        />
                                        <div className="ml-4 md:text-left">
                                          <p className="text-md  m-0 pb-1 font-semibold">
                                            {" "}
                                            {row?.Name}
                                          </p>
                                          <p className="mb-1 text-sm text-gray-600">
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
                    count={Math.ceil(responseData?.length / showperPage)}
                    pageNumber={page}
                    handleChange={handleChange}
                    className="flex items-center justify-between px-10 py-3"
                    start={start}
                    end={end}
                    total={responseData?.length}
                    isShow={true}
                  />
                </Paper>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CommitteeComponent;
