import React from 'react'
import { useParams } from 'react-router-dom'

function ProductList() {
    const { ids } = useParams();
    return (
        <>
            <h1>The Products List are </h1>
            <p>The List items are {ids}</p>
        </>
    )
}

export default ProductList