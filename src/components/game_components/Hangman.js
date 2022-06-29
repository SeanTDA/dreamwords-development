import React, { useContext } from 'react';

import { AppContext } from "../../App";


import HangmanLetter from './hangman_components/HangmanLetter';

function Hangman() {


    const appContext = useContext(AppContext);
    const { gameState, levelData, pressedLetters } = appContext;


    // Letter helper methods 
    
    function getIsWordHidden (thisWord, hiddenWords) {

        var everyLetterRevealed = true;
        for (var i = 0; i < thisWord.length; i++)
            if (!getIsLetterRevealed(thisWord[i]))
                everyLetterRevealed = false;     
        if (everyLetterRevealed)
            return false;

        return hiddenWords.includes(thisWord);
    }

    function getIsLetterRevealed (thisLetter) {
        return pressedLetters.includes(thisLetter.toLowerCase());
    }

    function getIsLetterSpecial (thisLetter) {
        return thisLetter === " " || thisLetter === "." || thisLetter === "\n";
    }

    function getIsGameOver () {
        return gameState === "GAME_WON" || gameState === "GAME_LOST";
    }

    function getLetterClassName (thisLetter, isHidden) {
        const isGameOver = getIsGameOver();
        const isLetterRevealed = getIsLetterRevealed(thisLetter);

        let letterClassName = "hangmanLetter";

        if (getIsLetterRevealed(thisLetter))
            letterClassName += " hangmanLetter-revealed";
        
        if (isGameOver) 
            if (isLetterRevealed)
                letterClassName += " hangmanLetter-gameOver-correct";
            else
                letterClassName += " hangmanLetter-gameOver-mistake";
        
        if (!isGameOver && isHidden) {
            letterClassName = "hangmanLetter";
            if (isLetterRevealed)
                letterClassName += " hangmanLetter-secret-correct";
            
        }

        return letterClassName;
    }

    function getLetterToShow (thisLetter, isHidden) {
        const isGameOver = getIsGameOver();
        const isLetterRevealed = getIsLetterRevealed(thisLetter);
        const isLetterSpecial = getIsLetterSpecial(thisLetter);

        let letterToShow = "_";
        
        if (!isGameOver && isHidden) // if its not game over and its hit
            letterToShow = "?";
        else if (isLetterRevealed || isLetterSpecial || isGameOver)
            letterToShow = thisLetter.toUpperCase();
        
        return letterToShow;
    }














    let hiddenWords = [];
    if (levelData.hiddenWords != undefined) {
        hiddenWords = (levelData.hiddenWords).split("-");
    }

    


    let goalPhrase = levelData.goalPhrase;


    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";

    const className = "hangman";
    const classNameLine = isGameOver ? "hangman-line hangman-line-gameOver" : "hangman-line";

    const renderLetters = () => {
        const words = goalPhrase.split(" ");
        return words.map((word) => {
            const correctLetters = word.split("");
            const isHidden = getIsWordHidden(word, hiddenWords);

            return (
                <div className="word">
                    {correctLetters.map((correctLetter) => {
                        let letterToShow = getLetterToShow(correctLetter, isHidden);
                        const letterClassName = getLetterClassName(correctLetter, isHidden);
                        
                        return (
                        <HangmanLetter letterToShow = {letterToShow} letterClassName={letterClassName} /> 
                        )
                        })}
                </div>
            )
        })
    }

    return (
        <div className={className}>

            <div className={classNameLine}>
                    {renderLetters()}
            </div>
        </div>);


}

export default Hangman;