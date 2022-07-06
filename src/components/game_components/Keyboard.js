import React, { useContext, useMemo, useCallback, useEffect } from 'react';

import KeyboardKey from './keyboard_components/KeyboardKey';

import { AppContext } from "../../App";



function Keyboard() {


    const appContext = useContext(AppContext);
    const { onSelectLetter, levelData, gameState, pressedLetters, isLastLetterCorrect  } = appContext;


    const typeLetter = useCallback((key) => {
        onSelectLetter(key);
    }, [onSelectLetter])

    const keys1 = useMemo(() => ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], []);
    const keys2 = useMemo(() => ["A", "S", "D", "F", "G", "H", "J", "K", "L"], []);
    const keys3 = useMemo(() => ["Z", "X", "C", "V", "B", "N", "M"], []);


    const handleKeyboard = useCallback((event) => {
        keys1.forEach((key) => { if (event.key.toLowerCase() === key.toLowerCase()) { typeLetter(key); } });
        keys2.forEach((key) => { if (event.key.toLowerCase() === key.toLowerCase()) { typeLetter(key); } });
        keys3.forEach((key) => { if (event.key.toLowerCase() === key.toLowerCase()) { typeLetter(key); } });
    }, [keys1, keys2, keys3, typeLetter]);



    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        };
    }, [handleKeyboard]);



    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";

    let mainKeyboardClassName = "keyboard";

    if (isLastLetterCorrect === 0)
        mainKeyboardClassName += " keyboard-mistake";
    if (isLastLetterCorrect === 1)
        mainKeyboardClassName += " keyboard-correct";

    if (isGameOver)
        mainKeyboardClassName += " keyboard-gameOver";



    // Unlockable

    return (
        <div className={mainKeyboardClassName} onKeyDown={handleKeyboard}>
            <div className="keyboard-line">
                {keys1.map((key) => {
                    return <KeyboardKey keyVal={key}
                        keyState={
                            gameState === "RUNNING" ? (pressedLetters.includes(key.toLowerCase()) ? (levelData.goalPhrase.toLowerCase().includes(key.toLowerCase()) ? "CORRECT" : "MISTAKE") : "ENABLED") : "DISABLED"
                        }
                    />
                })}
            </div>
            <div className="keyboard-line">
                {keys2.map((key) => {
                    return <KeyboardKey keyVal={key}
                        keyState={
                            gameState === "RUNNING" ? (pressedLetters.includes(key.toLowerCase()) ? (levelData.goalPhrase.toLowerCase().includes(key.toLowerCase()) ? "CORRECT" : "MISTAKE") : "ENABLED") : "DISABLED"
                        }
                    />
                })}
            </div>
            <div className="keyboard-line">
                {keys3.map((key) => {
                    return <KeyboardKey keyVal={key}
                        keyState={
                            gameState === "RUNNING" ? (pressedLetters.includes(key.toLowerCase()) ? (levelData.goalPhrase.toLowerCase().includes(key.toLowerCase()) ? "CORRECT" : "MISTAKE") : "ENABLED") : "DISABLED"
                        }
                    />
                })}
            </div>

        </div>);
}

export default Keyboard;