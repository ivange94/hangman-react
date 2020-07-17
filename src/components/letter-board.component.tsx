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
                    lives={props.lives}/>
                <Square 
                    value="B"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="C"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="D"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="E"
                    onClick={handleClick}
                    lives={props.lives}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="F"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="G"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="H"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="I"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="J"
                    onClick={handleClick}
                    lives={props.lives}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="K"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="L"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="M"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="N"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="O"
                    onClick={handleClick}
                    lives={props.lives}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="P"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="Q"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="R"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="S"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="T"
                    onClick={handleClick}
                    lives={props.lives}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="U"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="V"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="W"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="X"
                    onClick={handleClick}
                    lives={props.lives}/>
                <Square 
                    value="Y"
                    onClick={handleClick}
                    lives={props.lives}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="Z"
                    onClick={handleClick}
                    lives={props.lives}/>
            </div>
        </div>
    )
}

type LetterBoardProps = {
    onLetterClick: Function;
    lives: number;
}