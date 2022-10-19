
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


function UpdateNotification() {

    const appContext = useContext(AppContext);
    const {updateNotificationShown, setUpdateNotificationShown, versionCode} = appContext;


    function onCloseButtonClicked () {
        setUpdateNotificationShown(0);
    }


    var showNotification = updateNotificationShown;

   // showNotification = true; // remove


    let faderClassName = "update-notification-fader";
    if (showNotification) {
        faderClassName += " update-notification-fader-active";
    }


    return (

        <div>
            {showNotification ? 
            <div>
                
                <div className={faderClassName}>


                <div className="update-notification-container">

                    <div className="subMenu-header">
                        <div className="subMenu-center"> UPDATE &nbsp;|&nbsp; v{versionCode} </div>
                        <div className="subMenu-right"></div>
                    </div>
                    
                    <div className="update-notification-notes">
                        + New Keycap for 100 wins<br/>

                    </div>


                    <div className="simple-closeButton-container">
                        <div className="simple-closeButton" onClick={onCloseButtonClicked}>
                            <img src="images/close.svg" alt="Close" />
                        </div>
                    </div>


                    </div>




                    </div> 




            </div> 
            : 
            <div/>
            }
        </div>



        );
};


export default UpdateNotification;