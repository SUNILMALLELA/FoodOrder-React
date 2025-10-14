import React from 'react'
import FoodItem from './FoodItem'

function FoodList({ foodData, setFoodId }) {
    return (
        <>
            {foodData.map((food, index) => <FoodItem key={index} food={food} setFoodId={setFoodId} />)}
        </>
    )
}

export default FoodList