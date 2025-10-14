import React from 'react';
import FoodItem from './FoodItem';
import styles from './FoodList.module.css';

function FoodList({ foodData, setFoodId }) {
    return (
        <div className={styles.foodGrid}>
            {foodData.map((food, index) => (
                <FoodItem key={index} food={food} setFoodId={setFoodId} />
            ))}
        </div>
    );
}

export default FoodList;
