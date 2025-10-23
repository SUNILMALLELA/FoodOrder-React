import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Cart.module.css';
import Common from '../Components/common';

function CartChild() {
    const location = useLocation();
    const { food } = location.state || {};

    return (
        <div className={styles.cartContainer}>
            <h2>Your Cart</h2>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>Rating: {food.rating}</p>
            <p>Servings: {food.servings}</p>
            <p>Price: ₹{food.servings * 100}</p>
            <button>Proceed to Checkout</button>
        </div>
    );
}
function Cart() {
    return (
        <>
            <Common ChildComponent={CartChild} />
        </>
    )
}

export default Cart;
