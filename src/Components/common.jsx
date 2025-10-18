import React, { useEffect } from 'react'
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Common({ ChildComponent }) {
    const navigate = useNavigate()
    useEffect(() => {
        let isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }
    }, [])
    return (
        <>
            <Nav />
            <ChildComponent />

        </>
    )
}

export default Common;