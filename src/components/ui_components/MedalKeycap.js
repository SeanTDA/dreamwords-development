
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


function MedalKeycap({keycap, percent}) {

    const appContext = useContext(AppContext);
    const { selectedKeycap, setSelectedKeycap, onSelectKeycap, setMedalsShown } = appContext;

    console.log("selection: " + JSON.stringify(selectedKeycap));

    var isSelected = selectedKeycap === keycap;



    function onButtonClicked () {
        console.log("selected: " + keycap + "  ===== FIX not immediate");
        onSelectKeycap(keycap);    // saves it to data
        setMedalsShown(0);
    }


    

    if (percent < 1) {
        // locked
        return (<div> {keycap} locked at {percent*100}%    {isSelected?"SELECTED":"NOT SELECTED"} </div>)
    }



    return (<div onClick={onButtonClicked}> {keycap} {isSelected?"SELECTED":"NOT SELECTED"} </div> );

};



export default MedalKeycap;