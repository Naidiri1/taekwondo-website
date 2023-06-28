import React from 'react'
import "./style.css"


const Banner = (props) => {

  const {
    bannerPhoto,
    bannerText
  } = props

  console.log(bannerPhoto, "here")
  return (
    <div style={{ position: "relative"}} id="courses">
    <img
      src={bannerPhoto}
      alt="logo"
      style={{
        marginTop: "5%",
        height: "170px",
        width: "100%",
        objectFit: "cover",
        filter: 'grayscale(100%)',
        opacity: "0.5"
      }}
    />
      <div className="banner--text">{bannerText}</div>
  </div>
  )
}

export default Banner