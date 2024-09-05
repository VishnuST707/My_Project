import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function List({ employees, handleEdit, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NO</StyledTableCell>
            <StyledTableCell align="right">USER NAME</StyledTableCell>
            <StyledTableCell align="right">DATE OF BIRTH&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">QUALIFICATION&nbsp;</StyledTableCell>
            <StyledTableCell align="right">BATCH&nbsp;</StyledTableCell>
            <StyledTableCell align="right">SALARY&nbsp;</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <StyledTableRow key={employee.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.name}</StyledTableCell>
              <StyledTableCell align="right">{employee.dob}</StyledTableCell>
              <StyledTableCell align="right">{employee.email}</StyledTableCell>
              <StyledTableCell align="right">
                {employee.qualification}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.batch}</StyledTableCell>
              <StyledTableCell align="right">{employee.salary}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  startIcon={<EditNoteIcon />}
                  sx={{ margin: 2 }}
                  variant="contained"
                  onClick={() => handleEdit(employee.id)}
                >
                  EDIT
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  color="error"
                  variant="contained"
                  onClick={() => handleDelete(employee.id)}
                >
                  DELETE
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
