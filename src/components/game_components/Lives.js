import React, { useContext, useEffect } from 'react';

import Life from "./lives_components/Life";

import { AppContext } from "../../App";

function Lives() {

    const appContext = useContext(AppContext);
    const { wrongLetters, gameState, livesCompletedPulse, setLivesCompletedPulse } = appContext;

    let life1ClassName = "lives-life";
    let life2ClassName = "lives-life";
    let life3ClassName = "lives-life";

    const hearts = 3 - wrongLetters.length;


    useEffect(() => {
        const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";

        if (isGameOver) {
            if (hearts > 0)
            setTimeout(() => {
                setLivesCompletedPulse([1, 0, 0]);
            }, 1000);


            if (hearts > 1)
            setTimeout(() => {
                setLivesCompletedPulse([1, 1, 0 ]);
            }, 1300);

            if (hearts > 2)
            setTimeout(() => {
                setLivesCompletedPulse([1, 1,1]);
            }, 1500);

        }

    }, [gameState]);


    if (livesCompletedPulse[0] === 1)
        life1ClassName = "lives-life-completed";
    if (livesCompletedPulse[1] === 1)
        life2ClassName = "lives-life-completed";
    if (livesCompletedPulse[2] === 1)
        life3ClassName = "lives-life-completed";




    return (<div className="lives">

        <div className={wrongLetters.length === 0 ? "" :   (wrongLetters.length === 1 ? "lives-hurt-1" : (wrongLetters.length === 2 ? "lives-hurt-2" : "lives-hurt-3" )  )}     >

        <span className={life1ClassName}>
            <Life state={wrongLetters.length >= 3 ? "EMPTY" : "FULL"} />
        </span>
        <span className={life2ClassName}>
            <Life state={wrongLetters.length >= 2 ? "EMPTY" : "FULL"} />
        </span>
        <span className={life3ClassName}>
            <Life state={wrongLetters.length >= 1 ? "EMPTY" : "FULL"} />
        </span>
        </div>
    </div>);
}


export default Lives;