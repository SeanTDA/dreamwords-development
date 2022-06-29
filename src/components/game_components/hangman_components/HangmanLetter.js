import React, { useContext } from 'react';

import { AppContext } from "../../../App";

function HangmanLetter({ letterToShow, letterClassName }) {


    const appContext = useContext(AppContext);
    const {gameState, levelData } = appContext;



    return (
        <span className={letterClassName}>
            {
                letterToShow
            }
        </span>
    );
}

export default HangmanLetter;