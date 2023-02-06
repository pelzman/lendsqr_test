import React,{useState, useEffect} from 'react'
import  {Navbar}  from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Profile from '../Components/Profile'

import './detail.scss'
import Table from '../Components/Table'


import axios from 'axios'

const Detail = ({}) => {

  const [users, setUsers] = useState({})
  const[loading, setLoading] = useState(false)
  // useEffect(() => {
  //   async function fetchUser() {
  //     const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
  //     setUsers(response.data);
  //     setLoading(false);
  //   }
  //   console.log(users)
  //   fetchUser();
  // }, [id]);
  //  if(loading){
  //   return <div>Loading....</div>
  //  }

  return (
    <div className='detail'>
        {/* Navbar */}
        <Navbar/>
        
        <div className='contain'>
        <div className='sidebar-container'>
          <Sidebar/> 
        </div>
        <div className='user-container'>
          <Profile
         
          />   
      
        </div>
      
       </div>
       
    </div>
  )
}

export default Detail;