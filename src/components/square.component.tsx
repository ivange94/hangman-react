import React, { useState, useEffect } from 'react';
import styles from './square.module.css';

export default function Square(props: SquareProps) {
    const [style, setStyle] = useState({});

    useEffect(() => {
        setStyle({});
    }, [props.reset]);

    function handleClick() {
        props.onClick(props.value);
        setStyle({"backgroundColor": "grey"})
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
    reset: boolean;
}