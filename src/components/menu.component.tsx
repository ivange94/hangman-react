import React from 'react';
import styles from './menu.module.css';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menuScreen}></div>
            <button className={styles.resetStartButton}>Restart</button>
        </div>
    )
}