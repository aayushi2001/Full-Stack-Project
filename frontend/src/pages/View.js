import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(response.data.data);
    console.log(response.data.data);
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Details</p>
        </div>
        <div className="container">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center " }}>Rule ID</th>
                <th style={{ textAlign: "center " }}>Description</th>
                <th style={{ textAlign: "center " }}>Severity</th>
                <th style={{ textAlign: "center " }}>Path Name</th>
                <th style={{ textAlign: "center " }}>Line Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user && user.ruleID}</td>
                <td>{user && user.description}</td>
                <td>{user && user.severity}</td>
                <td>{user && user.path}</td>
                <td>{user && user.line}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/home">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
