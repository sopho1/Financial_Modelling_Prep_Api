import React from 'react'
import hero from './hero.png'
import './Hero.css'
import { Link } from 'react-router-dom'

interface Props {

}

const Hero = (props: Props) => {
  return (
     <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Financial data with no news.
          </h1>
          <p>
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div> 
            <Link
              to="/search"
              className="hero-button"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero