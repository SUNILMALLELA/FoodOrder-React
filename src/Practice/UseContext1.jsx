import React, { createContext, useState } from 'react'
import UseContext2 from './UseContext2'
import Login from './Login'
export const context = createContext()//step1
function UseContext1() {
    const [value, setValue] = useState("")//step4
    return (
        <>
            {/* <context.Provider value="guest">
                <UseContext2></UseContext2>
            </context.Provider>step2 */}

            {/* step4 */}
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}></input>
            <context.Provider value={{ value, setValue }}>
                <UseContext2></UseContext2>
                <Login></Login>
            </context.Provider>
        </>
    )
}

export default UseContext1