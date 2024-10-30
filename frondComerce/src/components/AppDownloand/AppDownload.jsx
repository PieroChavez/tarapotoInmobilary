import React from 'react'
import '../AppDownloand/AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Para mejorar la experiencian descarga <br /> BarisatasApp</p>
      <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" /> 
      </div>
    </div>
  )
}

export default AppDownload
