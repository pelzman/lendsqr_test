import React,{useState, useEffect} from 'react'
import  {Navbar}  from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Card from '../Components/Card'
import CardData from '../Components/CardData'
import{Box, HStack, Flex, Tab} from '@chakra-ui/react'
import ReactPaginate from 'react-paginate';
import './home.scss'
import Table from '../Components/Table'
import axios from 'axios'
const Dashboard= () => {
  const[userCard, setUserCard]= useState(CardData)
  const[data, setData] = useState <[]>([])
  const[loading, setLoading] = useState(true)
  const[pageNumber, setPageNumber] =useState(0)
  const userPerPage =10
  const indexOfFirstPage = pageNumber * userPerPage
  const indexOfLastPage = indexOfFirstPage + userPerPage
  const displayPage =data.slice(indexOfFirstPage, indexOfLastPage)
   
  const pageCount= Math.ceil(data.length/userPerPage)

  const handleOnChangePage=({selected})=>{
  setPageNumber(selected)
  }
  useEffect(() => {
    
    axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
          .then(res => {
             setData(res.data.slice(0, 100));
              setLoading(false);
              
          })
          .catch((Error) => {
               console.log(Error)
          })   

},[])
if(loading){
  return <div>Loading....</div>}

  return (
    <div className='Home'>
        {/* Navbar */}
        <Navbar/>
        
        <div className='contain'>
        <div className='sidebar-container'>
          <Sidebar/> 
        </div>
        <div className='user-container'>
          <h1>USERS</h1>
          
       <div className='card-container'>

       {userCard.map((userCards, id)=>{
  return <Card
       key={userCards.id}
      userCard={userCards}
     
  />
       })}
       </div>
        
        <Table  data={ displayPage }/> 
          <div className="page-selection">
    <p className='text'>Showing</p>
    <select name="" id="">
      <option value="">{displayPage.length * userPerPage}</option>      
    </select>
    <p className='text'>out of 100</p>
  </div>
        <ReactPaginate        
        breakLabel="..."
        nextLabel=" >"        
        onPageChange={handleOnChangePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
       containerClassName= {'pagination'}
       previousLinkClassName ={'previousBtn'}
       nextLinkClassName ={'nextBtn'}
      />     
      
        </div>
        
      
       </div>
      
    </div>
  )
}

export default Dashboard;