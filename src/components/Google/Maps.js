import React from 'react'
import './style.css'

const Maps = () => {
  return (
    <iframe 
    title='here' 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56620.71325115839!2d-82.52922311554632!3d27.506763362660962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33cf0faa88aa3%3A0x5ddeeebdce44a05b!2s4520%20FL-64%2C%20Bradenton%2C%20FL%2034208!5e0!3m2!1sen!2sus!4v1687723332763!5m2!1sen!2sus" 
    allowFullScreen=""
    id='google--map' 
    icon='blue'
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default Maps

