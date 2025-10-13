import React, { useEffect, useState } from 'react';
import styles from './Search.module.css'
function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pizza");
    useEffect(() => {
        const URL = "https://api.spoonacular.com/recipes/complexSearch";
        const API_KEY = "bfdfecc7f81547318a6694fe30624708";
        async function fetchFood() {
            try {
                const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
                const data = await res.json();
                setFoodData(data.results)
                console.log(data);


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchFood();
    }, [query]);
    // useEffect(() => {
    //     async function fetchFood() {
    //         try {
    //             const res = await fetch('https://dummyjson.com/recipes')
    //             const data = await res.json()
    //             console.log("Data", data.recipes)
    //             setFoodData(data.recipes)
    //         }
    //         catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }
    //     fetchFood()
    // }, [query])
    return (
        <>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
            />
        </>
    );
}

export default Search;
