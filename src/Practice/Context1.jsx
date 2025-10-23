import React, { createContext, useContext, useState } from 'react'
export const Context = createContext()
function Context1({ children }) {
    const [data, setData] = useState("Sunil")
    return (
        <>
            <Context.Provider value={{ data, setData }}>
                {children}
            </Context.Provider>
        </>
    )
}

export function useUser() {
    return useContext(Context)
}
export default Context1