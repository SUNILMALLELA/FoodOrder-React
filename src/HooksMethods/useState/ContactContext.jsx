import React, { useContext } from 'react'
import { context } from './UseContext1'

function ContactContext() {
    const { phone } = useContext(context)
    return (
        <>
            <h6>Contact{phone}</h6>
        </>
    )
}

export default ContactContext