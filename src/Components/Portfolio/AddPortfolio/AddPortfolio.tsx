import React, { SyntheticEvent } from 'react'
import './AddPortfolio.css'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <div className="portfolio-form-container">
    <form onSubmit={onPortfolioCreate}>
      <input readOnly={true} hidden={true} value={symbol} />
      <button
        type="submit"
        className="add-portfolio-btn"
      >
        Add
      </button>
    </form>
  </div>
  )
}

export default AddPortfolio