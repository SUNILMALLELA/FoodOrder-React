import React, { createContext } from 'react'
import ProfileContext from './ProfileContext'
import ContactContext from './ContactContext'
export const context = createContext()
function UseContext1() {
    const phone = "+0987654321"
    return (
        <>
            <h6>UseContext1 </h6>
            <context.Provider value={{ phone }}>
                <ProfileContext />
                <ContactContext />
            </context.Provider>
        </>
    )
}

export default UseContext1