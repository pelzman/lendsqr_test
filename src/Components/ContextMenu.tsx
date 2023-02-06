import React,{useState} from 'react'
import './contextmenu.scss'

const ContextMenu:React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
 
      return (
      <div className="context-menu">
       
              <form action="">

                <div>
                  <label htmlFor="organization">Organization</label>
              <select name="Select" id="organization">
                select 
                <option value='' > Select</option>
                <option value='' > select one</option>
                <option value='' > Select two</option>

              </select>
                </div>
                <div>
                  <label htmlFor="name">Username</label>
                  <input type="text" id='name'/>
                </div>
                <div>
                  <label htmlFor="email">  Email</label>
                  <input type="text" id='email'/>
                </div>
                <div>
                  <label htmlFor="phone">  Phone Number</label>
                  <input type="number" id='phone'/>
                </div>
                <div>
                  <label htmlFor="date">Date</label>
                  <input type="date" id='date'/>
                </div>
                <div>
                  <label htmlFor="status">Status</label>
                  <input type="text" id='status'/>
                </div>
                <div className='btn-container'>
                <button className='reset-btn'>Reset</button>
                <button className='filter-btn'>Filter</button>
                </div>
                
              </form>
            
      </div>
  )
}

export default ContextMenu