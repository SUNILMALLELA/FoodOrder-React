import React, { useEffect, useRef, useState } from 'react'

function UseRef1() {
    const [value, setValue] = useState(0)
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     setCount(prev => prev + 1)
    // })
    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
    })
    return (
        <>
            <h1>The intial count start from {value}</h1>
            <button onClick={() => setValue(prev => prev + 1)}>Increment</button>
            <h2>The redender count is {count.current}</h2>
        </>
    )
}

export default UseRef1