import React from 'react'
import './CompFinderItem.css'
import { Link } from 'react-router-dom';

type Props = {
    ticker: string;
}

const CompFinderItem = ({ticker}: Props) => {
  return (
    <Link reloadDocument to={`/company/${ticker}/company-profile`} type='button' className='G'>
        {ticker}
    </Link>
  )
}

export default CompFinderItem