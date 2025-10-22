import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Home() {
    const [data,setData] = useState("")
    const navigate = useNavigate()
    function handleSubmit(){
      navigate("/about", { state: { data } });


    }
    return (
        <>
            <h1>Home Page</h1>
            <input type='text' value={data} onChange={(e)=>setData(e.target.value)}></input>
            <button onClick={handleSubmit}>GoToAboutPage</button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo neque vitae ducimus odit sit, eos natus quae corporis harum fugiat vero iusto aliquid officia molestiae quod. Quia incidunt quo totam!</p>
            <Link to="profile">Profile</Link>
            <Link to="contact">ContactUS</Link>
            <Outlet />
        </>
    )
}

export default Home