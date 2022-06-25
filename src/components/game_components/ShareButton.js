import React, { useContext }  from 'react';
import { AppContext } from "../../App";


import { analytics } from "../../firebase";
import {logEvent} from "firebase/analytics";

import src from '../../images/share-icon.svg';

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
        copyData += `🔥x${streak} 🏆x${superStreak}`
        copyData += "\n";
        copyData += gameURL;

        return copyData;
    }



    function onShareButtonClicked () {

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            navigator.share({title:"Daydreams", text: getCopyData(), url: gameURL});
        } else {
            navigator.clipboard.writeText(getCopyData());
            setShareButtonClicked(true);
            setTimeout(() => {
                setShareButtonClicked(false);
            }, 500);
        }


        logEvent(analytics, "t04_shareButton", "clicked");
    }


    let shareButtonClassName = "shareButton-validation";

    if (shareButtonClicked)
        shareButtonClassName = "shareButton-validation shareButton-validation-appear";

    return (<div>

<div className={shareButtonClassName}> Copied to Clipboard </div>
            <div className="shareButton-outerContainer">
            <div className="shareButton-container" onClick={onShareButtonClicked}>

                <img className="shareButton-icon" src={src} alt="Share"/>

                <span className="shareButton-text"> SHARE</span>
                 
            </div>
            </div>



         </div>);



}

export default ShareButton;