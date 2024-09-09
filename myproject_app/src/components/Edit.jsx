import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";


export default function Edit({
  selectedEmployee,
  setEmployees,
  setIsEditing,
  employees,
}) {
  const id = selectedEmployee.id;
  const [editName, setEditName] = useState(selectedEmployee.name);
  const [editDob, setEditDob] = useState(selectedEmployee.dob);
  const [editEmail, setEditEmail] = useState(selectedEmployee.email);
  const [editQualification, setEditQualification] = useState(selectedEmployee.qualification);
  const [editBatch, setEditBatch] = useState(selectedEmployee.batch);
  const [editSalary, setEditSalary] = useState(selectedEmployee.salary);

  const handleEdit = (event) => {
    event.preventDefault();
  
   
    if (!editName || !editDob || !editEmail || !editQualification || !editBatch || !editSalary) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill in all the fields before submitting.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
  
   
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save these changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        
        const updatedEmployee = {
          id: id,
          name: editName,
          dob: editDob,
          email: editEmail,
          qualification: editQualification,
          batch: editBatch,
          salary: editSalary,
        };
  
        const updatedEmployees = employees.map((employee) =>
          employee.id === id ? updatedEmployee : employee
        );
        setEmployees(updatedEmployees);
        setIsEditing(true);
  
        Swal.fire({
          title: "Updated!",
          text: "Employee details have been updated.",
          icon: "success",
          timer: 1500,
        });
      }
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleEdit}
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Enter Your Details Here
      </Typography>

      <TextField
        type="text"
        value={editName}
        name="editedName"
        onChange={(e) => setEditName(e.target.value)}
        sx={{ width: "500px", height: "80px", marginBottom: "16px" }}
        helperText="Please enter your name"
        label="Name"
        fullWidth
      />

      <TextField
        type="date"
        value={editDob}
        name="EditedDob"
        onChange={(e) => setEditDob(e.target.value)}
        helperText="Please enter your Date of Birth"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <TextField
        type="email"
        value={editEmail}
        name="EditedEmail"
        onChange={(e) => setEditEmail(e.target.value)}
        helperText="Please enter your email"
        label="Email"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <TextField
        type="text"
        value={editQualification}
        name="EditedQualification"
        onChange={(e) => setEditQualification(e.target.value)}
        helperText="Please enter your Qualification along with branch"
        label="Qualification"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <TextField
        type="text"
        value={editBatch}
        name="EditedBatch"
        onChange={(e) => setEditBatch(e.target.value)}
        helperText="Please enter your passout year"
        label="Passout Year"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <TextField
        type="number"
        value={editSalary}
        name="EditedSalary"
        onChange={(e) => setEditSalary(e.target.value)}
        helperText="Please enter your Salary"
        label="Salary"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <Button variant="contained" type="submit">
        Update
      </Button>
    </Box>
  );
}
