import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddEdit.css";

const initialState = {
  name: "",
  scanType: "",
  contact: "",
  date: new Date(),
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addUser = async () => {
    const response = await axios.post("http://localhost:5000/user", state);

    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.name || !state.scanType || !state.contact) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        await addUser();
      } else {
        await updateUser(state, id);
      }

      history("/home");
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          onChange={handleInputChange}
          value={state.name}
        />
        <label htmlFor="scanType">ScanType</label>

        <select
          name="scanType"
          id="scanType"
          onChange={handleInputChange}
          value={state.scanType}
        >
          <option>Please Select the Scan</option>
          <option>MRI Scan</option>
          <option>CT Scan</option>
          <option>X-Ray</option>
        </select>
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter Contact No. ..."
          onChange={handleInputChange}
          value={state.contact}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
