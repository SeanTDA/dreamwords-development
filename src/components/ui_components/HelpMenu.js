

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";



function HelpMenu() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown, helpMenuShown, versionCode } = appContext;


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


                    Guess each letter from the set of <b>Daydreams.</b><br/><br/>
                    
                    Boost your 🔥 daily streak by winning each day. <br/>Rack up a ⚡ super streak by surviving with all ❤️❤️❤️ hearts intact.<br/><br/>

                    <b>New Daydreams will appear every day!</b><br/><br/>

                    
                    <div className="helpMenu-carousel-container">
                        <div className="helpMenu-carousel-contents">
                            <div class = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_01.png" alt="Example 01"/>
                                apple candle
                            </div>
                            <div class = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_02.png" alt="Example 02"/>
                                mossy soldier statue
                            </div>
                            <div class = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_03.png" alt="Example 03"/>
                                demonic guitar
                            </div>
                            <div class = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_04.png" alt="Example 04"/>
                                futuristic scifi paris
                            </div>

                        </div>

                    </div>


                    <br/><br/>


                    Credits:<br/>
                    Executive Producer<br/>
                    Tyrone Estephan<br/>
                    tyrone@t-da.io<br/>
                    <br/>
                    Game Design & Programming<br/>
                    Sean Simon<br/>
                    @those6faces<br/>
                    <br/>
                    Game Design<br/>
                    Raymond Leung<br/>
                    @raymondleung<br/>
                    <br/>
                    Web Development<br/>
                    Andrew Morton<br/>
                    

                    

                    <br/><br/>
                    {versionCode}

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


                    <i>
                    Created by <a className="helpMenu-link-tda" href="https://www.t-da.io/" target="_blank" rel="noopener noreferrer"><b>T&DA</b></a> <br/><br/>
                    Sean - <a className="helpMenu-link-twitter" href="https://twitter.com/Those6Faces" target="_blank" rel="noopener noreferrer">@thosesixfaces</a><br/>Programming & Art<br/><br/>
                    Ray - <a className="helpMenu-link-twitter" href="https://mobile.twitter.com/raymondleung" target="_blank" rel="noopener noreferrer">@raymondleung</a><br/>Design Touchups<br/>
                    </i>

*/

export default HelpMenu;






