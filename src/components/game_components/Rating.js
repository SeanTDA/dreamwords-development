import React, { useContext }  from 'react';
import { AppContext } from "../../App";


function Rating () {

    const appContext = useContext(AppContext);
    const { wrongLetters } = appContext;

    const hearts = 3 - wrongLetters.length;



    return (
    
        <div> 
        
        {hearts}/3<br/>
        
        
        </div>
         
         
         );
}

export default Rating;