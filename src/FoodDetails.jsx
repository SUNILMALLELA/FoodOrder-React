import React, { useEffect, useState } from 'react'
import styles from './FoodDetails.module.css'
function FoodDetails({ foodId }) {
    const [food, setFood] = useState("")
    const URL = `https://dummyjson.com/recipes/${foodId}`
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
        }
        fetchFood()
    }, [foodId])
    return (
        <div>
            <div className={styles.childcontainer}>{foodId}</div>
            <div>{food.name}</div>
            <div>{food.ingredients}</div>
            <img src={food.image} alt={food.name} className={styles.image} />
        </div>

    )
}

export default FoodDetails