import React from 'react'
import './main.css'
import Header from '../../constants/header/Header'
import NavBar from '../../constants/navbar/NavBar'
import Footer from '../../constants/footer/Footer'

const Main = () => {
  return (
    <>
        <Header />
        <NavBar />
        <div>Main</div>
        <Footer />
    </>
  )
}

export default Main