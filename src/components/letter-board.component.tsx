import React from 'react';
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
                    onClick={handleClick}/>
                <Square 
                    value="B"
                    onClick={handleClick}/>
                <Square 
                    value="C"
                    onClick={handleClick}/>
                <Square 
                    value="D"
                    onClick={handleClick}/>
                <Square 
                    value="E"
                    onClick={handleClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="F"
                    onClick={handleClick}/>
                <Square 
                    value="G"
                    onClick={handleClick}/>
                <Square 
                    value="H"
                    onClick={handleClick}/>
                <Square 
                    value="I"
                    onClick={handleClick}/>
                <Square 
                    value="J"
                    onClick={handleClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="K"
                    onClick={handleClick}/>
                <Square 
                    value="L"
                    onClick={handleClick}/>
                <Square 
                    value="M"
                    onClick={handleClick}/>
                <Square 
                    value="N"
                    onClick={handleClick}/>
                <Square 
                    value="O"
                    onClick={handleClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="P"
                    onClick={handleClick}/>
                <Square 
                    value="Q"
                    onClick={handleClick}/>
                <Square 
                    value="R"
                    onClick={handleClick}/>
                <Square 
                    value="S"
                    onClick={handleClick}/>
                <Square 
                    value="T"
                    onClick={handleClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="U"
                    onClick={handleClick}/>
                <Square 
                    value="V"
                    onClick={handleClick}/>
                <Square 
                    value="W"
                    onClick={handleClick}/>
                <Square 
                    value="X"
                    onClick={handleClick}/>
                <Square 
                    value="Y"
                    onClick={handleClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="Z"
                    onClick={handleClick}/>
            </div>
        </div>
    )
}

type LetterBoardProps = {
    onLetterClick: Function
}