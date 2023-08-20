import React, { useEffect } from 'react';
import CommonHead from '../Common/CommonHead';

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import * as React from "react";
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
import { Button } from '@mui/material';
import { useState } from 'react';

const columns = [{ label: "পরিচিতি" }, { label: "নাম, পদবি " }];

const NewCommittee = () => {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("All");
  const [igpData, setIgpData] = React.useState("");
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);
  const [showperPage, setShowPerPage] = React.useState(10);

  const [AllYearData, setAllYearData] = useState();
  const [yearCommittee, setYearCommittee] = useState();
  const [year, setYear] = useState(2023);
  const [commGroup, setCommGroup] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(`http://dev.bpsa.com.bd/api/committee/session/${year}`)
      .then(res => res.json())
      .then(result => {
        setAllYearData(result.data.committees);
        setCommGroup([...new Set(result.data.committees.map(obj => obj.commGroup))]);
        setYearCommittee(result.data.committees)

        const filterIgp =  result.data.committees?.filter(
          (item) => item?.comm_group_slug === "IGP"
        );
        setIgpData(filterIgp[0]);
        setLoading(false);
      });
  }, [])
  const handleChangeYear = (id) => {
    setLoading(true);
    fetch(`http://dev.bpsa.com.bd/api/committee/session/${id}`)
      .then(res => res.json())
      .then(result => {
        setAllYearData(result.data.committees);
        setYearCommittee((result.data.committees?.filter((item) => item?.comm_group_slug !== "IGP")));
        setCommGroup([...new Set(result.data.committees.map(obj => obj.commGroup))]);
        const filterIgp =  result.data.committees?.filter(
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
    <div>
      <HeroComponent1 title="Committee" />
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
            <Col md={11} className="mx-auto my-4">
              <Paper className="p-4 mb-2">
                <div className="">
                  <TextField
                    onChange={handleSearch}
                    fullWidth
                    className="w-[300px]"
                    label="Search"
                  />
                </div>
                <div className="flex items-center  flex-wrap  mt-3">
                  <ButtonComponent
                    onClick={() => {
                      setYearCommittee(AllYearData);
                      setSelectedItem("All");
                    }}
                    className={`${selectedItem === "All"
                      ? "bg-second text-white"
                      : "border border-second"
                      }  px-4 py-1 m-1 rounded-sm `}
                    title={`All`}
                  />
                  {commGroup &&
                    commGroup?.map((item) => {
                      return (
                        <div className="">
                          {" "}
                          <ButtonComponent
                            onClick={() => {
                              setSelectedItem(item);
                              filterHandler(item);
                              setPage(1);
                              setStart(showperPage * 1 - showperPage);
                              setEnd(showperPage * 1);
                            }}
                            className={`${item === selectedItem
                              ? "bg-second text-white"
                              : "border border-second"
                              }  px-2 py-1 m-1 rounded-sm `}
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
            </Col>
            <Col className="mx-auto my-4">
              <Button onClick={() => handleChangeYear(2023)} variant="contained" className='my-1'>2023</Button>
              <Button onClick={() => handleChangeYear(2022)} variant="contained" className='my-1'>2022</Button>
              <Button onClick={() => handleChangeYear(2021)} variant="contained" className='my-1'>2021</Button>
              <Button onClick={() => handleChangeYear(2020)} variant="contained" className='my-1'>2020</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewCommittee;