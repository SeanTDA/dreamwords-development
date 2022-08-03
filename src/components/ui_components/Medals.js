
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


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

    return (

        <div>

            <div className={faderClassName}>

                {!medalsShown ?<div/> : 
                <div> 
                    
                

                    <div className="medals-container">
                        <br/>medals<br/><br/>:)


                        <div className="simple-closeButton-container">
                            <div className="simple-closeButton" onClick={onCloseButtonClicked}>
                                <img src="images/close.svg" alt="Close" />
                            </div>
                        </div>


                    </div>










                </div> 
                }
            </div> 


        </div>

        );
};
export default Medals;