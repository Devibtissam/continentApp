import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Continent.scss'


const Continent = ({continentName, areakm2, populationmill}) => {
  return (
    <article className='continent'>
        <div className="continent__wrapper">
            <h3>{continentName}</h3>
        </div>
        <div className="continent__info">
            <p><span>Population</span> {populationmill} Milliards</p>
            <p><span>Area</span> {areakm2} Km2</p>
            <Link className='link' to='/'>See Countries</Link>
        </div>
    </article>
  )
}

export default Continent