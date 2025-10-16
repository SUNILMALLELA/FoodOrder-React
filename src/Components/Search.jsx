import React, { useEffect, useState } from 'react';
import styles from './Search.module.css'
function Search({ setQuery }) {
    const [inputData, setInputData] = useState('');
    useEffect(() => {
        setQuery(inputData)
    }, [inputData])
    return (
        <>
            <div className={styles.searchContainer}>
                <input className={styles.input} type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder="Search for recipes..."
                />
                <button onClick={() => {
                    setInputData('')
                }}>clear</button>
            </div>
        </>
    );
}

export default Search;
