
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


import {getKeycapUnlockProgress} from "../../skins.js";
import MedalKeycap from './MedalKeycap.js';

function Medals() {

    const appContext = useContext(AppContext);
    const { medalsShown, setMedalsShown } = appContext;


    function onCloseButtonClicked () {
        setMedalsShown(0);
    }


    
    let faderClassName = "medals-fader";

    if (medalsShown) {
        faderClassName += " medals-fader-active";
    }







    var keycapDefaultUnlockProgress = getKeycapUnlockProgress("NONE");
    var keycapStripeUnlockProgress = getKeycapUnlockProgress("STRIPE");



    return (

        <div>

            <div className={faderClassName}>

                {!medalsShown ?<div/> : 
                <div> 
                    
                

                    <div className="medals-container">



                        <div className="simple-closeButton-container">
                            <div className="simple-closeButton" onClick={onCloseButtonClicked}>
                                <img src="images/close.svg" alt="Close" />
                            </div>
                        </div>


                        <MedalKeycap keycap="NONE" percent={keycapDefaultUnlockProgress}/>
                        <MedalKeycap keycap="STRIPE" percent={keycapStripeUnlockProgress}/>



                    </div>










                </div> 
                }
            </div> 


        </div>

        );
};


export default Medals;