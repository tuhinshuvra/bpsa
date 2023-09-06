import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Container } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import { FormerLeaderData } from "../../api";
import ImageComponent from "../Common/ImageComponent";
import PaginationComponent from "../Common/PaginationComponent";

const columns = [
  { label: "Session" },
  { label: "President " },
  { label: "Secretary " },
];

const rows = [
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
  {
    session: "January, 2020 to March, 2001",
    presidentName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
    presidentImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    secretaryName: "Chowdhury Abdullah Al-Mamun BPM (Bar), PPM",
  },
];

const FormerLeaderShip = () => {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [formerData, setFormerData] = React.useState([]);
  const [showperPage, setShowPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getFormerData = async () => {
    const result = await FormerLeaderData();
    if (result?.status === "success") {
      setFormerData(result?.data?.former);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);

    setStart(showperPage * value - showperPage);
    setEnd(showperPage * value);
  };

  React.useEffect(() => {
    getFormerData();
  }, []);

  return (
    <div className="bg-[#767fdc]  py-3  my-5 rounded-2xl">
      <Container>
        <HeadingComponent1
          first="Former  "
          second="Leadership"
          className="text-center pb-3 text-white"
        />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table" >
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
                {formerData &&
                  formerData.slice(start, end).map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                      >

                        <TableCell className="text-center font-semibold flex flex-col md:flex-row">
                          <h6 className="font-semibold">{row?.Session}</h6>
                        </TableCell>
                        <TableCell className="  ">
                          <div className="d-flex flex-column flex-lg-row  align-items-center  space-y-2 md:space-y-0">
                            <ImageComponent
                              image={row?.President_Image}
                              className="h-[70px] w-[70px] rounded-full object-cover block mx-auto "
                              alt="President "
                            />
                            <div className="   md:pl-6 ">
                              <h6 className="font-semibold">
                                {row?.President_Name}
                              </h6>
                              <p className="text-gray-600">
                                {row?.President_Designation}
                              </p>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell className=" ">
                          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
                            {" "}
                            <ImageComponent
                              image={row?.Secretary_Image}
                              className="h-[70px] w-[70px] rounded-full object-cover block mx-auto"
                              alt="Secretary "
                            />
                            <div className="md:pl-6 ">
                              <h6 className="font-semibold">
                                {row?.Secretary_Name}
                              </h6>
                              <p className="text-gray-600">
                                {row?.Secretary_Designation}
                              </p>
                            </div>
                          </div>
                        </TableCell>

                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={formerData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
          <PaginationComponent
            count={Math.ceil(formerData?.length / showperPage)}
            pageNumber={page}
            handleChange={handleChange}
            className="flex items-center justify-between px-10 py-3"
            start={start}
            end={end}
            total={formerData?.length}
            isShow={true}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default FormerLeaderShip;
