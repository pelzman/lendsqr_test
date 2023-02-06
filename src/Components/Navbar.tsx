import React from 'react'
import Notification from '../assets/images/notification.png'
import Logo from '../assets/images/Group.svg'
import Search from '../assets/images/search.png'
import Image from  '../assets/images/image.png'
import './navbar.scss'
// import { Button } from 'antd';
// import 'antd/dist/reset.css'; 


export const Navbar = () => {
  return (
    <>
<div className='Navbar'>
        <div className=' nav-logo'>
        <img src={Logo} alt="" width='144.76px' height="30px" style={{marginLeft:"25px",marginTop:"10px" }}/>
        </div>
      <div className='search-bar'>
       <input type="text" />
       <div className='search-btn'>
        <img src={Search} alt="" className='input-img' />
       </div>
      </div>
       <nav className='nav-item'>
        <ul className='nav-list'>
         <li><a href=''>Docs</a></li>
        </ul>
       </nav>
       <div className='notify'>
        <img src={Notification} alt="" />
       </div>
       <div className='user-container'>
        <img src={Image} className='user-img'/>
        <p>Adedeji</p>
       </div>
       
    </div>

   
    </>
  )
}
