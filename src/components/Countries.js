import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import '../styles/country.scss';

const Countries= () => {

  const data = useSelector(state => state.data);
  const countries = data.map(continent => continent.countries).flat();
  const {Yr : year} = useParams();
  console.log(year, countries);
  const matchingCountries = countries.filter(country => country.indepYear === Number(year));

  


  return (
   
    matchingCountries.map(country=> {
      const {countryName, capital, population, indepYear, image_url} = country
      return (
           <article key={countryName} className='country pd-y center'>
      <div className='country__img'>
        <img src={image_url} alt={countryName} />
      </div>
      <div className='country__info'>
         <h3>{countryName}</h3>
        <p><span>Population </span>{population}</p>
        <p><span>Capital</span> {capital}</p>
        <p><span>Independance Year </span> {indepYear}</p>
       </div>
   </article>
      )
      
    })

        

    
    
  )
}

export default Countries