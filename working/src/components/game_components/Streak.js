
import React, { useContext } from 'react';
import { AppContext } from "../../App";

function Streak({ streakType }) {

    const appContext = useContext(AppContext);
    const { streak, superStreak, superStreakHighScore } = appContext;


    //if (streak <= 0) return;
    let displayStreak = streak;
    let displaySuperStreak = superStreak;
    let displaySuperStreakHighScore = superStreakHighScore;



    if (displayStreak <= 0) displayStreak = 0;
    if (displaySuperStreak <= 0) displaySuperStreak = 0;

    let superStreakClassName = displaySuperStreak > 0 ? "superStreak" : "superStreakInvisible";


    const streakClassName = displayStreak > 0 ? "aliveStreak" : "aliveStreak aliveStreakDull";


    // High score display 
    superStreakClassName += " superStreakHighScore";
    /*const isBeatingOrEqualToHighScore = displaySuperStreak >= displaySuperStreakHighScore;
    if (isBeatingOrEqualToHighScore)
        superStreakClassName += " superStreakHighScore";

    let superStreakHighScoreSuffix = "";
    if (!isBeatingOrEqualToHighScore)
        superStreakHighScoreSuffix += " / " + displaySuperStreakHighScore;
    */




    return (
            <div className="streak">
                <div className={streakClassName}>
                    🔥 streak : {displayStreak}
                </div>

                <div className={superStreakClassName}>
                    ⚡ s.streak : {displaySuperStreak}
                </div>

            </div>

    );
}

export default Streak;