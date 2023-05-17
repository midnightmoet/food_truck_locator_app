import React from 'react'
import Header from '../../constants/header/Header';
import NavBar from '../../constants/navbar/NavBar';
import Footer from '../../constants/footer/Footer';
import ActualMap from '../../constants/map/ActualMap';


const Homepage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div></div>
      <ActualMap />
      <Footer />
    </>
  )
}

export default Homepage