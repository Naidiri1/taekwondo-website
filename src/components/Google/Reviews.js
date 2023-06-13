import React, { useEffect, useState } from 'react'
import { ElfsightWidget } from 'react-elfsight-widget';

const Reviews = () => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1 style={{marginTop: "5rem"}}>Reviews</h1>
      <ElfsightWidget  class="elfsight-app-9fd2d85c-3648-4136-809e-1d68535f49ae" />
    </div>
  )
}

export default Reviews