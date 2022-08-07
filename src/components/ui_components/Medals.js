
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


import MedalKeycap from './MedalKeycap.js';

import {getNumDaysWon, getHighestStreak, getHighestSuperStreak} from  "../../historyHelper.js";

function Medals() {

    const appContext = useContext(AppContext);
    const { medalsShown, setMedalsShown, history } = appContext;


    function onCloseButtonClicked () {
        setMedalsShown(0);
    }


    
    let faderClassName = "medals-fader";

    if (medalsShown) {
        faderClassName += " medals-fader-active";
    }



    return (

        <div>

            <div className={faderClassName}>

                {!medalsShown ?<div/> : 
                <div> 
                    
                

                    <div className="medals-container">


                        <div className="subMenu-header">
                            <div className="subMenu-center"> MY COLLECTION </div>
                            <div className="subMenu-right"></div>
                        </div>


                        <div className="medals-shelf">
                            <MedalKeycap keycap="NONE" />
                            <MedalKeycap keycap="GRAD"/>
                            <MedalKeycap keycap="STRIPE"/>
                            <MedalKeycap keycap="DOTS"/>
                            <MedalKeycap keycap="CAT"/>
                            <MedalKeycap keycap="BOLT"/>
                            <MedalKeycap keycap="HEART"/>
                            <MedalKeycap keycap="EYES"/>



                            
                            <MedalKeycap keycap="DIAMONDS"/>
                            <MedalKeycap keycap="GRID"/>
                            <MedalKeycap keycap="LITERAL"/>
                        </div>

                        <div className="simple-closeButton-container">
                            <div className="simple-closeButton" onClick={onCloseButtonClicked}>
                                <img src="images/close.svg" alt="Close" />
                            </div>
                        </div>


                        <div className="subMenu-footer"> 
                            <div className="medals-footer"> 
                            wins: {getNumDaysWon(history)}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;highest 🔥: {getHighestStreak(history)}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;highest 🏆: {getHighestSuperStreak(history)}
                            </div>
                        </div>

                        
                    </div>












                </div> 
                }
            </div> 


        </div>

        );
};


export default Medals;