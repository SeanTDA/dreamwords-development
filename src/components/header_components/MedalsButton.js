

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";



function MedalsButton() {

    const appContext = useContext(AppContext);
    const { medalsShown, setMedalsShown } = appContext;


    function onButtonClicked () {
        setMedalsShown(!medalsShown);        
    }

    return (
        <div className = "header-medalsButton" onClick={onButtonClicked}>
            <div className="header-medalsButton-symbol">
            ⭐
            </div>
        </div>
    );
}

export default MedalsButton;