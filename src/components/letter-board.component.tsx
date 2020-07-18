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
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="B"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="C"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="D"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="E"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="F"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="G"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="H"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="I"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="J"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="K"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="L"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="M"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="N"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="O"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="P"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="Q"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="R"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="S"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="T"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="U"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="V"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="W"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="X"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
                <Square 
                    value="Y"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
            </div>
            <div className={styles.boardRow}>
                <Square 
                    value="Z"
                    onClick={handleClick}
                    reset={props.reset}
                    disableClick={props.disableClick}/>
            </div>
        </div>
    )
}

type LetterBoardProps = {
    onLetterClick: Function;
    reset: boolean;
    disableClick: boolean;
}