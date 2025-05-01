import React from 'react'
import './RatioList.css'
import { TestDataCompany } from '../Table/testData'
import { render } from '@testing-library/react';

type Props = {
    config: any;
    data: any;
}

const RatioList = ({config, data}: Props) => {

    const renderedRow = config.map((row:any) => {
        return (
            <li className='List'>
                <div className='Fdiv'>
                    <div className='Sdiv'>
                        <p className='Fp'>
                            {row.label}
                        </p>
                        <p className='Sp'>
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className='Tdiv'>  {row.render(data)}  </div>
                </div>
                <hr/>
            </li>
        )
    })

  return (
    <div className='Fodiv'>

        <ul className='Slist'>
            {renderedRow}
        </ul>

    </div>
  )
}

export default RatioList