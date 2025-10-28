
import React, { useEffect, useLayoutEffect } from 'react'
function UseLayoutEffect() {
    useEffect(() => {
        console.log("Message for useEffect");
    }, [])
    useLayoutEffect(() => {
        console.log("Message for useLayoutEffect");
    }, [])
    return (
        <>
            <h6>UseLayoutEffect</h6>
            <ul>
                {Array(10)
                    .fill('')
                    .map((item, index) => (
                        <li key={index}>{Math.pow(Math.random(), 10)}</li>
                    ))}
            </ul>


        </>
    )
}

export default UseLayoutEffect