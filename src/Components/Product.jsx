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

const Product = () => {
  const [data, setData] = useState([
    { name: "Sunday", product: 100 },
    { name: "Monday", product: 200 },
    { name: "Wednesday", product: 300 },
    { name: "Thhursday", product: 250 },
    { name: "Tuesday", product: 150 },
    { name: "Friday", product: 270 },
    { name: "Saturday", product: 190 },
  ]);

  return (
    <div className="middlebar-container">
      <Navbar />
      <div className="middlebar-title">
        <h4>Product</h4>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <h3>Products</h3>
          <BsBox className="icon" />
          <h1>{data.reduce((sum, item) => sum + item.product, 0)}</h1>
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
              <Bar dataKey="product" fill="#8884d8" name="Products" />
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
                dataKey="product"
                stroke="#8884d8"
                name="Products"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Product;
