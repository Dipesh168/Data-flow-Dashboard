import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";
import { List } from "@mui/material";
import Alists from "./Components/Alists";
import EmployeeData from "./Components/Employee.data";
import Data from "./Components/Data";
import Product from "./Components/Product";
import Sales from "./Components/Sales";
import Inventory from "./Components/Inventory";
import Secondhome from "./Components/Secondhome";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<Data />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/secondhome" element={<Secondhome />} />
      </Routes>
    </div>
  );
};

export default App;
