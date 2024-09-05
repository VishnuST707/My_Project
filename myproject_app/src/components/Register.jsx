import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#29b6f6",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Register({ setIsAdding, setEmployees, employees }) {
  const [filterData, setFilterData] = useState("");
  const handleFilter = (event) => {
    setFilterData(event.target.value);
  };

  const onEdit = () => {
    if (filterData.toString().length < 1) {
      setEmployees(employees);
      return;
    }
    const result = employees.filter((employee) => {
      return (
        employee.name
          .toString()
          .toLowerCase()
          .includes(filterData.toLowerCase()) ||
        employee.dob
          .toString()
          .toLowerCase()
          .includes(filterData.toLowerCase()) ||
        employee.email
          .toString()
          .toLowerCase()
          .includes(filterData.toLowerCase()) ||
        employee.qualification
          .toString()
          .toLowerCase()
          .includes(filterData.toLowerCase()) ||
        employee.batch
          .toString()
          .toLowerCase()
          .includes(filterData.toLowerCase()) ||
        employee.salary
          .toString()
          .toLowerCase()
          .includes(filterData.toLowerCase())
      );
    });
    setEmployees(result);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={0}>
        <Item>
          <Container maxWidth="xl">
            <Typography variant="h3">LINKEDOUT</Typography>
          </Container>
        </Item>
        <Item>
          <Button
            startIcon={<PersonAddIcon />}
            variant="contained"
            onClick={() => setIsAdding(false)}
          >
            ADD EMPLOYEE
          </Button>
        </Item>
        <Item>
          <TextField
            sx={{ backgroundColor: "white", width: 500, maxWidth: "100%" }}
            fullWidth
            label="Filter"
            id="filter"
            name="filter"
            value={filterData}
            onChange={handleFilter}
          />
          <Button
            startIcon={<FilterAltOutlinedIcon />}
            variant="contained"
            sx={{ backgroundColor: "#ab47bc", height: "55px" }}
            onClick={onEdit}
          >
            FILTER
          </Button>
        </Item>
      </Stack>
    </Box>
  );
}

export default Register;
