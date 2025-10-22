import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products/101">Product</Link></li>

            </ul>
        </>
    )
}

export default NavBar