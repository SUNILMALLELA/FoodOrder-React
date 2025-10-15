import React from 'react'

function Filter({ setSort }) {
    return (
        <>
            <div>
                <button onClick={() => setSort('asc')}>Names Ascending</button>
                <button onClick={() => setSort('desc')}>Names Descending</button>
            </div>

        </>
    )
}

export default Filter;