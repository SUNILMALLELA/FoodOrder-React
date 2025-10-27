import React, { useState } from 'react'

function ObjectData() {
    const [obj, setObj] = useState({
        name: "sunil",
        age: 23,
        city: "kadapa"
    })
    const handleUpdate = () => {
        //setObj({ city: "VIZAG" })
        setObj((prev) => { return { ...prev, city: "KADAPA" } })
    }
    return (
        <>
            <h1>I am {obj.name} at the {obj.age} are living in {obj.city}</h1>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default ObjectData