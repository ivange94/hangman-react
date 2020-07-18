import React from 'react';
import styles from './menu.module.css';

export default function Menu(props: MenuProps) {
    return (
        <div className={styles.menu}>
            <div className={styles.menuScreen}>
                { props.lives > 0 ?
                    <span className={styles.message}>Lives left: {props.lives}</span>:
                    <span className={styles.message}>You Lose!!!</span>}
            </div>
            <button className={styles.resetStartButton} onClick={() => props.onReset()}>Restart</button>
        </div>
    )
}

type MenuProps = {
    onReset: Function;
    lives: number;
}