import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../login/LoginForm'
import Signup from '../signup/Signup';
import Header from '../../constants/header/Header';
import NavBar from '../../constants/navbar/NavBar';
import Map from '../../constants/map/Map';
import Footer from '../../constants/footer/Footer';


const Homepage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div></div>
      <Map />
      <Footer />
    </>
  )
}

export default Homepage