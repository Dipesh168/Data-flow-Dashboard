// EmployeeData.js
import { TextField, Button, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { BsPerson, BsBriefcase, BsCurrencyDollar } from "react-icons/bs";
import "./employee.css";
import Navbar from "./Navbar";

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]); // State to store employee data
  const [query, setQuery] = useState(""); // State for search query
  const [showResults, setShowResults] = useState(false); // Control to display data only when searching
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Store selected employee from suggestions
  const [table, setTable] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Existing local employee data
  const Seff = [
    {
      id: 101,
      name: "Henry Orsom",
      position: "Data Operator",
      empId: 1004,
      email: ".....@gmail.com",
      location: "A1",
      salary: "$1,300.00",
    },
    {
      id: 102,
      name: "Anuwar Merge",
      position: "Data Operator",
      empId: 4756,
      email: ".....@gmail.com",
      location: "A2",
      salary: "$1,300.00",
    },
    {
      id: 103,
      name: "Jamal Merge",
      position: "Data Operator",
      empId: 4956,
      email: ".....@gmail.com",
      location: "A3",
      salary: "$1,300.00",
    },
    {
      id: 104,
      name: "Jullan Boss",
      position: "Data Operator",
      empId: 48385,
      email: ".....@gmail.com",
      location: "A4",
      salary: "$1,300.00",
    },
    {
      id: 105,
      name: "Sadhik Sq",
      position: "Data Operator",
      empId: 734,
      email: ".....@gmail.com",
      location: "A5",
      salary: "$1,300.00",
    },
    {
      id: 106,
      name: "Sohel Rana",
      position: "Data Operator",
      empId: 588374,
      email: ".....@gmail.com",
      location: "A6",
      salary: "$1,300.00",
    },
    {
      id: 107,
      name: "Gyan Don",
      position: "Manager",
      empId: 84893,
      email: ".....@gmail.com",
      location: "A1",
      salary: "$1,300.00",
    },
    {
      id: 108,
      name: "Babu Raja",
      position: "Manager",
      empId: 5764,
      email: ".....@gmail.com",
      location: "A2",
      salary: "$1,300.00",
    },
    {
      id: 109,
      name: "Mandeep Magar",
      position: "Manager",
      empId: 594,
      email: ".....@gmail.com",
      location: "A3",
      salary: "$1,300.00",
    },
    {
      id: 110,
      name: "Aminual Islam",
      position: "Manager",
      empId: 994,
      email: ".....@gmail.com",
      location: "A4",
      salary: "$1,300.00",
    },
    {
      id: 111,
      name: "Anil Kumar",
      position: "Manager",
      empId: 84903,
      email: ".....@gmail.com",
      location: "A5",
      salary: "$1,300.00",
    },
    {
      id: 112,
      name: "Jhons Randy",
      position: "Manager",
      empId: 85893,
      email: ".....@gmail.com",
      location: "A6",
      salary: "$1,300.00",
    },
    {
      id: 113,
      name: "Rana Don",
      position: "Manager",
      empId: 943,
      email: ".....@gmail.com",
      location: "A2",
      salary: "$1,300.00",
    },
    {
      id: 114,
      name: "Zeena Sakhya",
      position: "Assistant",
      empId: 999,
      email: ".....@gmail.com",
      location: "A3",
      salary: "$1,300.00",
    },
    {
      id: 115,
      name: "Gurungnnes Bold",
      position: "Assistant",
      empId: 2294,
      email: ".....@gmail.com",
      location: "A4",
      salary: "$1,300.00",
    },
    {
      id: 116,
      name: "Nandani Ram",
      position: "Assistant",
      empId: 958,
      email: ".....@gmail.com",
      location: "A5",
      salary: "$1,300.00",
    },
    {
      id: 117,
      name: "Bikash Rahj",
      position: "Assistant",
      empId: 9404,
      email: ".....@gmail.com",
      location: "A7",
      salary: "$1,300.00",
    },
    {
      id: 234,
      name: "Souman Randy",
      position: "Assistant",
      empId: 9590,
      email: ".....@gmail.com",
      location: "A8",
      salary: "$1,300.00",
    },
    {
      id: 876,
      name: "Akshya Kuumar",
      position: "Cyber Security",
      empId: 88,
      email: ".....@gmail.com",
      location: "A2",
      salary: "$1,300.00",
    },
    {
      id: 87,
      name: "Akshya Kuumar",
      position: "Developer",
      empId: 930,
      email: ".....@gmail.com",
      location: "A3",
      salary: "$1,300.00",
    },
    {
      id: 227,
      name: "Ahmed Skinder",
      position: "Senior Manager",
      empId: 75776,
      email: ".....@gmail.com",
      location: "B2",
      salary: "$1,300.00",
    },
    {
      id: 465,
      name: "Dil Kumar",
      position: "Senior Manager",
      empId: 96,
      email: ".....@gmail.com",
      location: "B5",
      salary: "$1,300.00",
    },
    // Add more employee entries as needed
  ];

  // Filtered employees based on the query
  const filteredEmployees = Seff.filter((employee) =>
    ["name", "position"].some((key) =>
      employee[key]?.toLowerCase().includes(query.toLowerCase())
    )
  );
  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowResults(true);
    setQuery(employee.name);
  };

  // Handle search button click
  const handleSearch = () => {
    setShowResults(query !== "");
  };

  // Handle clear button click
  const handleClear = () => {
    setQuery("");
    setShowResults(false);
  };

  const clickhandles = () => {
    if (query) {
      setTable(true);
    } else {
      setTable(false);
    }
  };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowResults(true);
  };
  const sortabyafeild = (feild) => {
    const sortedEmployees = [filteredEmployees].sort((a, b) =>
      a[feild].localeCompare(b[feild])
    );
    setEmployees(sortedEmployees);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      <Navbar />
      <Typography variant="h5" gutterBottom>
        Employee Search
      </Typography>
      <Box display="flex" gap={1} mb={2}>
        <TextField
          placeholder="Search your Employee Details"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </Box>
      <div className="info-container">
        <div className="info-box">
          <h3>Employeee</h3>
          <BsPerson />
          <h5>300</h5>
        </div>
        <div className="info-box">
          <h3>Position</h3>
          <BsBriefcase />
        </div>
        <div className="info-box">
          <h3>Salary</h3>
          <BsCurrencyDollar />
          <h5>1300$</h5>
        </div>
      </div>
      {showResults && (
        <Box>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >
            <thead>
              {table && (
                <tr>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Name
                  </th>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Position
                  </th>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Salary
                  </th>
                </tr>
              )}
            </thead>
            {selectedEmployee && (
              <Box mt={2}>
                <Typography variant="h6">Employee Details:</Typography>
                <Typography>Name: {selectedEmployee.name}</Typography>
                <Typography>Position: {selectedEmployee.position}</Typography>
                <Typography>Location: {selectedEmployee.location}</Typography>
                <Typography>Salary: {selectedEmployee.salary}</Typography>
              </Box>
            )}

            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td
                      style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                    >
                      {employee.name}
                    </td>
                    <td
                      style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                    >
                      {employee.position}
                    </td>
                    <td
                      style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                    >
                      {employee.salary}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    style={{ padding: "8px", textAlign: "center" }}
                  >
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Box>
      )}
    </Box>
  );
};

export default EmployeeData;
