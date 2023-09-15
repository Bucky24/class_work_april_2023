import React from 'react';

import styles from "./button.css";

export default function Button({ label }) {
    return <button className={styles.outer}>
        {label}
    </button>
}