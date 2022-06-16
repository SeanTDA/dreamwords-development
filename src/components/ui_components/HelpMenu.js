

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

            <div>

                <div className = "helpMenu-closeButton" onClick={onButtonClicked}> 
                X
                </div>

                <div className="helpMenu-container">
                <div className = "helpMenu-contents">
                    <div className = "helpMenu-header"> 
                        <div className="helpMenu-center">
                            HOW TO PLAY
                        </div>

                        <div className="helpMenu-right">

                        </div>
                    </div>
                    <div className = "helpMenu-guide"> 


                    Guess each letter from the 4 <b>Daydreams.</b><br/>
                    You have 3 chances. <br/><br/>
                    
                    Boost your 🔥 daily streak by winning each day. <br/>Rack up a ⚡ super streak by surviving with all ❤️❤️❤️ hearts intact.<br/><br/>

                    <b>A new set of Daydreams will appear every day!</b><br/><br/>


                    ----<br/>
                    example carousel goes here <br/>
                    ----<br/><br/>

                    <i>Tip #1: Work out what features all 4 images share. <br/>
                    Tip #2: If you are stuck, try out common letters. <br/><br/>

                    

                    Created by<br/>
                    <a className="helpMenu-link-tda" href="https://www.t-da.io/"><b>T&DA</b></a> <br/><br/>
                    Sean - <a className="helpMenu-link-twitter" href="https://twitter.com/Those6Faces">@thosesixfaces</a><br/>Programming & Art<br/>
                    Ray - <a className="helpMenu-link-twitter" href="https://mobile.twitter.com/raymondleung">@raymondleung</a><br/>Design<br/>

                    </i>
                    </div>

                    </div> 


                </div>
                </div>

            
                :
                <div/>

            }
            
            </div>


        </div>

    );
}



/*


*/

export default HelpMenu;






