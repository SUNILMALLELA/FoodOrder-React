import React from 'react'

function UseCallback1() {
    console.log("Welcome");

    return (
        <>
            <h1>Don't Watch Start Building</h1>
        </>
    )
}

export default React.memo(UseCallback1)