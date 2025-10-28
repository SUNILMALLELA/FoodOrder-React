import React, { createContext, useContext } from 'react'
import Context2 from './Context2'
export const context = createContext()
function Context1() {
    const phone = "+0987654321"
    return (
        <>
            <h6>Creating a context using custom Hooks</h6>
            <context.Provider value={{ phone }}>
                <Context2 />
            </context.Provider>
        </>
    )
}

export function useUser() {
    return useContext(context)
}
export default Context1