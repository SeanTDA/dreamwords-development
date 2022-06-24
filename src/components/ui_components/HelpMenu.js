

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";

import Slider from "react-slick";
import ImageCrop from '../game_components/imageCrop';


function HelpMenu() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown, helpMenuShown, versionCode, levelData } = appContext;


    function onButtonClicked () {
        setHelpMenuShown(0);
    }

    const isHelpMenuShown = helpMenuShown === 1;


    let faderClassName = "helpMenu-fader";

    if (isHelpMenuShown) {
        faderClassName += " helpMenu-fader-active";
    }
    
    console.log("!! " + levelData.imageURL);

    return (
        <div>

            <div className={faderClassName}> 

            {isHelpMenuShown ? 

            <div>



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
                    
                    Boost your 🔥 daily streak by winning each day. <br/><br/>Rack up a 🏆 super streak by surviving with all ❤️❤️❤️ hearts intact.<br/><br/>

                    <b>New Daydreams will appear every day!</b><br/><br/>

                    

                    <div className="helpMenu-carousel-container">

                        <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={4200}>
                            <ImageCrop index={0} imageUrl={"images/examples.png"} imageSubtitle ="APPLE CANDLE" />
                            <ImageCrop index={1} imageUrl={"images/examples.png"} imageSubtitle ="MOSSY SOLDIER STATUE" />
                            <ImageCrop index={2} imageUrl={"images/examples.png"} imageSubtitle ="DEMONIC GUITAR" />
                            <ImageCrop index={3} imageUrl={"images/examples.png"} imageSubtitle ="FUTURISTIC SCIFI PARIS" />
                        </Slider>

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


                <div className = "helpMenu-closeButton-container">
                <div className = "helpMenu-closeButton" onClick={onButtonClicked}> 
                                X
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


                        <div className="helpMenu-carousel-contents">
                            <div className = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_01.png" alt="Example 01"/>
                                apple candle
                            </div>
                            <div className = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_02.png" alt="Example 02"/>
                                mossy soldier statue
                            </div>
                            <div className = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_03.png" alt="Example 03"/>
                                demonic guitar
                            </div>
                            <div className = "helpMenu-carousel-image-outer">
                                <img className="helpMenu-carousel-image" src="images/example_04.png" alt="Example 04"/>
                                futuristic scifi paris
                            </div>
                        </div>
                    </div>

                    */


/*


                    <i>
                    Created by <a className="helpMenu-link-tda" href="https://www.t-da.io/" target="_blank" rel="noopener noreferrer"><b>T&DA</b></a> <br/><br/>
                    Sean - <a className="helpMenu-link-twitter" href="https://twitter.com/Those6Faces" target="_blank" rel="noopener noreferrer">@thosesixfaces</a><br/>Programming & Art<br/><br/>
                    Ray - <a className="helpMenu-link-twitter" href="https://mobile.twitter.com/raymondleung" target="_blank" rel="noopener noreferrer">@raymondleung</a><br/>Design Touchups<br/>
                    </i>

*/

export default HelpMenu;






