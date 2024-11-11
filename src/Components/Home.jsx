import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Middlebar from "./Middlebar";
import Main from "./Main";

const Home = ({ userdata }) => {
  // Destructure `userdata` from props
  return (
    <div style={{ backgroundColor: "#F3F3F3", padding: "40px" }}>
      <Box
        container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Sidebar userdata={userdata} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Middlebar />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
