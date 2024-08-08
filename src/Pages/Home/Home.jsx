import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header.jsx'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu.jsx'
import Fbrows from '../../Components/Furniturebrows/Fbrows.jsx'
import Footer from '../../Components/Footer/Footer.jsx'


const Home = () => {

  const [category,setCategory]= useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <Fbrows category={category}/>
    </div>
  )
}

export default Home