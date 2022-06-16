import React, { useContext } from 'react';

import { AppContext } from "../App";


import Streak from "./game_components/Streak.js";
import ImageClue from "./game_components/ImageClue.js";
import Hangman from "./game_components/Hangman.js";
import Lives from "./game_components/Lives.js";
import Keyboard from "./game_components/Keyboard.js";
import Rating from "./game_components/Rating.js";
import ShareButton from "./game_components/ShareButton.js";









function Game() {


    const appContext = useContext(AppContext);
    const { gameState, levelData, helpMenuShown } = appContext;

    const isGameRunning = gameState === "RUNNING";
    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";

    const isHelpMenuShown = helpMenuShown == 1;

    return (
        <div className="game">


            <div className="centerElements">
                <Streak />
                <ImageClue />
                <Hangman />
                {
                    isGameOver ?
                        <div> <Lives /><Rating /><ShareButton /> </div> :
                        isGameRunning ?
                        <Lives /> : <> </>
                }

            </div>



            {
                !isGameOver ?
                    <Keyboard /> :
                    <div />
            }




        </div>);
}

export default Game;