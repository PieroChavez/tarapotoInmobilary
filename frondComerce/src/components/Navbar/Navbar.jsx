/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]= useState('menu');
    
    const {getTotalCartAmount}=useContext(StoreContext);


  return (
    <div className='navbar'>
        <Link to='/'><h1>BARISTA </h1></Link>
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <ul className="navbar-menu">
            <Link to= '/' onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home                </Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu                </a>
            <a href='#app-download' onClick={()=>setMenu("movile-app")}className={menu==="movile-app"?"active":""}>Movile  </a>
            <a href='#footer' onClick={()=>setMenu("contac-us")}className={menu==="contac-us"?"active":""}>Contacto  </a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="searh" />
            <div className="nav-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                <div className={getTotalCartAmount() ===0?"":"dot"}>                 </div>
            </div>
            <button onClick={()=>setShowLogin(true)}> <p className='iniciar'>INICIAR</p> </button>
            
        </div>       
      
    </div>
  )
}

export default Navbar
