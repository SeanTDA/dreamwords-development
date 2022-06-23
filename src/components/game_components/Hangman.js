import React, { useContext } from 'react';

import { AppContext } from "../../App";


import HangmanLetter from './hangman_components/HangmanLetter';

function Hangman() {


    const appContext = useContext(AppContext);
    const { gameState, levelData } = appContext;


    let goalPhrase = levelData.goalPhrase; // replace with proper
    // correctPhrase = "sean is an awesome guy that enjoys staying up late making games"; // replace with proper
    // correctPhrase = "hello 123 my name is COOL SEAN";
    // correctPhrase = "my";
    //correctPhrase = "afdhafjkdhgjhfadkjlg akjlgmcklafdvnjkaf afknlghkla";

    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";

    const className = "hangman";
    const classNameLine = isGameOver ? "hangman-line hangman-line-gameOver" : "hangman-line";

    const renderLetters = () => {
        const words = goalPhrase.split(" ");
        return words.map((word) => {
            const correctLetters = word.split("");
            return (
                <div className="word">
                    {correctLetters.map((correctLetter) => { return <HangmanLetter letter={correctLetter} /> })}
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