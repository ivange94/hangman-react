import React, { useState, useEffect } from 'react';
import styles from './game.module.css';
import LetterBoard from './letter-board.component';
import Word from './word.component';
import Hanger from './hanger.component';
import Menu from './menu.component';

export default function Game() {
    const words = ["LARRY", "JACK", "ROOM", "BED", "HOUSE", "ENERGY", "JOB", "GAME", "SCHOOL", "AROUND", "LAST"];
    const random = words[Math.floor(Math.random()*words.length)];
    const [selected, setSelected] = useState(random);
    const [word, setWord] = useState<string[]>([]);
    const [reset, setReset] = useState(false);
    
 
    useEffect(() => {
        let new_word: string[] = selected.split('').map(() => "");
        setWord(new_word);
        console.log(selected);// make game easier by showing the answer in console
    }, [selected])

    function handleLetterSelected(letter: string) {
        const tmp_word = word.slice();
        for (let i = 0; i < selected.length;i++) {
            if (letter === selected[i]) {
                tmp_word[i] = letter;
            }    
        }
        setWord(tmp_word);
    }

    function handleReset() {
        const random = words[Math.floor(Math.random()*words.length)];
        setSelected(random);
        setReset(true);
    }

    return (
        <div className={styles.game}>
            <div>
                <Menu onReset={handleReset}/>
            </div>
            <div className={styles.section}>
                <Hanger reset={reset}/>
            </div>
            <div className={styles.section}>
                <Word word={word}/>
            </div>
            <div className={styles.section}>
                <LetterBoard onLetterClick={handleLetterSelected} reset={reset}/>
            </div>
        </div>
    )
}