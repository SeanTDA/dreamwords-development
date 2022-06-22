import React, { useContext }  from 'react';
import { AppContext } from "../../App";


import { analytics } from "../../firebase";
import {logEvent} from "firebase/analytics";



function ShareButton () {

    const appContext = useContext(AppContext);
    const { gameTitle, levelIndex, wrongLetters, superStreak, streak, gameURL, shareButtonClicked, setShareButtonClicked } = appContext;

    const hearts = 3 - wrongLetters.length;



    function getCopyData () {
        let copyData = "";
        copyData += gameTitle + " ";
        copyData += "#" + (levelIndex+1);
        copyData += "\n";
        for (let i = 0; i < 3; i++)
            copyData += hearts > i ? "❤️" : "🖤";
        copyData += "\n";
        copyData += `🔥x${streak} ⚡x${superStreak}`
        copyData += "\n";
        copyData += gameURL;

        return copyData;
    }


    function onShareButtonClicked () {
        navigator.clipboard.writeText(getCopyData());
        setShareButtonClicked(true);

        
        setTimeout(() => {
            setShareButtonClicked(false);
        }, 500);

        logEvent(analytics, "t04_shareButton", "clicked");
    }


    let shareButtonClassName = "shareButton-validation";

    if (shareButtonClicked)
        shareButtonClassName = "shareButton-validation shareButton-validation-appear";

    return (<div>

<div className={shareButtonClassName}> Copied to Clipboard </div>
            <div className="shareButton-outerContainer">
            <div className="shareButton-container" onClick={onShareButtonClicked}>

                <img className="shareButton-icon" src="images/share-icon.svg" alt="Share"/>

                <span className="shareButton-text"> share</span>
                 
            </div>
            </div>



         </div>);



}

export default ShareButton;