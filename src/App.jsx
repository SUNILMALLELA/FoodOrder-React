import React, { useState } from "react"
import Search from "./Components/Search"
import FoodList from "./Components/FoodList"
import Nav from "./Components/Nav"
import './App.css'
function App() {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  )
}

export default App
