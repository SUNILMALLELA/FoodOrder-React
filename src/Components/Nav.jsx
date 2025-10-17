import React from 'react'
import styles from './Nav.module.css'
import FoodList from '../pages/foodlist'
function Nav() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>FoodReddy</div>
                <ul className={styles.navlinks}>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Offers</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
                <div className={styles.modernbutton}>
                    <button className={styles.login}>Add to Cart</button>
                    <button className={styles.signup}>Logout</button>
                </div>
                <FoodList />
            </nav>

        </>
    )
}

export default Nav