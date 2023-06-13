import React from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './style.css'

const Maps = () => {
  return (
    <iframe title='here' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1228262062473!2d-82.50802168865114!3d27.496555334657636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33cf0faa88aa3%3A0x5ddeeebdce44a05b!2s4520%20FL-64%2C%20Bradenton%2C%20FL%2034208!5e0!3m2!1sen!2sus!4v1686585647760!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default Maps