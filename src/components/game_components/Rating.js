import React, { useContext }  from 'react';
import { AppContext } from "../../App";


function Rating () {

    const appContext = useContext(AppContext);
    const { streakFrozen, streak, superStreak } = appContext;

    let displayStreak = streak;
    let displaySuperStreak = superStreak;

    const showStreak = displayStreak > 0;
    const showSuperStreak = displaySuperStreak > 0; 




    console.log("Streak Frozen: " + streakFrozen);

    if (streakFrozen) {
        return (<div>
        <div className = "rating"> 
            🔥🏆 Frozen until Day 200 (Timezone Calibration)
        </div>
        </div>);
    } else {

    return (
    
        <div className = "rating"> 
        <span>
            {
                showStreak ?

                <span>
                    🔥 +1
                </span> : <span/>
            }
            &nbsp;&nbsp;
            {
                showSuperStreak ?

                <span className = "rating-superStreak">
                    🏆 +1
                </span> :<span/>
            }
        </span>
        
        <br/>
        
        </div>
         );
     }
}

export default Rating;