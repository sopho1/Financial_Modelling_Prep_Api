import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortflolio/CardPortfolio';
import './ListPortfolio.css'

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfoliio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <section id="portfolio">
    <h2 className="portfolio-title">
      My Portfolio
    </h2>
    <div className="portflolio-container">
      <>
        {portfolioValues.length > 0 ? (
          portfolioValues.map((portfolioValue) => {
            return (
              <CardPortfolio
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })
        ) : (
          <h3 className="portfolio-empty">
            Your portfolio is empty.
          </h3>
        )}
      </>
    </div>
  </section>
  )
}

export default ListPortfoliio