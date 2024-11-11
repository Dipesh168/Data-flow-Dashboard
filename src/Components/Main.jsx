import React, { useState } from "react";
import Navbar from "./Navbar"; // Adjust the path as needed
import Sidebar from "./Sidebar"; // Adjust the path as needed
import Middlebar from "./Middlebar"; // Adjust the path as needed

import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Alists from "./Alists";

const Main = ({ userdata }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // To manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Navbar - fixed at the top */}
      <Navbar />

      {/* Main content */}
      <Box
        sx={{
          display: "flex",
          marginTop: "20px", // Test with smaller value
          padding: "20px",
        }}
      >
        {/* Sidebar - Conditionally render based on the state */}
        {isSidebarOpen && <Sidebar userdata={userdata} />}
        {/* Middlebar */}
        <Middlebar />{" "}
      </Box>

      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "20px", // Adjust position
          left: "20px",
          zIndex: 1000, // Ensure it's above other content
          backgroundColor: "#3f51b5",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>
    </div>
  );
};

export default Main;
