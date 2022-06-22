import React, {useContext} from 'react';
import {AppContext} from "../../App"; 
import ImageCrop from './imageCrop';
import useWindowSize from '../../hooks/useWindowSize';
import Slider from "react-slick";

function ImageClue () {

    const { width } = useWindowSize();
    const appContext = useContext(AppContext);
    const {levelData} = appContext;
    
    const isMobile = width < 390

    return (
        <div className='image-clue'>
            {isMobile ?
                <Slider autoplay={true} dots={true} arrows={false}>
                    <ImageCrop index={0} imageUrl={levelData.imageURL} />
                    <ImageCrop index={1} imageUrl={levelData.imageURL} />
                    <ImageCrop index={2} imageUrl={levelData.imageURL} />
                    <ImageCrop index={3} imageUrl={levelData.imageURL} />
                </Slider>
            :   <img src={levelData.imageURL} alt="Generated clue" />}

        </div>
    );
}

export default ImageClue;