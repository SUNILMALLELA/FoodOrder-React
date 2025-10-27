import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 2000)
    }, [])
    return (
        <>
            <h1>The count start from a {count}</h1>
        </>
    )
}

export default UseEffect