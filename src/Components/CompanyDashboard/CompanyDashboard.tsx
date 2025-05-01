import React, { Children } from 'react'
import './CompanyDashboard.css'
import { Outlet } from 'react-router-dom'

interface Props {
    children: React.ReactNode;
    ticker: string;
}

const CompanyDashboard = ({children, ticker}: Props) => {
  return (
    <div className="main-content">
          <div className="header"></div>
          <div className="content-wrapper">
            <div className='stats-container'> 
              <div className='stats-container'> 
                    {children}
                    <Outlet context={ticker} />
                </div>
              </div>
            </div>
          </div>
  )
}

export default CompanyDashboard