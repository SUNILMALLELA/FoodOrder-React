import React, { useEffect, useState } from "react";
import styles from "./TagRecipes.module.css";
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';

function TagRecipes({ tags }) {
    const [open, setOpen] = useState(false);
    const toggleButton = () => setOpen(!open);
    return (
        <div className={styles.dropdownContainer}>
            <button onClick={toggleButton} className={styles.dropdownButton}>
                {open ? <ArrowDropUpTwoToneIcon /> : <ArrowDropDownTwoToneIcon />}
                <span className={styles.buttonText}>
                    {open ? "Hide Tags" : "Show Tags"}
                </span>
            </button>
            {open && (
                <div className={styles.dropdownContent}>
                    {tags.map((tag, index) => (
                        <label key={index} className={styles.checkboxItem}>
                            <input type="checkbox" className={styles.checkbox} />
                            <span>{tag}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TagRecipes;
