import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)
    function cubeNum(num) {
        console.log('calculation done');
        return Math.pow(num, 3)
    }
    const result = useMemo(() => cubeNum(number), [number])
    return (
        <>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <h1>The cube of a number is {result}</h1>
            <h1>The intial value is {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add++</button>
        </>
    )
}

export default UseMemo