import React from 'react'

function FoodItem({ food }) {
    return (
        <>
            <img src={food.image} alt=''></img>
            <h1>{food.title}</h1>
            <button>View Recipe</button>
        </>
    )
}

export default FoodItem