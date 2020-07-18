import React, { useState, useEffect } from 'react';
import styles from './game.module.css';
import LetterBoard from './letter-board.component';
import Word from './word.component';
import Hanger from './hanger.component';
import Menu from './menu.component';

export default function Game() {
    const words = ["LARRY", "JACK", "ROOM", "BED", "HOUSE", "ENERGY", "JOB", "GAME", "SCHOOL", "AROUND", "LAST"];
    const random = words[Math.floor(Math.random()*words.length)];
    const [selected, setSelected] = useState<string>(random);
    const [word, setWord] = useState<string[]>([]);
    const [lives, setLives] = useState<number>(12);
    const [fails, setFails] = useState<number>(0);
    
 
    useEffect(() => {
        let new_word: string[] = selected.split('').map(() => "");
        setWord(new_word);
        console.log(selected);// make game easier by showing the answer in console
    }, [selected])

    function handleLetterSelected(letter: string) {
        const tmp_word = word.slice();
        let hit = false;
        for (let i = 0; i < selected.length;i++) {
            if (letter === selected[i]) {
                hit = true;
                tmp_word[i] = letter;
            }    
        }
        let lives_left = lives;
        let fails_tmp = fails;
        if (!hit) {
            fails_tmp += 1;
            lives_left--;
        }
        setLives(lives_left);
        setWord(tmp_word);
        setFails(fails_tmp);
    }

    function handleReset() {
        const random = words[Math.floor(Math.random()*words.length)];
        setSelected(random);
        setLives(12);
        setFails(0);
    }

    return (
        <div className={styles.game}>
            <div>
                <Menu onReset={handleReset} lives={lives}/>
            </div>
            <div className={styles.section}>
                <Hanger fails={fails}/>
            </div>
            <div className={styles.section}>
                <Word word={word}/>
            </div>
            <div className={styles.section}>
                <LetterBoard onLetterClick={handleLetterSelected} lives={lives}/>
            </div>
        </div>
    )
}