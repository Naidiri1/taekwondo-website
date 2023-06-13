import React from 'react'
import Maps from './Maps'
import Reviews from './Reviews'
import './style.css'

const Google = () => {
  return (
    <div className='google--container'>
    <Maps />
    <Reviews />
    </div>
  )
}

export default Google