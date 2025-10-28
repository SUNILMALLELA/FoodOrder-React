import React, { useCallback, useState } from 'react'
import UseCallback1 from './UseCallback1'

function UseCallback2() {
    const [count, setCount] = useState(0)
    //const arrows = () => { }---renders
    const arrows = useCallback(() => { }, [])
    return (
        <>
            <UseCallback1 arrows={arrows} />
            <h2>UseCallback Function </h2>
            <h3>{count}</h3>
            <button onClick={() => { setCount(count + 1) }}>click</button>
        </>
    )
}

export default UseCallback2