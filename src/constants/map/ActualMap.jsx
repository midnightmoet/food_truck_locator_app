import React from 'react'
import './map.css'

const ActualMap = () => {
  return (
    <div className='map'>
      <h1>Map</h1>
      <p>Let's find something good to eat:</p>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d100940.338157889!2d-122.52000171730329!3d37.757556574580484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfood%20trucks!5e0!3m2!1sen!2sus!4v1684286234536!5m2!1sen!2sus"
				width="400"
				height="450"
        className='map-actual'
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
    </div>
  )
}

export default ActualMap