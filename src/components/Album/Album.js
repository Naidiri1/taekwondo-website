import React, { useState } from 'react';
import "./style.css"
import { 
  img1, img2, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19 } from "../../assets/imgs/albumPhotos"

const Album = () => {
  const [displayedImages, setDisplayedImages] = useState(3); // Initial number of displayed images
  const album = [
    { imgSrc: img1, alt: 'Image 1' },
    { imgSrc: img2, alt: 'Image 1' },
    { imgSrc: img4, alt: 'Image 1' },
    { imgSrc: img5, alt: 'Image 1' },
    { imgSrc: img6, alt: 'Image 1' },
    { imgSrc: img7, alt: 'Image 1' },
    { imgSrc: img8, alt: 'Image 1' },
    { imgSrc: img9, alt: 'Image 1' },
    { imgSrc: img10, alt: 'Image 1' },
    { imgSrc: img11, alt: 'Image 1' },
    { imgSrc: img12, alt: 'Image 1' },
    { imgSrc: img13, alt: 'Image 1' },
    { imgSrc: img14, alt: 'Image 1' },
    { imgSrc: img15, alt: 'Image 1' },
    { imgSrc: img16, alt: 'Image 1' },
    { imgSrc: img17, alt: 'Image 1' },
    { imgSrc: img18, alt: 'Image 1' },
    { imgSrc: img19, alt: 'Image 1' }
  
    // Add more images here
  ];

  const handleLoadMore = () => {
    // Increase the number of displayed images by a certain amount
    setDisplayedImages(prevCount => prevCount + 3); // Increase by 3, you can adjust the number as per your requirement
  };

  return (
    <div className="album-imgs">
      <div className="album-container">
        <div className="album-content">
          <div className="album-imgs">
            {album.slice(0, displayedImages).map((img, idx) => (
              <AlbumTemplate key={idx} img={img.imgSrc} alt={img.alt} />
            ))}
          </div>
          <div>
            {displayedImages < album.length && (
              <button className='album--btn' onClick={handleLoadMore}>
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
  <img src={img} alt={alt} style={{height:"350px", width:"400px", padding:"10px", objectFit:"fill"}}/>
  </div>
  );
};

export default Album;