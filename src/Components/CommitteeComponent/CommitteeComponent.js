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

const columns = [{ label: "পরিচিতি" }, { label: "নাম, পদবি " }];

const CommitteeComponent = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [committeeData, setCommitteeData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState([]);
  const [mainData, setMainData] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState("All");
  const [allData, setAllData] = React.useState([]);
  const [commonGroup, setCommonGroup] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const commononGroupHandler = () => {
    const key = "comm_group_slug";
    const commonFilter = [
      ...new Map(allData.map((item) => [item[key], item])).values(),
    ];
    setCommonGroup(commonFilter);
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
    setCommitteeData(mainData?.filter((val) => val?.commGroup === title));
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
                বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন
              </h2>
              <h2 className="text-sm md:text-xl font-semibold">
                বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন
              </h2>
            </div>{" "}
            <ImageComponent
              image={bpsaLogo}
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
          <h5 className="text-center text-sm md:text-xl">
            প্রধান পৃষ্ঠপোষক : ড. বেনজীর আহমেদ বিপিএম(বার) <br /> ইন্সপেক্টর
            জেনারেল অব পুলিশ, বাংলাদেশ
          </h5>

          <div className="text-center">
            <ImageComponent
              image={`https://images.unsplash.com/photo-1610312435975-2b4b94820009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
              className="w-[150px] h-[150px] object-cover rounded-md block mx-auto my-3"
            />
          </div>

          <Row>
            <Col md={8} className="mx-auto my-4">
              <Paper className="p-4 mb-2">
                <div className="">
                  <TextField
                    onChange={(e) => {
                      let searchData = e.target.value;
                      if (searchData) {
                        let filterData = allData?.filter(
                          (item) =>
                            item?.Name?.includes(searchData) ||
                            item?.designation
                              ?.toLowerCase()
                              .includes(searchData.toLowerCase()) ||
                            item?.Officail_Designation?.toLowerCase().includes(
                              searchData.toLowerCase()
                            ) ||
                            item?.PIMS_ID === searchData
                        );
                        console.log(filterData);
                        formattingData(filterData);
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
                      setCommitteeData(mainData);
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
                                backgroundColor: "#E7581A",
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
                        {committeeData &&
                          committeeData
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => {
                              return (
                                <>
                                  <TableRow hover key={index}>
                                    <TableCell
                                      rowspan={row?.memberInfo.length + 1}
                                    >
                                      <p className="font-semibold text-center text-lg">
                                        {" "}
                                        {row?.title}
                                      </p>
                                    </TableCell>
                                  </TableRow>

                                  {row?.memberInfo?.map((item, index) => {
                                    return (
                                      <TableRow key={index}>
                                        <TableCell
                                          style={{
                                            borderLeft: "1px solid #E0E0E0",
                                          }}
                                        >
                                          <div className="flex items-center flex-col md:flex-row ">
                                            <ImageComponent
                                              image={item?.photo}
                                              className=" w-[100px] h-[100px]  md:w-[130px] md:h-[130px] object-fill mb-2 md:mr-3"
                                            />
                                            <div>
                                              <p className="text-md font-semibold m-0 pb-1">
                                                {" "}
                                                {item?.Name}
                                              </p>
                                              <p className="mb-1">
                                                {item?.Officail_Designation}
                                              </p>
                                              <p>
                                                মোবাইল নম্বর:{" "}
                                                {item?.Mobile_Number}
                                              </p>
                                            </div>
                                          </div>
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                                </>
                              );
                            })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[2, 5, 10, 25, 100]}
                    component="div"
                    count={committeeData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
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
