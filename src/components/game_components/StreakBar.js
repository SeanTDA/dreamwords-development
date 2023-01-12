import React, { useEffect, useContext, useState }  from 'react';
import { AppContext } from "../../App";

import Streak from "./Streak.js";
import SuperStreak from "./SuperStreak.js";
import Lives from "./Lives.js";

function StreakBar() {

    const appContext = useContext(AppContext);
    const { streakFrozen } = appContext;


    console.log("Streak Frozen: " + streakFrozen);

    return (
        <div>
            <div className="streakBar-container">
                <div className="streak">

                    <div className="streakBar-left">
                        <Streak/>
                    </div>
                    <div className="streakBar-center">
                        <Lives/>
                    </div>
                    <div className="streakBar-right">
                        <SuperStreak/>
                    </div>

                </div>
            </div>
        </div>

    );
    
}

export default StreakBar;

