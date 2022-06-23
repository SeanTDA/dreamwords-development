import React, {useContext} from 'react';
import Slider from "react-slick";
import {AppContext} from "../../App"; 
import ImageCrop from './imageCrop';
import useWindowSize from '../../hooks/useWindowSize';

function ImageClue () {

    const { width } = useWindowSize();
    const appContext = useContext(AppContext);
    const {levelData} = appContext;
    
    return (
        <div className='image-clue'>
            <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={4200}>
                <ImageCrop index={0} imageUrl={levelData.imageURL} />
                <ImageCrop index={1} imageUrl={levelData.imageURL} />
                <ImageCrop index={2} imageUrl={levelData.imageURL} />
                <ImageCrop index={3} imageUrl={levelData.imageURL} />
            </Slider>
        </div>
    );
}

export default ImageClue;