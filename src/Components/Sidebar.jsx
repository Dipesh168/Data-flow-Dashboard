import React from "react";

import "./sidebar.css";
import {
  BsCart3,
  BsFillGridFill,
  BsBox,
  BsTag,
  BsBarChart,
  BsArchive,
  BsFillGearFill,
} from "react-icons/bs";

const Sidebar = ({ userdata }) => {
  //   console.log(userdata?.username);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "190px",
        height: "400px",
        borderRadius: "15px",
        backgroundColor: "white",
        marginBottom: "110px",
      }}
    >
      {/* <h4 style={{ position: "relative", left: "34%" }}>
        {userdata?.username || "username not found"}
        
      </h4>  */}

      <ul className="sidebar-item">
        <li className="sidebar-lists">
          <a href="/product">
            <BsBox /> Product
          </a>
        </li>

        <li className="sidebar-lists">
          <a href="/sales">
            <BsBarChart /> Sales
          </a>
        </li>
        <li className="sidebar-lists">
          <a href="/inventory">
            <BsArchive /> Inventory
          </a>
        </li>
        <li className="sidebar-lists">
          <a href="">
            <BsFillGearFill /> Setting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
