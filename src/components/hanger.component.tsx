import React from 'react';
import styles from './hanger.module.css';

export default function Hanger() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.verticalStickBottom}></div>
            <div className={styles.verticalStick}></div>
            <div className={styles.horizontalStick}></div>
            <div className={styles.rope}></div>
            <div className={styles.head}></div>
            <div className={styles.torso}></div>
            <div className={styles.leftarm}></div>
            <div className={styles.rightarm}></div>
            <div className={styles.leftleg}></div>
            <div className={styles.leftfoot}></div>
            <div className={styles.rightleg}></div>
            <div className={styles.rightfoot}></div>
        </div>

    )
}