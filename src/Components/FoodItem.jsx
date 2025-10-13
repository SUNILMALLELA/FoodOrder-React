import React from 'react'

function FoodItem({ food }) {
    return (
        <>
            <img width={'30px'} height={'30px'} src={food.image} alt=''></img>
            <h1>{food.name}</h1>
            <button>View Recipe</button>
        </>
    )
}

export default FoodItem