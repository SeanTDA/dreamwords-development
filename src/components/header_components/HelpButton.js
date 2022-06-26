

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";



function HelpButton() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown } = appContext;

    
    function onButtonClicked () {
        setHelpMenuShown(1);
    }

    return (
        <div className = "header-helpMenuButton" onClick={onButtonClicked}>
                <img src="images/help.svg" alt="Help"/>
        </div>
    );
}

export default HelpButton;