
import { useEffect, useRef } from "react";


/**
 * Renders the 4x4 image as single canvas element cropped
 * Used so responsive slider layout works better
 * @param {} param0 
 * @returns 
 */

const ImageCrop = ({ index, imageUrl, imageSubtitle, zoom = 5, imageClassName, borderRadius}) => {

  const canvasRef = useRef();
  const IMAGE_WIDTH = 1792;
  const IMAGE_HEIGHT = 1024;

  useEffect(() => {

    const image = new Image();
    image.onload = function() {
      const x = (index % 2) * IMAGE_WIDTH / 2;
      const y = index > 1 ? IMAGE_HEIGHT / 2 : 0
      const ctx = canvasRef.current.getContext('2d');
      ctx.drawImage(image,
        x+zoom, y+zoom,   // image start x,y
        (IMAGE_WIDTH / 2) - (zoom*2) , (IMAGE_HEIGHT /2) - (zoom*2), // image width and height
        0, 0,     // start of canvas
        IMAGE_WIDTH, IMAGE_HEIGHT); // canvas width height
    }
  image.src = imageUrl
   
  }, [imageUrl, index])

  return (
    <div>
      <div className = {imageClassName}>
        <canvas 
          ref={canvasRef}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          style={{
            width: '99%',
            "borderRadius": borderRadius+'px'
          }}
        />
      </div>
    <div className = "image-clue-subtitle"> <b> {imageSubtitle} </b> </div>

    </div>
  );
}


export default ImageCrop;