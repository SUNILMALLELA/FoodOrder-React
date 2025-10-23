import React, { useContext } from 'react'
import { context } from './UseContext1'

function UseContext2() {
    // const res = useContext(context)step3
    const { value } = useContext(context)
    return (
        // <div>UseContext2{res}</div>step3
        <div>The Final result {value}</div>
    )
}

export default UseContext2