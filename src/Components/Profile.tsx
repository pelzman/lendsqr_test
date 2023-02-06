import React from 'react'
import { Link } from 'react-router-dom'
import Back  from '../assets/images/back.png'
import ProfileImg from '../assets/images/profileImg.png'
import Tier1 from '../assets/images/tier1.png'
import Tier2 from '../assets/images/tier2.png'
import './profile.scss'
const Profile = () => {

let activeStyle={
  color:'#00B7AF',
  
 }
  return (
    <div className='profile'>
 <div className='profile-nav'>
  <Link to='/user'><img src={Back} alt=""  /></Link> 
            Back to Users
          </div> 

        <div className='profile-head'>
          <h2 className='user-detail'>User Details</h2>
          <div className='profile-btns'>
            <button className='blacklist-btn'>Blacklist User</button>
            <button className='activate-btn'>Activate User</button>
          </div>
        </div>
         <div className='profile-box'>
         <div className='profile-container'>
         <div className='profile-imgText'>           
          <div className='profile-img'>
            <img src={ProfileImg} alt="" className='image' />
            </div>
            <div className='profile-name'>
            <h3>Grace Effiom</h3>
          <p>LSQFf587g90</p>
            </div>                   
         </div>
         <div className="divider"></div>
         <div className="user-tier">
          <h4 tier-text>User’s Tier</h4> 
          <div  style={{margin:"auto"}}>
            <img src={Tier1} alt="" />
            <img src={Tier2} alt="" />
            <img src={Tier2} alt="" />
            </div>         
         </div>
         <div className="divider"></div>
         <div className="bank-info">
          <h4>₦200,000.00</h4>
          <p className='profile-bank'>9912345678/Providus Bank</p>
         </div>                 
        </div>
      
        <ul className='items'>
          <li><a href="http://">General Details</a></li>
          <li><a href="http://">Documents</a></li>
          <li><a href="http://">Bank Details</a></li>
          <li><a href="http://">Loans</a></li>
          <li><a href="http://">Savings</a></li>
          <li><a href="http://">App and System</a></li>
         </ul>  
         </div>
       
          <div className='profile-table'>
            <div className='table-info'>
            <h2>Personal Information</h2>
            <table>             
              <thead>
                <tr>
                  <th>full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Bvn</th>
                  <th>Gender</th>                  
                </tr>
                
              </thead>       
                  
                       
              <thead>
                <tr>               
                  <th>Marital status</th>
                  <th>Children</th>
                  <th>Type of residence</th>
                </tr>
              </thead>
            
            
            <div className="break"></div>  
            <h2>Education and Employment</h2>
            
                         
              <thead>
                <tr>
                  <th>level of education</th>
                  <th>employment status</th>
                  <th>sector of employment</th>
                  <th>Duration of employment</th>                                  
                </tr>
              </thead>
              <thead>
                <tr>             
                  <th>office email</th>
                  <th>Monthly income</th>
                  <th>loan repayment</th>                  
                </tr>
              </thead>
          
            <div className="break"></div>  
            <h2>Socials</h2>
                        
              <thead>
                <tr>
                  <th>Twitter</th>
                  <th>Facebook</th>
                  <th>Instagram</th>                
                </tr>
              </thead>
             
            <div className="break"></div>            
            <h2>Guarantor</h2>
             
            <div className="break"></div>              
              <thead>
                <tr>
                  <th>full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Relationship</th>                 
                </tr>
              </thead>

              <thead>
                <tr>
                  <th>full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Relationship</th>
              </tr>
              </thead>
            </table>
            </div>
         
            
          </div>

    </div>
  )
}

export default Profile