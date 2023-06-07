import React from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './style.css'
const Maps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAJm-GlFwT_QBWWsnOJ5TzvbKP6y6Pokuc"
    })

    if (!isLoaded) return <div>Loading...</div> 

  return (
    <div className='map--container'>
        <h1 style={{ textAlign: 'center' }}>Location</h1>
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80}}
      mapContainerClassName='map'
    >
      <MarkerF position={{lat: 44, lng: -80}} />
    </GoogleMap>
    </div>
  )
}

export default Maps