import React, { useContext } from 'react';

import { AppContext } from "../../../App";

function HangmanLetter({ letter }) {


    const appContext = useContext(AppContext);
    const {gameState, pressedLetters } = appContext;


    const isLetterRevealed = pressedLetters.includes(letter.toLowerCase());
    const isLetterSpecial = letter === " " || letter === "." || letter === "\n";



    let className = "hangmanLetter";

    if (isLetterRevealed) {
        className += " hangmanLetter-revealed";
    }


    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";
    if (isGameOver) {
        if (isLetterRevealed) {
            className += " hangmanLetter-gameOver-correct";
        } else {
            className += " hangmanLetter-gameOver-mistake";
        }
    }


    let letterToShow = "_";

    if (isLetterRevealed || isLetterSpecial || isGameOver)
        letterToShow = letter.toUpperCase();


    return (
        <span className={className}>
            {
                letterToShow
            }
        </span>
    );
}

export default HangmanLetter;