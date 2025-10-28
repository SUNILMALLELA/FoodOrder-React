import React from 'react'
import { useUser } from './Context1'

function Context2() {
    const { phone } = useUser()
    return (
        <>
            <h6>The custom hook result is {phone}</h6>
        </>
    )
}

export default Context2