import React, {useContext} from 'react';
import Slider from "react-slick";
import {AppContext} from "../../App"; 
import ImageCrop from './imageCrop';


function ImageClue () {

    const appContext = useContext(AppContext);
    const {levelData, pressedLetters, wrongLetters } = appContext;

    let imagesToShow = ["1","2","3","4"];
    if (levelData.imageCount !== undefined) 
        imagesToShow = (levelData.imageCount).split(" ");
    
    
    
    return (
        <div className="image-clue">
            <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3800}>
                { pressedLetters.length >= 0 && imagesToShow.includes("1") ? <ImageCrop index={0} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
                { pressedLetters.length >= 0 && imagesToShow.includes("2")? <ImageCrop index={1} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
                { pressedLetters.length >= 0 && imagesToShow.includes("3") ? <ImageCrop index={2} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
                { pressedLetters.length >= 0 && imagesToShow.includes("4") ? <ImageCrop index={3} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
            </Slider>


        </div>
    );
}

export default ImageClue;
