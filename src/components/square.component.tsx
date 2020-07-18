import React, { useState, useEffect } from 'react';
import styles from './square.module.css';

export default function Square(props: SquareProps) {
    const [style, setStyle] = useState({});
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        if (props.lives === 12) {
            setStyle({});
            setClicked(false);
        }
    }, [props.lives]);

    function handleClick() {
        if (!clicked) { 
            props.onClick(props.value);
            setStyle({
                "backgroundColor": "grey",
                "cursor": "not-allowed"
            });
            setClicked(true)
        }
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