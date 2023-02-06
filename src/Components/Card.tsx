import React,{useState} from 'react'
import CardInfo from './CardInfo'

interface cardProps{
  userCard:{
    id: number,
    img :JSX.Element,
    title: string,
    count:string
  }
}
import './card.scss'
const Card :React.FC <cardProps> = ({userCard}) => {  
  return (   
   
    <div  className="card-cont"> 
          
        <CardInfo
        userCard={userCard}
        />   
      
    </div>
   
  )
}

export default Card