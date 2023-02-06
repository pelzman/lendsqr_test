import React,{useState} from 'react'
import Detail from '../assets/images/detail.png'
import Blacklist from '../assets/images/blacklist.png'
import ActiveUser from '../assets/images/activeUser.png'
import More from '../assets/images/more.png'
import { Link } from 'react-router-dom'
import './popupMenu.scss'
const PopupMenu = () => {
    const[popup, setPopup]= useState(false)
    const togglePopup=(e:React.MouseEvent<HTMLImageElement>)=>{
      setPopup(!popup)
    }
   
  return (<>

   <img src={More} alt="" className='more' onClick={togglePopup}/>
    {popup && (
      
     <div className="popup-container">
      
      <div className='detail' >
        <img src={Detail} alt="" /> 
     <Link to= '/detail' className='detail-link'><h4>View Details</h4></Link>   
       </div>
       <div className='blacklist'>
       <img src={Blacklist} alt="" /> 
        <h4>Blacklist User</h4>
       </div>
       <div className='active'>
       <img src={ActiveUser} alt="" /> 
        <h4>Activate User</h4>
       </div>
   
     </div>
   
    )}
   
   
    </>
  )
}

export default PopupMenu