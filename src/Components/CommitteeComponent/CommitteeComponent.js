import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Container } from "react-bootstrap";
import { GetCommitteeData } from "../../api";
import HeroComponent1 from "../Common/HeroComponent1";
import ImageComponent from "../Common/ImageComponent";
import Loader from "../Common/Loader";

const columns = [{ label: "পরিচিতি" }, { label: "নাম, পদবি " }];

const CommitteeComponent = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [committeeData, setCommitteeData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getCommitteeData = async () => {
    setLoading(true);
    const result = await GetCommitteeData();
    let newArr = [];
    if (result?.status === "success") {
      console.log(result?.data?.committees);
      let data = result?.data?.committees;

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
          memberInfo: filterData,
        });
      });
      setLoading(false);
      setCommitteeData(listItem);
    }
  };

  React.useEffect(() => {
    getCommitteeData();
  }, []);
  return (
    <div>
      <HeroComponent1 title="Committee" />
      <Container>
        <div className="text-center py-4 ">
          <h2 className="text-xl md:text-2xl">
            বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন কেন্দ্রীয় কার্যনির্বাহী কমিটি-২০২১
          </h2>
          <h6>
            প্রধান পৃষ্ঠপোষক ঃ ড. বেনজীর আহমেদ বিপিএম(বার) <br /> <br />{" "}
            ইন্সপেক্টর জেনারেল অব পুলিশ, বাংলাদেশ
          </h6>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 640 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell style={{ fontWeight: 600 }} key={index}>
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
                              <TableCell rowspan={row?.memberInfo.length + 1}>
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
                                    style={{ borderLeft: "1px solid #E0E0E0" }}
                                  >
                                    <div className="flex ">
                                      <div>
                                        <p className="text-lg font-semibold m-0 pb-1">
                                          {" "}
                                          {item?.Name}
                                        </p>
                                        <p className="mb-1">
                                          {item?.Officail_Designation}
                                        </p>
                                        <p>
                                          মোবাইল নম্বর: {item?.Mobile_Number}
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
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={committeeData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default CommitteeComponent;
