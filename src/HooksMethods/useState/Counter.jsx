import React, { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }
    return (
        <>
            <h1>The intial count is {count}</h1>
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default Counter