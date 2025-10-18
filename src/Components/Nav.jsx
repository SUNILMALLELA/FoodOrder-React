import React from 'react'
import styles from './Nav.module.css'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Nav() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        navigate("/login")
    }
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>FoodReddy</div>
                <ul className={styles.navlinks}>
                    <li><a href=''><HomeIcon /></a></li>
                    <li><a href=''><MenuIcon /></a></li>
                    <li><a href=''><LocalOfferIcon /></a></li>
                    <li><a href=''><ContactPageIcon /></a></li>
                </ul>
                <div className={styles.modernbutton}>
                    <button className={styles.login}><ShoppingCartIcon /></button>
                    <button className={styles.signup} onClick={handleLogout}><LockIcon /></button>
                </div>
            </nav>

        </>
    )
}

export default Nav