import React from 'react'
import './map.css'

const Map = () => {
  return (
    <div className='map'>
      <h1>Map</h1>
      <p>Let's find something good to eat:</p>
      <iframe

        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.630742821737!2d-73.986884684593!3d40.756054979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1

        !3m3!1m2!1s0x89c259a6d5c5e6d7%3A0x9b0b9b0b9b0b9b0b!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1629788518800!5m2!1sen!2sus"

        width="500"

        height="450"

        className='map-actual'

        allowfullscreen=""

        loading="lazy"

      ></iframe>
    </div>
  )
}

export default Map