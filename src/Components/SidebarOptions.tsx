import React from 'react'
import './sidebarOptions.scss'
interface Props{
  title:string;
  image: string;
  
 
  
 
}
const SidebarOptions:React.FC <Props> = ({image, title}) => {
  return (
    <>
    <div className='sidebar-option active' >
     
    <img src={image}  />
        <h3>{title}</h3>       
    </div>
    
    
    
    </>
  )
}

export default SidebarOptions