import React from 'react'
import { useUser } from './context1'
function Context2() {
    const { data } = useUser()
    return (
        <>
            <h1>With custom Hooks of {data}</h1>
        </>

    )
}

export default Context2