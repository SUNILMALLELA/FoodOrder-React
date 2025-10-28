import React, { useContext } from 'react'
import { context } from './UseContext1'
function ProfileContext() {
    const { phone } = useContext(context)
    return (
        <>
            <h6>Profile{phone}</h6>

        </>
    )
}

export default ProfileContext