import React from 'react';
import styles from './FoodItem.module.css';

function FoodItem({ food, setFoodId }) {
    return (
        <div className={styles.itemContainer}>
            <img src={food.image} alt={food.name} className={styles.foodImage} />
            <div className={styles.info}>
                <h3 className={styles.foodName}>{food.name}</h3>
                <p className={styles.cuisine}>{food.cuisine}</p>
                <button
                    className={styles.viewButton}
                    onClick={() => setFoodId(food.id)}
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
}

export default FoodItem;
