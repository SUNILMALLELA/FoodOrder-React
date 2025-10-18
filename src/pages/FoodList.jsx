import React, { useEffect, useState } from 'react';
import FoodItem from '../Components/FoodItem';
import Search from '../Components/Search';
import Filter from '../Components/filter';
import TagRecipes from '../Components/TagRecipes';
import Common from '../Components/common';

function FoodListChild() {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [sort, setSort] = useState(null);
  const [tags, setTags] = useState([])
  const fetchFood = async (query, sort) => {
    try {
      let extQuery = '';
      if (query) {
        extQuery = `/search?q=${query}`
      }
      if (sort) {
        extQuery = `?sortBy=name&order=${sort}`
      }
      const res = await fetch(`https://dummyjson.com/recipes` + extQuery)
      const data = await res.json()
      //console.log("Data", data.recipes)
      setFoodData(data.recipes)
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const getAlltags = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/tags`)
      const data = await res.json()
      //console.log(data);
      setTags(data)
    }
    catch (error) {
      console.log("Error getAlltagsRecipes data", error);

    }
  }
  const getSelectedtagsRecipes = async (tag) => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/tag/${tag}`)
      const data = await res.json()
      //console.log(data);
      setFoodData(data.recipes)
    }
    catch (error) {
      console.log("Error getAlltagsRecipes data", error);

    }
  }
  useEffect(() => {
    if (query != null) {
      fetchFood(query);
    }
  }, [query])

  useEffect(() => {
    fetchFood()
  }, []);
  useEffect(() => {
    if (sort) {
      fetchFood(null, sort)
    }
  }, [sort])
  useEffect(() => {
    getAlltags()
  }, [])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          background: "#fff",
          padding: "15px 20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        <TagRecipes
          tags={tags}
          getSelectedtagsRecipes={getSelectedtagsRecipes}
        />
        <div style={{ marginBottom: "18px" }}>
          <Search setQuery={setQuery} />
        </div>
        <Filter setSort={setSort} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "20px",
        }}
      >
        {foodData &&
          foodData.length > 0 &&
          foodData.map((food, index) => (
            <FoodItem key={index} food={food} />
          ))}
      </div>
    </>
  );
}



function FoodList() {
  return (
    <>
      <Common ChildComponent={FoodListChild} />
    </>
  )
}
export default FoodList;