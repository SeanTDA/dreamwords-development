import React, { useContext }  from 'react';
import { AppContext } from "../../App";


import { analytics } from "../../firebase";
import {logEvent} from "firebase/analytics";

import {getHighestStreak, getHighestSuperStreak} from "../../historyHelper";


function ShareButton () {

    const appContext = useContext(AppContext);
    const { levelIndex, wrongLetters, superStreak, streak, shareButtonClicked, setShareButtonClicked, history  } = appContext;

    const hearts = 3 - wrongLetters.length;




    function wordOrderValueToEmoji (wordOrderValue) {
        return ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"][wordOrderValue-1];
    }

    function wordOrderToEmojis (wordOrder) {
        let emojis = "";
        for (var i = 0; i < wordOrder.length; i++)
            emojis += wordOrderValueToEmoji(wordOrder[i]);
        return emojis;
    } 


    function getCopyData () {
        
        var highestStreak = getHighestStreak(history);
        var highestSuperStreak = getHighestSuperStreak(history);


        if (streak > highestStreak) highestStreak = streak;
        if (superStreak > highestSuperStreak) highestSuperStreak = superStreak;

        let copyData = "";
        copyData += "Daydreams.ai ";
        copyData += "#" + (levelIndex+1);
        copyData += "\n";
        for (let i = 0; i < 3; i++)
            copyData += hearts > i ? "❤️" : "🖤";
        copyData += "\n";
        copyData += `🔥x${streak} [${highestStreak}]\n🏆x${superStreak} [${highestSuperStreak}]`


        return copyData;
    }



    function onShareButtonClicked () {

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            
            navigator.clipboard.writeText(getCopyData());
            setShareButtonClicked(true);
            setTimeout(() => {
                setShareButtonClicked(false);
            }, 500);

            setTimeout(() => {
                navigator.share({title:"Daydreams", text: getCopyData()});
            }, 300);

        } else {
            navigator.clipboard.writeText(getCopyData());
            setShareButtonClicked(true);
            setTimeout(() => {
                setShareButtonClicked(false);
            }, 500);
        }


        logEvent(analytics, "shareButton", "clicked");
    }


    let shareButtonClassName = "shareButton-validation";

    if (shareButtonClicked)
        shareButtonClassName = "shareButton-validation shareButton-validation-appear";

    return (<div>

        <div className="shareButton-validation-container"><div className={shareButtonClassName}> 📋 COPIED </div> </div>
            <div className="shareButton-outerContainer">
                <div className="shareButton-container" onClick={onShareButtonClicked}>

                    <img className="shareButton-icon" src="images/share-icon.svg" alt="Share"/>
                    <span className="shareButton-text"> SHARE</span>
                    
                </div>
            </div>



         </div>);



}

export default ShareButton;