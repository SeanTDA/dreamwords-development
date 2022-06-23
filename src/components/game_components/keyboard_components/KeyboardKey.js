import React, { useContext } from 'react';
import { AppContext } from "../../../App.js";

function KeyboardKey({ keyVal, keyState }) {

    const appContext = useContext(AppContext);
    const { onSelectLetter, acceptSelectLetter, gameState } = appContext;



    const selectLetter = () => {
        onSelectLetter(keyVal);
    }

    let className = "keyboardKey";

    let subclass = "keyboardKey-disabled";

    if (keyState === "MISTAKE")
        subclass = " keyboardKey-mistake";

    if (keyState === "CORRECT")
        subclass = " keyboardKey-correct";

    if (keyState === "ENABLED")
        subclass = " keyboardKey-enabled";


    const isSelected = keyState === "MISTAKE" || keyState === "CORRECT";

    if (isSelected)
        subclass += " keyboardKey-selected";

    if (!acceptSelectLetter && !isSelected)
        subclass = " keyboardKey-waiting-for-input";

    className += subclass;

    if (gameState === "RUNNING" || gameState === "GAME_LOST" || gameState === "GAME_WON") {

        return (
            <div className={className} onClick={selectLetter}>
                {keyVal}
    
            </div>);
    } else {
        return (<div/>);
    }



}

export default KeyboardKey;