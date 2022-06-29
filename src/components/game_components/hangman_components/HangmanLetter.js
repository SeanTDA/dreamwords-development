import React, { useContext } from 'react';

import { AppContext } from "../../../App";

function HangmanLetter({ letter, isHidden }) {


    const appContext = useContext(AppContext);
    const {gameState, pressedLetters, levelData } = appContext;




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

    if (!isGameOver && isHidden) {
        letterToShow = "?";
        className = "hangmanLetter";
        if (isLetterRevealed)
            className += " hangmanLetter-secret-correct";
            //     letterToShow = "";
        
    }

    /*if (!isGameOver)
        if (pressedLetters.length > 0) 
            if ([pressedLetters[pressedLetters.length-1], pressedLetters[pressedLetters.length-2]].includes(letter))
                letterToShow = "/";*/
        


    return (
        <span className={className}>
            {
                letterToShow
            }
        </span>
    );
}

export default HangmanLetter;