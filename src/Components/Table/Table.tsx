import React from 'react'
import './Table.css'
import { render } from '@testing-library/react';
import { config } from 'dotenv';

type Props = {
    config: any;
    data: any;
};



const Table = ({config, data}: Props) => {
  
    const renderedrow = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return <td>
                        {val.render(company)}
                    </td>
                } 
            )}
            </tr>
        );
    });
  
    const renderedHeaders = config.map((config: any) => {
        return (<th className='tableH' key={config.label}>
            {config.label}
        </th>
    );
});

    return (
    <div className='tableM'>
        <table>
            <thead className='tableh'>
                {renderedHeaders}
            </thead>
            <tbody className='tableB'>
                {renderedrow}
            </tbody>
        </table>
    </div>
  );
}

export default Table;