import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [newName, setnewName] = useState("");

  useEffect(() => {
    if (data.date === new Date()) {
      const index = "In Progress";
      setnewName(index);
    } else {
      const index = "Queued";
      setnewName(index);
    }
  }, [data.date]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure you wanted to delete that user")) {
      const response = await axios.delete(`http://localhost:8080/user/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getUsers();
      }
    }
  };
  console.log("data=>", data);
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center " }}>No.</th>
            <th style={{ textAlign: "center " }}>Name</th>
            <th style={{ textAlign: "center " }}>ScanType</th>
            <th style={{ textAlign: "center " }}>Contact</th>
            <th style={{ textAlign: "center " }}>Status</th>
            <th style={{ textAlign: "center " }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.scanType}</td>
                  <td>{item.contact}</td>
                  <td>{newName}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteUser(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
