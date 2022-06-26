

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";

import Slider from "react-slick";
import ImageCrop from '../game_components/imageCrop';

import useCollapse from 'react-collapsed';


function HelpMenu() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown, helpMenuShown, versionCode, levelIndex } = appContext;
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();


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

                        <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3200}>
                            <ImageCrop index={0} imageUrl={"images/examples.png"} imageSubtitle ="APPL_ CANDL_" imageClassName = "helpMenu-carousel-image" />
                            <ImageCrop index={1} imageUrl={"images/examples.png"} imageSubtitle ="_OSSY SOL_IER ST_TUE" imageClassName = "helpMenu-carousel-image"/>
                            <ImageCrop index={2} imageUrl={"images/examples.png"} imageSubtitle ="DEMON_C GU_TAR" imageClassName = "helpMenu-carousel-image"/>
                            <ImageCrop index={3} imageUrl={"images/examples.png"} imageSubtitle ="FU_URIS_IC SCIFI P_RIS" imageClassName = "helpMenu-carousel-image"/>
                        </Slider>

                    </div>

                    <br/>
                    <br/>

                    <div className = "helpMenu-credits">
                        <div className = "helpMenu-credits-header" {...getToggleProps()}>
                            <b>{isExpanded ? "- CREDITS" : "+ CREDITS"}</b>
                        </div>

                        <div {...getCollapseProps()}>
                            <div className="helpMenu-credits-body">


                            <br/>
                            <b>Game Design & Programming</b><br/>
                            Sean Simon<br/>
                            <a id="twitter" className="helpMenu-hyperlink" href="https://twitter.com/Those6Faces" target="_blank" rel="noopener noreferrer"><b>@thosesixfaces</b></a><br/>
                            <br/>
                            <b>Game Design</b><br/>
                            Raymond Leung<br/>
                            <a id="twitter" className="helpMenu-hyperlink" href="https://twitter.com/raymondleung" target="_blank" rel="noopener noreferrer"><b>@raymondleung</b></a><br/>
                            <br/>
                            <b>Executive Producer</b><br/>
                            Tyrone Estephan<br/>
                            <a id="email" className="helpMenu-hyperlink" href="mailto:tyrone@t-da.io" target="_blank" rel="noopener noreferrer"><b>tyrone@t-da.io</b></a><br/>
                            <br/>
                            <b>Web Development</b><br/>
                            Andrew Morton<br/>
                            <br/>



                            </div>
                        </div>


                    </div>
                    <br/>
                    <br/>
                    Day {levelIndex+1}&nbsp;&nbsp;&nbsp;v{versionCode}
                    </div>

                    </div> 


                </div>


                
                <div className="helpMenu-closeButton-container">
                    <div className = "helpMenu-closeButton" onClick={onButtonClicked}> 
                        <img src="images/close.svg" alt="Close"/>
                    </div>
                </div>

                </div>:<div/>
            }
            </div>
        </div>
    );
}


export default HelpMenu;






