// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header'
import ExplorerMenu from '../../components/ExplorerMenu/ExplorerMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownloand/AppDownload'



const Home = () => {
    const[category,setCategory]= useState('All')
  return (
    <div className='home'>
      <Header/>
      <ExplorerMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
