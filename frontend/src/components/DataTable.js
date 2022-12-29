import { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

import Row from "./Row";

function DataTable({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const sortedData = data.slice().sort((a, b) => b.date - a.date);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="p-4">
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        Recent Data
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell variant="head">Date</TableCell>
            <TableCell variant="head">Name</TableCell>
            <TableCell variant="head" align="right">
              Amount
            </TableCell>
            <TableCell variant="head">Category</TableCell>
            <TableCell variant="head" />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <Row
                key={item.id}
                item={item}
                // updateItem={updateItem}
                // deleteItem={deleteItem}
              />
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}

export default DataTable;
