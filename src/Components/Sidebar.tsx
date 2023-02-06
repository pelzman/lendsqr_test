import React from 'react'
import './sidebar.scss'
import SidebarOptions from './SidebarOptions'
import Switch from '../assets/images/switch.png'
import Dash from '../assets/images/dash.png'
import Users from '../assets/images/users.png'
import Garrantors from '../assets/images/garrantors.png'
import Loan  from '../assets/images/loan.png'
import Decision from '../assets/images/decision.png'
import Savings  from '../assets/images/savings.png'
import Whitelist  from '../assets/images/whitelist.png'
import Karmar from '../assets/images/karmar.png'
import Organize from '../assets/images/organize.png'
import Saveproduct from '../assets/images/saveproduct.png'
import Fees from '../assets/images/fees.png'
import Transaction  from '../assets/images/transaction.png'
import Services from '../assets/images/services.png'
import Serviceaccount from '../assets/images/serviceaccount.png'
import Settlement from '../assets/images/settlement.png'
import Report from '../assets/images/report.png'
import Preference from '../assets/images/preference.png'
import Pricing from '../assets/images/pricing.png'
import Audit from '../assets/images/audit.png'
import Logout from '../assets/images/logout.png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <section className='sidebar'>
       <div className='side-switch'>
        <img src={Switch} alt="" />
        <label htmlFor="switch">   Switch Organization</label>
       <select name="switch" id="switch">    
        <option value="" ></option>
       </select>
       </div>
       <SidebarOptions
       
         image={ Dash}
       title="Dashboard"
       />

       <p className='side-header'>CUSTOMERS</p>
     
      
      <Link to='/user' className='link'><SidebarOptions      
         image={ Users}
       title="Users"
      
       /></Link>
     
          <SidebarOptions
         image={ Garrantors}
       title="Guarantors"
       />
          <SidebarOptions
         image={Decision}
       title="Decision Models"
       />
         <SidebarOptions
         image={ Savings}
       title="Savings"
       />
         <SidebarOptions
         image={ Loan}
       title="Loan Requests"
       />
         <SidebarOptions
         image={Whitelist}
       title="Whitelist"
       />
         <SidebarOptions
         image={Karmar}
       title="Karma"
       />
       <p>BUSINESSES</p>
         <SidebarOptions
         image={Organize}
       title="Organization"
       />
          <SidebarOptions
         image={Loan}
       title="Loan Products"
       />
          <SidebarOptions
         image={Saveproduct}
       title="Savings Products"
       />
          <SidebarOptions
         image={Fees}
       title="Fees and Charges"
       />
          <SidebarOptions
         image={Transaction}
       title="Transactions"
       />
       <SidebarOptions
         image={Services}
       title="Services"
       />
          <SidebarOptions
         image={Serviceaccount}
       title="Service Account"
       />
          <SidebarOptions
         image={Settlement}
       title="Settlements"
       />
           <SidebarOptions
         image={Report}
       title="Reports"      
       />
       <p>SETTINGS</p>
       <SidebarOptions
         image={Preference}
       title="Preferences"      
       />
             <SidebarOptions
         image={Pricing}
       title="Fees and Pricing"      
       />
             <SidebarOptions
         image={Audit}
       title="Audit Logs"      
       />
       <div className='line'></div>
     <Link to='/' className='link'> <SidebarOptions
         image={Logout}
       title="Logout"      
       /></Link> 

    </section>
  )
}

export default Sidebar