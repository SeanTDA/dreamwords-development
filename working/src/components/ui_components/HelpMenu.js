

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";



function HelpMenu() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown, helpMenuShown } = appContext;


    function onButtonClicked () {
        setHelpMenuShown(0);
    }

    const isHelpMenuShown = helpMenuShown === 1;


    let faderClassName = "helpMenu-fader";

    if (isHelpMenuShown) {
        faderClassName += " helpMenu-fader-active";
    }
    

    return (
        <div>

            <div className={faderClassName}> 

            {isHelpMenuShown ? 

                <div className = "helpMenu-container"> 
                    <div className = "helpMenu-header"> 
                    
                        <span>
                            <span> HOW TO PLAY </span>
                            
                            <span className = "helpMenu-closeButton" onClick={onButtonClicked}> 
                                X
                            </span>
                        </span>
                    
                    </div>
                </div>
            
                :
                <div/>

            }
            
            </div>


        </div>

    );
}

export default HelpMenu;