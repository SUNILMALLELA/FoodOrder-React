import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './FoodDetails.module.css'
import Common from '../Components/common';
function FoodDetailsChild() {
    const [food, setFood] = useState(null);
    const { id } = useParams();
    const URL = `https://dummyjson.com/recipes/${id}`;

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                setFood(data);
            } catch (error) {
                console.error("Error fetching food:", error);
            }
        }
        fetchFood();
    }, [id]);

    if (!food) return <div>Loading...</div>;

    return (
        <div className={styles.detailsContainer}>
            <img src={food.image} alt={food.name} className={styles.detailsImage} />
            <div className={styles.detailsInfo}>
                <h2>{food.name}</h2>
                <h3>Ingredients:</h3>
                <ul>
                    {food.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>Prep Time: {food.prepTimeMinutes} mins</p>
                <p>Cook Time: {food.cookTimeMinutes} mins</p>
                <p>Servings: {food.servings}</p>
                <p>Rating: {food.rating} ⭐ ({food.reviewCount} reviews)</p>
                <button>Order Now</button>
            </div>
        </div>

    );
}

function FoodDetails() {
    return (
        <>
            <Common ChildComponent={FoodDetailsChild} />
        </>
    )
}
export default FoodDetails;
