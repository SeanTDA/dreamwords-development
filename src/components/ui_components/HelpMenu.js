

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";



function HelpMenu() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown, helpMenuShown } = appContext;


    function onButtonClicked () {
        setHelpMenuShown(0);
    }

    const isHelpMenuShown = helpMenuShown === 1;


    let faderClassName = "helpMenu-fader";

    if (isHelpMenuShown) {
        faderClassName += " helpMenu-fader-active";
    }
    

    return (
        <div>

            <div className={faderClassName}> 

            {isHelpMenuShown ? 

            <div>

                <div className = "helpMenu-closeButton" onClick={onButtonClicked}> 
                X
                </div>

                <div className="helpMenu-container">
                <div className = "helpMenu-contents">
                    <div className = "helpMenu-header"> 
                        <div className="helpMenu-center">
                            HOW TO PLAY
                        </div>

                        <div className="helpMenu-right">

                        </div>
                    </div>
                    <div className = "helpMenu-guide"> 

                        dssssssssdsgjkafk ldgkjlafdlhjlkadf lkjhakldfhk lakjd lfh dsagjhjkafdhj fkdjshjklsfkljhd fdshksdfh
                        12 2389582309658 239085982309862438906 406389469803490798 42848290 547457 23879059293065
                        askjfkjladsfgljajfkd jalkfdhkalkfdhklakjlfdh kjadfvnafdnmkbafdhnjlk jlkfdkjlafdhakldfhlkjadkjlhg aklfdhkj
                        890438699834 39046098346908908340986 98034968039486980908357809 39069083409869834966750 6508-056890-

                    </div>

                    </div> 


                </div>
                </div>

            
                :
                <div/>

            }
            
            </div>


        </div>

    );
}



/*


*/

export default HelpMenu;






