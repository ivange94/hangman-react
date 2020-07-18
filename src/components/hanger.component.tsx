import React from 'react';
import styles from './hanger.module.css';

export default function Hanger(props: HangerProps) {
    return (
        <div className={styles.wrapper}>
            {props.fails > 0 && <div className={styles.verticalStickBottom}></div>}
            {props.fails > 1 && <div className={styles.verticalStick}></div>}
            {props.fails > 2 && <div className={styles.horizontalStick}></div>}
            {props.fails > 3 && <div className={styles.rope}></div>}
            {props.fails > 4 && <div className={styles.head}></div>}
            {props.fails > 5 && <div className={styles.torso}></div>}
            {props.fails > 6 && <div className={styles.leftarm}></div>}
            {props.fails > 7 && <div className={styles.rightarm}></div>}
            {props.fails > 8 && <div className={styles.leftleg}></div>}
            {props.fails > 10 && <div className={styles.leftfoot}></div>}
            {props.fails > 9 && <div className={styles.rightleg}></div>}
            {props.fails > 11 && <div className={styles.rightfoot}></div>}
        </div>

    )
}

type HangerProps = {
    fails: number;
}