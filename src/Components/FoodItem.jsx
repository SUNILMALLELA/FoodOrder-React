import React from 'react'

function FoodItem({ food }) {
    return (
        <>
            <img width={'130px'} height={'130px'} src={food.image} alt=''></img>
            <h1>{food.name}</h1>
            <button>View Recipe</button>
        </>
    )
}

export default FoodItem