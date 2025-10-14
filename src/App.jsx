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



/*Objective: Build a simple e-commerce UI that fetches product data from the following API: https://dummyjson.com/products Requirements: Product Listing Page: Fetch and display products from the provided API. Show product details in a grid layout (e.g., image, title, price). Each product card should include an “Add to Cart” button. Cart Functionality: When a user clicks “Add to Cart,” the product should be added to the cart. Cart state should be persistent across pages (using React Context or Redux). Optionally show a badge/count on the cart icon in the header. Cart Page: A separate /cart page that lists all the products added to the cart. Display basic product information (image, title, price, quantity). Allow users to remove individual items from the cart. Optionally show the total cart value at the bottom. Technical Stack: React.js (with React Router for navigation) State Management: React Context API or Redux Styling: CSS / Tailwind / Bootstrap (any preferred) */