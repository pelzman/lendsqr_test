import React,{useState, ReactNode} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Group.svg'
import Brand from '../assets/images/pablo.svg'
import'./log.scss'


 const Login:React.FC =()=>{
const [person, setPerson] = useState({ email:'' , password: ''})
const[isOpen, setIsOpen] = useState(false)
const[formError, setFormError]= useState(false)
const [isSubmit, setIsSubmit] =useState(true)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
 e.preventDefault()
 setPerson((prev)=>({
  ...prev, [e.target.name]: e.target.value
   
 }))
 console.log(person)
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
console.log(person)
 if(person.email && person.password.length < 4 ){
  return <p>please enter your password</p>
}
else{
  console.log("please fill in details")
}

 
  }
 
  return (
    <div className='login'>
        
         <img src={Logo} alt="" width='173.76px' height="36px" style={{marginLeft:"25px",marginTop:"10px" }}/>
         <div className='log-cont'>
         <div className='image' >
        <img src={Brand} alt="" className='brand' />     
        </div>

       <div className='formControl'>
            <h2>Welcome!</h2>
            <p className='form-text'>Enter details to login.</p>

    <form onSubmit={handleSubmit} >
   

    <input type="email" 
    name='email'
     placeholder="Email"
    className='form-control'
    value={person.email}
    onChange = { handleChange}
    />  
   <div className='input-show'>
   <input type={isOpen?"password": "text"}
    name = "password"
     placeholder="Password" 
     className='form-control  '
     value={person.password}
     onChange = {handleChange}
     required
     />
    
     <p className='show' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "show ": "hide"} </p>
   </div>    

     <p className='forget-password'>FORGOT PASSWORD?</p>
   
    <Link to='/dashboard'><button className='form-btn'>Login</button> </Link>

          </form>           
        </div>
      
         </div>  

   
    </div>
  )
}
export default Login