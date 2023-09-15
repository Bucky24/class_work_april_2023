import React from 'react';

// because I'm using module loading, styles becomes an object
// looking like this:
/*
{
    outer: "compiled class name"
}
*/
import styles from "./button.css";

export default function Button({ label }) {
    return <button className={styles.outer}>
        {label}
    </button>
}