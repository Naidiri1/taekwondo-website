import React from 'react'
import './style.css'

const Maps = () => {

  return (
    <iframe 
    title='here' 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23808.710978024268!2d-82.51524504472886!3d27.494588400839802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33cf2f6f408bb%3A0x4c5d649f8601b722!2sHwa%20Rang%20Traditional%20TaeKwon-Do%20Center!5e0!3m2!1sen!2sus!4v1687892246477!5m2!1sen!2sus"
    allowFullScreen=""
    id='google--map' 
    icon='blue'
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default Maps

