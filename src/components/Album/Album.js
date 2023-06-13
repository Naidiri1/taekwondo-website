import React, { useState } from 'react';
import imgOne from "../../assets/imgs/imgOne.jpg"
import imgTwo from "../../assets/imgs/imgTwo.jpg"
import imgThree from "../../assets/imgs/imgThree.jpg"
import imgFour from "../../assets/imgs/imgFour.jpg"
import imgFive from "../../assets/imgs/imgFive.jpg"
import imgSix from "../../assets/imgs/imgSix.jpg"

const Album = () => {
  const [displayedImages, setDisplayedImages] = useState(3); // Initial number of displayed images
  const album = [
    { imgSrc: imgOne, alt: 'Image 1' },
    { imgSrc: imgTwo, alt: 'Image 1' },
    { imgSrc: imgThree, alt: 'Image 1' },
    { imgSrc: imgFour, alt: 'Image 1' },
    { imgSrc: imgFive, alt: 'Image 1' },
    { imgSrc: imgSix, alt: 'Image 1' },
  
    // Add more images here
  ];

  const handleLoadMore = () => {
    // Increase the number of displayed images by a certain amount
    setDisplayedImages(prevCount => prevCount + 3); // Increase by 3, you can adjust the number as per your requirement
  };

  return (
    <div>
      <div className="album-container">
        <div className="album-content">
          <div className="album-imgs">
            {album.slice(0, displayedImages).map((img, idx) => (
              <AlbumTemplate key={idx} img={img.imgSrc} alt={img.alt} />
            ))}
          </div>
          <div className="images--button">
            {displayedImages < album.length && (
              <button style={{ color: 'black' }} onClick={handleLoadMore}>
                Load more images
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AlbumTemplate = ({ img, alt }) => {
  return (
    <div className="mt-5  d-flex flex-wrap justify-content-center align-items-center" >
  <img src={img} alt={alt} style={{height:"300px", width:"300px", padding:"10px", objectFit:"fill"}}/>
  </div>
  );
};

export default Album;