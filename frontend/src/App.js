import React from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";

import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Navigate to="/add" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/add" element={<AddEdit />} />
          <Route exact path="/update/:id" element={<AddEdit />} />
          <Route exact path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
