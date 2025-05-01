import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faChartLine, faHouse, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

interface Props {

}

const Sidebar = (props: Props) => {
  return (
    <nav className="sidebar">
    <div className="sidebar-content">
      <Link to="Company-Profile" className="sidebar-title">
            <FontAwesomeIcon icon={faHouse} className='Link'/>
            <h6> Company Profile </h6> 
      </Link>

      <Link to="Income-Statement" className="sidebar-title">
            <FontAwesomeIcon icon={faChartLine} className='Link'/>
            <h6> Income Statement </h6> 
      </Link>

      <Link to="balance-sheet" className="sidebar-title">
            <FontAwesomeIcon icon={faBalanceScale} className='Link'/>
            <h6> Balance Sheet </h6> 
      </Link>

      
      <Link to="cashflow-statement" className="sidebar-title">   
            <FontAwesomeIcon icon={faMoneyBillWave} className='Link'/>
            <h6> CashFlow Statement </h6> 
      </Link>

    </div>
  </nav>
  )
}

export default Sidebar