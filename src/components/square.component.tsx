import React, { useState, useEffect } from 'react';
import styles from './square.module.css';

export default function Square(props: SquareProps) {
    const [style, setStyle] = useState({});
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() =>{
        if (props.reset) {
            setStyle({});
            setClicked(false);
        }
    }, [props.reset])

    function handleClick() {
        if (!clicked && !props.disableClick) {
            setStyle({
                "backgroundColor": "grey",
                "cursor": "not-allowed"
            });
            setClicked(true);
            props.onClick(props.value);
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
    reset?: boolean;
    disableClick?: boolean;
}