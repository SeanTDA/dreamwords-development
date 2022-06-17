import React, { useContext }  from 'react';
import { AppContext } from "../../App";


function Rating () {

    const appContext = useContext(AppContext);
    const { streak, superStreak, wrongLetters } = appContext;

    let displayStreak = streak;
    let displaySuperStreak = superStreak;

    const showStreak = displayStreak > 0;
    const showSuperStreak = displaySuperStreak > 0; 

    const hearts = 3 - wrongLetters.length;


    console.log("gettttttttttttttttt WWRONG LETTERS ========= " + wrongLetters + "  " + hearts + " " + wrongLetters.length);


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

                <div>
                    ⚡ +1
                </div> :<div/>
            }


        
        <br/>
        
        </div>
         
         
         );
}

export default Rating;