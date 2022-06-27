import React, {useContext} from 'react';
import Slider from "react-slick";
import {AppContext} from "../../App"; 
import ImageCrop from './imageCrop';


function ImageClue () {

    const appContext = useContext(AppContext);
    const {levelData, pressedLetters, wrongLetters } = appContext;
    
    return (
        <div className={wrongLetters.length === 0 ? "image-clue" :   (wrongLetters.length === 1 ? "image-clue image-clue-hurt-1" : (wrongLetters.length === 2 ? "image-clue image-clue-hurt-2" : "image-clue image-clue-hurt-3" )  )}     >
            <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3800}>
                { pressedLetters.length >= 0 ? <ImageCrop index={0} imageUrl={levelData.imageURL} zoom={5} /> : null}
                { pressedLetters.length >= 0 ? <ImageCrop index={1} imageUrl={levelData.imageURL} zoom={5} /> : null}
                { pressedLetters.length >= 0 ? <ImageCrop index={2} imageUrl={levelData.imageURL} zoom={5} /> : null}
                { pressedLetters.length >= 0 ? <ImageCrop index={3} imageUrl={levelData.imageURL} zoom={5} /> : null}
            </Slider>


        </div>
    );
}

export default ImageClue;
