import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo neque vitae ducimus odit sit, eos natus quae corporis harum fugiat vero iusto aliquid officia molestiae quod. Quia incidunt quo totam!</p>
            <Link to="profile">Profile</Link>
            <Link to="contact">ContactUS</Link>
            <Outlet />
        </>
    )
}

export default Home