import React from 'react'
import './cardInfo.scss'
interface cardProps{
  userCard:{
    id: number,
    img :JSX.Element,
    title: string,
    count:string
  }
}
const CardInfo:React.FC <cardProps> = ({userCard}) => {
  return (
    <div className='cardInfo' key={userCard.id} >
      {userCard.img}
      <p className='card-title'>{userCard.title}</p>
      <p className='card-count'>{userCard.count}</p>

    </div>
  )
}

export default CardInfo