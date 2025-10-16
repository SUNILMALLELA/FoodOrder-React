import React from 'react';
import styles from './filter.module.css';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';

function Filter({ setSort }) {
    return (
        <div className={styles.container}>
            <button
                className={styles.uparrow}
                onClick={() => setSort('asc')}
            >
                <ArrowCircleUpTwoToneIcon style={{ fontSize: 30 }} />
            </button>
            <button
                className={styles.downarrow}
                onClick={() => setSort('desc')}
            >
                <ArrowCircleDownTwoToneIcon style={{ fontSize: 30 }} />
            </button>
        </div>
    );
}

export default Filter;
