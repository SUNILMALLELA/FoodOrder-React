import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import FoodDetails from "./pages/FoodDetails";
import FoodList from "./pages/foodlist";
import LoginForm from "./pages/LoginForm";
function App() {
  return (
    <>
      <LoginForm />
      <Nav />
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </>
  );
}

export default App; 
