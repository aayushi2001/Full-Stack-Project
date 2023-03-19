import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    }
  }, [location]);
  return (
    <div className="header">
      <p className="logo">Scaned Results</p>
      <div className="header-right">
        <Link to="/home">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => setActiveTab("AddUser")}
          >
            Add User
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
