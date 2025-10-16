import React, { useEffect, useState } from 'react';
import FoodItem from '../Components/FoodItem';
import Search from '../Components/Search';
import Filter from '../Components/filter';
import TagRecipes from '../Components/TagRecipes';

function FoodList() {
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

    const getAlltagsRecipes = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/recipes/tags`)
            const data = await res.json()
            console.log(data);
            setTags(data)
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
        getAlltagsRecipes()
    }, [])

    return (
        <>
            <Search setQuery={setQuery} />
            <Filter setSort={setSort} />
            <TagRecipes tags={tags} />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
                padding: "20px"
            }}>
                {(foodData && foodData.length > 0) && foodData.map((food, index) => (
                    <FoodItem key={index} food={food} />
                ))}
            </div>
        </>
    );
}

export default FoodList;
