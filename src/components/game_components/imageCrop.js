
import { useEffect, useRef } from "react";


/**
 * Renders the 4x4 image as single canvas element cropped
 * Used so responsive slider layout works better
 * @param {} param0 
 * @returns 
 */

const ImageCrop = ({ index, imageUrl, imageSubtitle }) => {

  const canvasRef = useRef();
  const IMAGE_WIDTH = 1792;
  const IMAGE_HEIGHT = 1024;

  useEffect(() => {

    const image = new Image();
    image.onload = function() {
      const x = (index % 2) * IMAGE_WIDTH / 2;
      const y = index > 1 ? IMAGE_HEIGHT / 2 : 0
      const ctx = canvasRef.current.getContext('2d');
      const padding = 5;
      ctx.drawImage(image,
        x+padding, y+padding,   // image start x,y
        (IMAGE_WIDTH / 2) - (padding*2) , (IMAGE_HEIGHT /2) - (padding*2), // image width and height
        0, 0,     // start of canvas
        IMAGE_WIDTH, IMAGE_HEIGHT); // canvas width height
    }
  image.src = imageUrl
   
  }, [imageUrl, index])

  return (
    <div>
    <canvas 
      ref={canvasRef}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      style={{
        width: '100%',
      }}
    />
    <div className = "image-clue-subtitle"> <b> {imageSubtitle} </b> </div>

    </div>
  );
}


export default ImageCrop;