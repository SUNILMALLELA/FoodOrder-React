import React, { useEffect, useState } from 'react';
import styles from './Search.module.css'
function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pasta");
    // useEffect(() => {
    //     const URL = "https://api.spoonacular.com/recipes/complexSearch";
    //     const API_KEY = "b74ec2922ec54909baecc80c9f3463b3";
    //     async function fetchFood() {
    //         try {
    //             const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    //             const data = await res.json();
    //             setFoodData(data.results)
    //             console.log(data);


    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     fetchFood();
    // }, [query]);
    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
                const data = await res.json()
                console.log("Data", data.recipes)
                setFoodData(data.recipes)
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchFood()
    }, [query])
    return (
        <>
        <div className={styles.searchContainer}>
            <input className={styles.input}  type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for recipes..."
            />
        </div>
            
        </>
    );
}

export default Search;
