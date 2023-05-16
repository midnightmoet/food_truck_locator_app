import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from '../../constants/header/Header'
import NavBar from '../../constants/navbar/NavBar'
import Map from '../../constants/map/Map'
import Footer from '../../constants/footer/Footer'
import LoginForm from '../login/LoginForm'

const Homepage = () => {
  return (
    <> 
    {/* <Header /> */}
    {/* <NavBar />   */}
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/login" element={<LoginForm></LoginForm>} />

      </Routes>
    </BrowserRouter>
    </div>
    
    {/* <Map /> */}
    {/* <Footer /> */}
  </>
  )
}

export default Homepage