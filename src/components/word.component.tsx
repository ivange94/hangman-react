import React from 'react';
import styles from './word.module.css';
import Square from './square.component';

export default function Word(props: WordProps) {
    let squares = props.word.map(char => 
        <Square value={char} disableClick={true} onClick={() => console.log()}/>
    );

    return (
        <div className={styles.row}>
            {squares}
        </div>
    )
}

type WordProps = {
    word: string[]
}