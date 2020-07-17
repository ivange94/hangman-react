import React from 'react';
import styles from './word.module.css';
import Square from './square.component';

export default function Word(props: WordProps) {
    let squares = props.word.map(char => 
        <Square value={char} onClick={() => console.log()} reset={false}/>
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