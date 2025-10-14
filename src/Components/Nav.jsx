import React from 'react'
import styles from './Nav.module.css'
function Nav() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>FoodReddy</div>
                <ul className={styles.navlinks}>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Cart</a></li>
                    <li><a href=''>Contact</a></li>

                </ul>
                <div className={styles.modernbutton}>
                    <button className={styles.login}>Login</button>
                    <button className={styles.signup}>Signup</button>
                </div>
            </nav>

        </>
    )
}

export default Nav