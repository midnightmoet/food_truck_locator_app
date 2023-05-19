import React from 'react'
import Header from '../../constants/header/Header'
import Backbutton from '../../constants/backbutton/BackButton'
import Footer from '../../constants/footer/Footer'
import './other.css'

const Other = () => {
  return (
    <>
      <div className='other-container'>
      <Header />
        <h1>Thanks!</h1>
        <p>This function is a work in progress.  Check back for further updates and additions</p>
      <Backbutton />
      <Footer />
      </div>
    </>
  )
}

export default Other