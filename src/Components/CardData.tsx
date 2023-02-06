import User from '../assets/images/userIcon.png'
import Active from '../assets/images/activeIcon.png'
import Loan from '../assets/images/loanIcon.png'
import Saving from '../assets/images/savingIcon.png'

const CardData= [
    {
    id:1,
    img : <img src={User} alt="" width="40" height="40" />,
    title: 'Users',
    count : '2,453'
} ,
{
    id:2,
    img : <img src={Active} alt="" />,
    title: 'Active Users',
    count : '2,453'
} ,
{
    id:3,
    img : <img src={Loan} alt="" />,
    title: 'Users with Loans',
    count : '12,453'
}, 
{
    id:4,
    img : <img src={Saving} alt="" />,
    title: 'Users with Savings',
    count : '102,453'
} 


]

export default CardData