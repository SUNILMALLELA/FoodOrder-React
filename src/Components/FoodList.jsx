import React from 'react'
import FoodItem from './FoodItem'

function FoodList({ foodData }) {
    return (
        <>
            {foodData.map((food, index) => <FoodItem key={index} food={food} />)}
        </>
    )
}

export default FoodList