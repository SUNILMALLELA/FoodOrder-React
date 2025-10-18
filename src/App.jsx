import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import FoodDetails from "./pages/FoodDetails";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import Toastify from "./Components/Toastify";
import FoodList from "./pages/FoodList"

// const apiKey = import.meta.env.VITE_API_KEY
// const apiUrl = import.meta.env.VITE_API_URL
// const apiUrls = process.env.REACT_APP_API_URL;
// const apiKeys = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<FoodList />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
      <Toastify />
    </>
  );
}

export default App; 
