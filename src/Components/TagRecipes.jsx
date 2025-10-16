import React, { useEffect, useState } from "react";
import styles from "./TagRecipes.module.css";
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';

function TagRecipes({ tags, getSelectedtagsRecipes }) {
    const [open, setOpen] = useState(false);
    const toggleButton = () => setOpen(!open);
    const handleOnChange = (e, tag) => {
        if (e.target.checked) {
            getSelectedtagsRecipes(tag)
        }
    }
    return (
        <div className={styles.dropdownContainer}>
            <button onClick={toggleButton} className={styles.dropdownButton}>
                {open ? <ArrowDropUpTwoToneIcon /> : <ArrowDropDownTwoToneIcon />}
                <span className={styles.buttonText}>
                    {open ? "Close Recipe List" : "Open Recipe List"}
                </span>
            </button>
            {open && (
                <div className={styles.dropdownContent}>
                    {tags.map((tag, index) => (
                        <label key={index} className={styles.checkboxItem}>
                            <input type="checkbox" className={styles.checkbox} onChange={(e) => handleOnChange(e,tag)} />
                            <span>{tag}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TagRecipes;
