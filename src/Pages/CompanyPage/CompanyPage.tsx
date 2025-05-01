import React, { use, useEffect, useState } from 'react'
import './CompanyPage.css'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company'
import { getCompanyProfile } from '../../api'
// import { get } from 'axios'
import './CompanyPage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard'
import Tile from '../../Components/Tile/Tile'
import Spinner from '../../Components/Spinner/Spinner'
import CompFinder from '../../Components/CompFinder/CompFinder'
import TenKFinder from '../../Components/TenKFinder/TenKFinder'

interface Props {

}

const CompanyPage = (props: Props) => {
    let {ticker} = useParams()
    const [company, setCompany] = useState<CompanyProfile>();  

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }
        getProfileInit();
    }, [] )
  return (
    <>
        {company? (
        
        <div className="container">
     
        <Sidebar />
        
       
        <CompanyDashboard ticker={ticker!}> 
        <div className='CD'>
            <Tile title = "Company Name" subTitle = {company.companyName}/>
            <Tile title = "Price" subTitle = {"$" + company.price.toString()}/>
            <Tile title = "Sector" subTitle = {company.sector}/>
            <Tile title = "DCF" subTitle = {"$" + company.dcf.toString()}/>
            </div>
            <CompFinder ticker={company.symbol}/>
            <TenKFinder ticker={company.symbol}/>
           
            <p className='desc'> {company.description} </p>
      
       </CompanyDashboard>
       
      </div>
    
  
        ): (
            <Spinner />
        )
 }
    
    </>
  )
}

export default CompanyPage