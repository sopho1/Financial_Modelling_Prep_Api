import React from 'react'
import './TenKFinderItem.css'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router-dom';

type Props = {
    tenK: CompanyTenK;
}

const TenKFinderItem = ({tenK}: Props) => {
    const fillingDate = new Date(tenK.fillingDate).getFullYear();
  return (
  <Link reloadDocument to={tenK.finalLink} type='button' className='Y'>
    10k - {tenK.symbol} - {fillingDate}
  </Link>
)}

export default TenKFinderItem