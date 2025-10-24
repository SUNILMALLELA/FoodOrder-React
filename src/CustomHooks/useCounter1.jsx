import React from 'react'
import useCounter from './useCounter'

function UseCounter1() {
    const { count, decrement, increment } = useCounter()
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>
        </>
    )
}

export default UseCounter1