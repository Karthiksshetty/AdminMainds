import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import AdminHomePage from "../pages/AdminHomePage";


const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Dash" element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
