import React, { useState } from "react";
import Register from "./Register.jsx";
import Registerbox from "./Registerbox.jsx";
import List from "./List.jsx";
import Edit from "./Edit.jsx";
import { employeeData } from "./Employee.jsx";
import Swal from "sweetalert2";

function Workarea() {
  const [employees, setEmployees] = useState(employeeData);
  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (id) => {
    console.log(id);
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    console.log(selectedEmployee)
    setIsEditing(false);
  };

  function handleSave(Id) {
    console.log(Id);
  }

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    Swal.fire({
      title: "you have Deleted an Employee ",
      position: "center",
      icon: "success",
      time: 1500,
    });
  };

  return (
    <div>
      {isAdding && isEditing && (
        <>
          <Register
            setIsAdding={setIsAdding}
            employees={employees}
            setEmployees={setEmployees}
          />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {!isAdding && (
        <Registerbox
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {!isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          handleSave={handleSave}
        />
      )}
    </div>
  );
}

export default Workarea;

