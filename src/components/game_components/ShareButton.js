import React, { useContext }  from 'react';
import { AppContext } from "../../App";




function ShareButton () {

    const appContext = useContext(AppContext);
    const { gameTitle, levelIndex, wrongLetters, superStreak, streak, gameURL } = appContext;

    const hearts = 3 - wrongLetters.length;


    function getCopyData () {
        let copyData = "";
        copyData += gameTitle + " ";
        copyData += "#" + (levelIndex+1);
        copyData += "\n";
        for (let i = 0; i < 3; i++)
            copyData += hearts > i ? "❤️" : "🖤";
        copyData += "\n";
        copyData += "🔥x"+streak + " " + "⚡x"+superStreak;
        copyData += "\n";
        copyData += gameURL;

        return copyData;
    }


    function onShareButtonClicked () {
        navigator.clipboard.writeText(getCopyData());
    }

    return (<div>
        
        <button onClick={onShareButtonClicked}>
         Share Button 
         </button>

         </div>);



}

export default ShareButton;