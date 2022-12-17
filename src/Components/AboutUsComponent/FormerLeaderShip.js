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

const columns = [
  { label: "Session" },
  { label: "President Name" },
  { label: "President Image" },
  { label: "Secretary Image" },
  { label: "Secretary Name" },
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Container>
        <HeadingComponent1
          first="Former  "
          second="Leadership"
          className="text-center pb-3 text-main"
        />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 640 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell>{row?.session}</TableCell>
                        <TableCell>{row?.presidentName}</TableCell>
                        <TableCell>
                          <img src={row?.presidentImg} className="h-[70px] w-[70px] rounded-full object-cover" alt="" />
                        </TableCell>
                        <TableCell>
                          <img src={row?.secretaryImg} className="h-[70px] w-[70px] rounded-full object-cover" alt="" />
                        </TableCell>
                        <TableCell>{row?.secretaryName}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5,10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default FormerLeaderShip;
