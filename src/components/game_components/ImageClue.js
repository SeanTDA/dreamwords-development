import React, {useContext} from 'react';
import Slider from "react-slick";
import {AppContext} from "../../App"; 
import ImageCrop from './imageCrop';


function ImageClue () {

    const appContext = useContext(AppContext);
    const {levelData, pressedLetters, wrongLetters, selectedKeycap, todayIndex } = appContext;
    
    


   // let res = [3072, 2048];

   //   if (todayIndex < 195) {
    let  res = [1536,1024];
   //   } // phase out



    let imagesToShow = ["1","2","3","4"];
    if (levelData.imageCount !== undefined) 
        imagesToShow = (levelData.imageCount).split(" ");
    
    

    let imageClueClassName = "image-clue";

    if (selectedKeycap === "GOLD") imageClueClassName += " image-clue-harry-gold"

    
    return (
        <div className={imageClueClassName}>
            <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3800}>
                { pressedLetters.length >= 0 && imagesToShow.includes("1") ? <ImageCrop index={0} resolution={res} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
                { pressedLetters.length >= 0 && imagesToShow.includes("2")? <ImageCrop index={1} resolution={res} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
                { pressedLetters.length >= 0 && imagesToShow.includes("3") ? <ImageCrop index={2} resolution={res} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
                { pressedLetters.length >= 0 && imagesToShow.includes("4") ? <ImageCrop index={3} resolution={res} imageUrl={levelData.imageURL} zoom={5}  borderRadius="20" /> : null}
            </Slider>


        </div>
    );
}

export default ImageClue;
