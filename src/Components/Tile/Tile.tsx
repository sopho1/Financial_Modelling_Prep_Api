import React from 'react'
import './Tile.css'

interface Props {
    title: string;
    subTitle: string;
}

const Tile = ({title, subTitle}: Props) => {
  return (
    <div className="stat-card">
                <div className="stat-content">
                  {title}
                  <span> {subTitle} </span>
                </div>
              </div>
  )
}

export default Tile