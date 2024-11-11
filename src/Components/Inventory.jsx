import React, { useState, useEffect } from "react";
import { BsBox, BsTag, BsBarChart, BsArchive } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import "./middlebar.css";
import Navbar from "./Navbar";

const Inventory = () => {
  const [data, setData] = useState([
    { name: "Sunday", inventory: 400 },
    { name: "Monday", inventory: 600 },
    { name: "Tuesday", inventory: 500 },
    { name: "Wednesday", inventory: 200 },
    { name: "Thhursday", inventory: 300 },
    { name: "Friday", inventory: 700 },
    { name: "Saturday", inventory: 400 },
  ]);

  return (
    <div className="middlebar-container">
      <Navbar />
      <div className="middlebar-title">
        <h4>Dashboard</h4>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <h3>Inventory</h3>
          <BsArchive className="icon" />
          <h1>{data.reduce((sum, item) => sum + item.inventory, 0)}</h1>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-container">
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="inventory" fill="#ffc658" name="Inventory" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="inventory"
                stroke="#ffc658"
                name="Inventory"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
