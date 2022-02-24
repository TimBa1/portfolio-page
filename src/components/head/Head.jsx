import React from 'react';
import Header from '../Header/Header';
import HeaderWave from '../Header/Header-wave';
import Navbar from '../navbar/Navbar';
import "./Head.css"


function Head() {
  return <div className='home-component'>
        <Navbar/>
        <Header/>
       <HeaderWave />
  </div>;
}

export default Head;
