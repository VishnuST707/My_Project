import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Typography } from "@mui/material";
import Swal from "sweetalert2";

export default function Registerbox({ setEmployees, employees, setIsAdding }) {
  
  const id = employees.length + 1;
  const [formData, setFormData] = useState({
    id: id,
    name: "",
    dob: "",
    email: "",
    qualification: "",
    batch: "",
    salary: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const { name, dob, email, qualification, batch, salary } = formData;
  
    if (!name || !dob || !email || !qualification || !batch || !salary) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill in all the fields before submitting.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; 
    }
    setEmployees([...employees, formData]);
    setIsAdding(true);
    Swal.fire({
      title: "New Employee Added Successfully!",
      position: "center",
      icon: "success",
      time: 1500,
    });
  };

  return (
    <Box
      onSubmit={handleAdd}
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        ENTER YOUR DETAILS HERE
      </Typography>
      <TextField
        type="text"
        value={formData.name}
        name="name"
        onChange={handleChange}
        sx={{ width: "500px", height: "80px" }}
        helperText="Please enter your name"
        label="Name"
      />
      <TextField
        type="date"
        value={formData.dob}
        name="dob"
        onChange={handleChange}
        helperText="Please enter your Date of Birth"
      />
      <TextField
        type="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        helperText="Please enter your email"
        label="E mail"
      />
      <TextField
        value={formData.qualification}
        name="qualification"
        onChange={handleChange}
        helperText="Please enter your Qualificatio along with branch"
        label="Qualification"
      />
      <TextField
        type="number"
        value={formData.batch}
        name="batch"
        onChange={handleChange}
        helperText="Please enter your passout year"
        label="Passout Year"
      />
      <TextField
        type="number"
        value={formData.salary}
        name="salary"
        onChange={handleChange}
        helperText="Please enter your Salary"
        label="Salary"
      />
      <Button variant="contained" type="submit" onClick={handleAdd}>
        ADD
      </Button>
    </Box>
  );
}
