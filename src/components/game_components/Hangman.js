import React, { useContext } from 'react';

import { AppContext } from "../../App";


import HangmanLetter from './hangman_components/HangmanLetter';

function Hangman() {


    const appContext = useContext(AppContext);
    const { gameState, levelData } = appContext;

    
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
            const isHidden = hiddenWords.includes(word);

            return (
                <div className="word">
                    {correctLetters.map((correctLetter) => { return <HangmanLetter letter={correctLetter} isHidden = {isHidden} /> })}
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