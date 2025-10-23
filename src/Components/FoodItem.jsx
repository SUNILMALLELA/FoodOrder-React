import React, { useState } from 'react';
import styles from './FoodItem.module.css';
import { useNavigate } from 'react-router-dom';

function FoodItem({ food }) {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRkqHa8X6gNfc2GC3U3CfJT09Qu0zqe7AOA&s';

    return (
        <div className={styles.itemContainer}>
            <img
                src={!loaded || error ? placeholder : food.image}
                className={styles.foodImage}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
            <div className={styles.info}>
                <h3 className={styles.foodName}>{food.name}</h3>
                <p className={styles.cuisine}>{food.cuisine}</p>
                <button
                    className={styles.viewButton}
                    onClick={() => navigate(`/food/${food.id}`)}
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
}

export default FoodItem;
