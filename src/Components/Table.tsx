import React,{useState} from 'react'
import ContextMenu from '../Components/ContextMenu'
import Sorting from '../assets/images/sorting.png'
import PopupMenu from './PopupMenu'
import Prev from '../assets/images/prev btn.png'
import Next from '../assets/images/next btn.png'
import ReactPaginate from 'react-paginate';
import './table.scss'
interface Data{
  
      id: number;
      orgName: string;
      userName :string;
     email : string;
     phoneNumber: string;
      lastActiveDate: string;
      createdAt : string;
      page :number;
      
      
  }
  interface Props{
    data : Data[] ;
  }
const Table = (props : Props) => {
  const {data} = props;
    console.log(data)
    const [showContextMenu, setShowContextMenu] = useState(false);
    const toggleContextMenu=(e:React.MouseEvent<HTMLImageElement>)=>{
      setShowContextMenu(!showContextMenu)
    }
   
  return (
    
    <table className= "table-container " > 
    <thead>
    <tr>

<th>Organization   
    <img src={Sorting} alt="" onClick={toggleContextMenu} /> 
    {showContextMenu && <ContextMenu/>}      
     </th>
     
  <th>Username
 
  <img src={Sorting} alt="" />

  </th>

  <th>Email
  <img src={Sorting} alt="" />
  </th>
  <th>Phone number 
  <img src={Sorting} alt="" />
  </th>
  <th>Date joined
  <img src={Sorting} alt="" />
  </th>
  <th> Status
  <img src={Sorting} alt="" />
  </th>
 
</tr> 
    </thead>
   
   <tbody>
   {data.map((item, id)=>(
  <tr key={item.id} >
     <td>{ item.orgName}</td> 
  <td>{ item.userName}</td>
  <td>{item.email}</td>
  <td>{item.phoneNumber}</td>
  <td>{item.createdAt}</td>
  <td> {item.lastActiveDate}</td>  

   <PopupMenu /> 
     </tr> 
     
        ))}  
    </tbody>    
          
        
 </table>

  
    
 
 

   
     



   
  )
}

export default Table