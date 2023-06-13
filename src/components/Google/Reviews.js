import React, { useEffect, useState } from 'react'

const Reviews = () => {


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(``);

        const data = await response.json()
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchReviews()
  },[])


  return (
    <div>
      <h1>Reviews</h1>
    </div>
  )
}

export default Reviews