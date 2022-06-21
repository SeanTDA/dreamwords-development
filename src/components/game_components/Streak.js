
import React, { useContext } from 'react';
import { AppContext } from "../../App";

function Streak({ streakType }) {

    const appContext = useContext(AppContext);
    const { streak } = appContext;


    //if (streak <= 0) return;
    let displayStreak = streak;



    if (displayStreak <= 0) displayStreak = 0;





    const streakClassName = displayStreak > 0 ? "aliveStreak" : "aliveStreak aliveStreakDull";



    return (
                <div className={streakClassName}>
                    🔥 : {displayStreak}
                </div>
    );
}

export default Streak;