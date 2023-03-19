import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
    console.log(data);
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setData(response.data.data);

    if (response.status === 201) {
      setData(response.data.data);
    }
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure you wanted to delete that user")) {
      const response = await axios.delete(`http://localhost:8080/user/${id}`);
      if (response.status === 201) {
        toast.success(response.data.data);
      }
      getUsers();
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center " }}>No.</th>
            <th style={{ textAlign: "center " }}>RepositoryName</th>
            <th style={{ textAlign: "center " }}>Timestamp</th>
            <th style={{ textAlign: "center " }}>Id</th>
            <th style={{ textAlign: "center " }}>Status</th>
            <th style={{ textAlign: "center ", display: "flex" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th>{item.repositoryName}</th>
                  <th>{item.queuedAt}</th>
                  <th>{item._id}</th>
                  <th>{item.Status}</th>
                  <td style={{ textAlign: "center ", display: "flex" }}>
                    <Link to={`/update/${item._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteUser(item._id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item._id}`}>
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
