import React from 'react'
import Header from '../../constants/header/Header';
import NavBar from '../../constants/navbar/NavBar';
import Footer from '../../constants/footer/Footer';
import ActualMap from '../../constants/map/ActualMap';
import SearchBox from '../../constants/searchbox/SearchBox';


const Homepage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div></div>
      <ActualMap />
      <SearchBox />
      <Footer />
    </>
  )
}

export default Homepage