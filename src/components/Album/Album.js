import React, { useState } from 'react';
import "./style.css"
import img1 from "../../assets/imgs/img1.jpg"
import img2 from "../../assets/imgs/img2.jpg"
import img4 from "../../assets/imgs/img4.jpg"
import img5 from "../../assets/imgs/img5.jpg"
import img6 from "../../assets/imgs/img6.jpg"
import img7 from "../../assets/imgs/img7.jpg"
import img8 from "../../assets/imgs/img8.jpg"
import img9 from "../../assets/imgs/img9.jpg"
import img10 from "../../assets/imgs/img10.jpg"
import img11 from "../../assets/imgs/img11.jpg"
import img12 from "../../assets/imgs/img12.jpg"
import img13 from "../../assets/imgs/img13.jpg"
import img14 from "../../assets/imgs/img14.jpg"
import img15 from "../../assets/imgs/img15.jpg"
import img16 from "../../assets/imgs/img16.jpg"
import img17 from "../../assets/imgs/img17.jpg"
import img18 from "../../assets/imgs/img18.jpg"
import img19 from "../../assets/imgs/img19.jpg"

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