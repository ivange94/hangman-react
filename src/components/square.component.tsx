import React, { useState, useEffect } from 'react';
import styles from './square.module.css';

export default function Square(props: SquareProps) {
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (props.lives === 12) {
            setStyle({});
        }
    }, [props.lives]);

    function handleClick() {
        props.onClick(props.value);
        setStyle({
            "backgroundColor": "grey",
            "cursor": "not-allowed"
        })
    }

    return (
        <button className={styles.square} onClick={handleClick} style={style}>
           {props.value}
        </button>
    )
}

type SquareProps = {
    value: string;
    onClick: Function;
    lives: number;
}