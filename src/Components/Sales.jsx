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

const Sales = () => {
  const [data, setData] = useState([
    { name: "Sunday", sales: 2400 },
    { name: "Monday", sales: 1398 },
    { name: "Tuesday", sales: 9800 },
    { name: "Wednesday", sales: 3908 },
    { name: "Thhursday", sales: 4800 },
    { name: "Friday", sales: 3800 },
    { name: "Saturday", sales: 4300 },
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
          <h3>Sales</h3>
          <BsBarChart className="icon" />
          <h1>{data.reduce((sum, item) => sum + item.sales, 0)}</h1>
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
              <Bar dataKey="Sales" fill="#8884d8" name="Sales" />
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
                dataKey="Sales"
                stroke="#8884d8"
                name="Sales"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Sales;
