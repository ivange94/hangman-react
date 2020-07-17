import React, { useEffect } from 'react';
import styles from './letter-board.module.css';
import Square from './square.component';

export default function LetterBoard(props: LetterBoardProps) {

    function handleClick(letter: string) {
        props.onLetterClick(letter)
    }

    return (
        <div className={styles.board}>
            <div className={styles.boardRow}>
                <Square 
                    value="A"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="B"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="C"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="D"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="E"
                    onClick={handleClick}
                    reset={props.reset}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="F"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="G"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="H"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="I"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="J"
                    onClick={handleClick}
                    reset={props.reset}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="K"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="L"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="M"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="N"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="O"
                    onClick={handleClick}
                    reset={props.reset}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="P"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="Q"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="R"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="S"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="T"
                    onClick={handleClick}
                    reset={props.reset}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="U"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="V"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="W"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="X"
                    onClick={handleClick}
                    reset={props.reset}/>
                <Square 
                    value="Y"
                    onClick={handleClick}
                    reset={props.reset}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="Z"
                    onClick={handleClick}
                    reset={props.reset}/>
            </div>
        </div>
    )
}

type LetterBoardProps = {
    onLetterClick: Function;
    reset: boolean;
}