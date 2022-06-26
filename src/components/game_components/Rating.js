import React, { useContext }  from 'react';
import { AppContext } from "../../App";


function Rating () {

    const appContext = useContext(AppContext);
    const { streak, superStreak } = appContext;

    let displayStreak = streak;
    let displaySuperStreak = superStreak;

    const showStreak = displayStreak > 0;
    const showSuperStreak = displaySuperStreak > 0; 

    return (
    
        <div className = "rating"> 
            {
                showStreak ?

                <div>
                    🔥 +1
                </div> : <div/>
            }

            {
                showSuperStreak ?

                <div className = "rating-superStreak">
                    🏆 +1
                </div> :<div/>
            }


        
        <br/>
        
        </div>
         
         
         );
}

export default Rating;