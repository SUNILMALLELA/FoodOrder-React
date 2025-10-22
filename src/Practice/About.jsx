import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    const location = useLocation();
const { data} = location.state; 
    return (
        <>
            <h1>About</h1>
            <p>{data}</p>
            <button onClick={()=>navigate("/logout")}>click</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque molestias error minima eum ut consequatur ducimus ullam magnam quia dolorum, pariatur minus vero fugit ad. Reprehenderit nulla ratione sint.</p>
        </>
    )
}

export default About