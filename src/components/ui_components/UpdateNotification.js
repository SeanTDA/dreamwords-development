
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


function UpdateNotification() {

    const appContext = useContext(AppContext);
    const {updateNotificationShown, setUpdateNotificationShown, versionCode} = appContext;


    function onCloseButtonClicked () {
        setUpdateNotificationShown(0);
    }





    return (

        <div>
            {updateNotificationShown ? 
            <div>
                





                <div className="medals-container">

                    <div className="subMenu-header">
                        <div className="subMenu-center"> UPDATE &nbsp;-&nbsp; {versionCode} </div>
                        <div className="subMenu-right"></div>
                    </div>

                    + New Collectable Keycaps!

                    <div className="simple-closeButton-container">
                        <div className="simple-closeButton" onClick={onCloseButtonClicked}>
                            <img src="images/close.svg" alt="Close" />
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