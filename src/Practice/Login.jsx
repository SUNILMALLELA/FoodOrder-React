import React, { useContext, useState } from 'react'
import { context } from './UseContext1';

function Login() {
    const [data, setData] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(data)

    }
    const { value, setValue } = useContext(context)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={data} onChange={(e) => setData(e.target.value)}></input>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login