import React, { useState } from "react"
import Search from "./Components/Search"
import FoodList from "./Components/FoodList"
import Nav from "./Components/Nav"
import './App.css'
import Container from "./Components/Container"
import InnerContainer from "./InnerContainer"
import FoodDetails from "./FoodDetails"
function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("")
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer><FoodList foodData={foodData} setFoodId={setFoodId} /></InnerContainer>
        <InnerContainer><FoodDetails foodId={foodId} /></InnerContainer>
      </Container>
    </>
  )
}

export default App
