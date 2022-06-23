
import React, { useContext } from 'react';
import { AppContext } from "../../App";

function SuperStreak() {

    const appContext = useContext(AppContext);
    const { superStreak } = appContext;


    let displaySuperStreak = superStreak;


    if (displaySuperStreak <= 0) displaySuperStreak = 0;

    let superStreakClassName = displaySuperStreak > 0 ? "superStreak" : "superStreakInvisible";



    // High score display 
    superStreakClassName += " superStreakHighScore";

    const superStreakClassName01 = superStreakClassName + "-01";
    const superStreakClassName02 = superStreakClassName + "-02";
    const superStreakClassName03 = superStreakClassName + "-03";
    const superStreakClassName04 = superStreakClassName + "-04";
    const superStreakClassName05 = superStreakClassName + "-05";
    const superStreakClassName06 = superStreakClassName + "-06";
    const superStreakClassName07 = superStreakClassName + "-07";
    const superStreakClassName08 = superStreakClassName + "-08";
    const superStreakClassName09 = superStreakClassName + "-09";
    const superStreakClassName10 = superStreakClassName + "-10";

    return (
                <div className={superStreakClassName}>
                    <span>🏆 
                        <span> </span> 
                        <span className={superStreakClassName08}>:</span> 
                        <span> </span> 
                        <span className={superStreakClassName10}>{displaySuperStreak}</span> 
                    </span>
                </div>
    );
}

export default SuperStreak;