
import React from 'react';

import Streak from "./Streak.js";
import SuperStreak from "./SuperStreak.js";
import Lives from "./Lives.js";

function StreakBar() {

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

