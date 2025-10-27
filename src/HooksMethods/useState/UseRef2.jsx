import React, { useRef } from 'react'

function UseRef2() {
    const inputElement = useRef()
    const handleClick = () => {
        inputElement.current.focus()
        console.log(inputElement);

    }
    return (
        <>
            <input type='text' ref={inputElement}></input>
            <button onClick={handleClick}>click</button>

        </>
    )
}

export default UseRef2