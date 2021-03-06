import React, { useContext } from 'react';
import { AppContext } from "../../../App.js";

import {getSkinKeyboardCapClassName} from "../../../skins.js";


function KeyboardKey({ keyVal, keyState }) {

    const appContext = useContext(AppContext);
    const { onSelectLetter, acceptSelectLetter, gameState, selectedSkin} = appContext;



    const selectLetter = () => {
        onSelectLetter(keyVal);
    }




    let className = "keyboardKey";

    let subclass = "keyboardKey-disabled";
    const skinClassName = getSkinKeyboardCapClassName(selectedSkin.keyboardCap);

    if (keyState === "MISTAKE")
        subclass = skinClassName+"-mistake";

    if (keyState === "CORRECT")
        subclass = skinClassName+"-correct";

    if (keyState === "ENABLED")
        subclass = "keyboardKey-enabled " + skinClassName+"-enabled";


    const isSelected = keyState === "MISTAKE" || keyState === "CORRECT";

    if (isSelected)
        subclass += " keyboardKey-selected";

    if (!acceptSelectLetter && !isSelected)
        subclass = "keyboardKey-waiting-for-input";




    // SKIN

    //className += " " + getSkinKeyboardCapClassName(selectedSkin.keyboardCap); // skin 

    


    className += " " + subclass;



    

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