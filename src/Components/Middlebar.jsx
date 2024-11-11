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

const Middlebar = () => {
  const [data, setData] = useState([
    { name: "Sunday", product: 100, sales: 2400, inventory: 400 },
    { name: "Monday", product: 200, sales: 1398, inventory: 600 },
    { name: "Tuesday", product: 150, sales: 9800, inventory: 500 },
    { name: "Wednesday", product: 300, sales: 3908, inventory: 200 },
    { name: "Thhursday", product: 250, sales: 4800, inventory: 300 },
    { name: "Friday", product: 270, sales: 3800, inventory: 700 },
    { name: "Saturday", product: 190, sales: 4300, inventory: 400 },
  ]);

  return (
    <div className="middlebar-container">
      <div className="middlebar-title">
        <h4>Dashboard</h4>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <h3>Products</h3>
          <BsBox className="icon" />
          <h1>{data.reduce((sum, item) => sum + item.product, 0)}</h1>
        </div>
        <div className="card">
          <h3>Sales</h3>
          <BsBarChart className="icon" />
          <h1>{data.reduce((sum, item) => sum + item.sales, 0)}</h1>
        </div>
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
              <Bar dataKey="product" fill="#8884d8" name="Products" />
              <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
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
                dataKey="product"
                stroke="#8884d8"
                name="Products"
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#82ca9d"
                name="Sales"
              />
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

export default Middlebar;
