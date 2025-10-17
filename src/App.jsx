import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import FoodDetails from "./pages/FoodDetails";
import FoodList from "./pages/foodlist";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
// const apiKey = import.meta.env.VITE_API_KEY
// const apiUrl = import.meta.env.VITE_API_URL
// const apiUrls = process.env.REACT_APP_API_URL;
// const apiKeys = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Nav />} />
        <Route path="/" element={<FoodList />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </>
  );
}

export default App; 
