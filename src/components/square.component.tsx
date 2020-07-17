import React from 'react';
import styles from './square.module.css';

export default function Square(props: SquareProps) {
    return (
        <button className={styles.square} onClick={() => props.onClick(props.value)}>
           {props.value}
        </button>
    )
}

type SquareProps = {
    value: string,
    onClick: Function
}