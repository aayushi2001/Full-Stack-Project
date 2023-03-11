import React,{useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from "axios";
import './View.css';

const View = () => {
  const [user, setUser] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    if(id){
      getSingleUser(id);
    }
  },[id])

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
      if(response.status === 200){
        setUser({...response.data[0]});
      }
  };
  return (
    <div style={{marginTop:"150px"}}>
        <div className='card'>
          <div className='card-header'>
            <p>User Contact Detail</p>
          </div>
          <div className='container'>
            {/* <strong>ID:</strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name:</strong>
            <span>{user && user.name}</span>
            <br />
            <br />
            <strong>ScanType:</strong>
            <span>{user && user.scanType}</span>
            <br />
            <br />
            <strong>Contact:</strong>
            <span>{user && user.contact}</span>
            <br />
            <br /> */}
            
            <table className='styled-table'>
      <thead>
        <tr>
          <th style={{ textAlign: "center "}}>Id</th>
          <th style={{ textAlign: "center "}}>Name</th>
          <th style={{ textAlign: "center "}}>ScanType</th>
          <th style={{ textAlign: "center "}}>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>
          {user && user.name}
          </td>
          <td>{user && user.scanType}</td>
        <td>  {user && user.contact}</td>
        </tr>
      </tbody>
            </table>
            <Link to="/home">
              <button className='btn btn-edit'>Go Back</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default View