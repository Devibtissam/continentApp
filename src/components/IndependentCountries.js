import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Countries from './Countries';
import { Link} from 'react-router-dom';

const IndependentCountries = () => {
  const data = useSelector(state => state.data);
  const countries = data.map(continent => continent.countries).flat();
  const years = [...new Set (countries.filter(country=> typeof(country.indepYear) !== "boolean")
  .map(country => country.indepYear))];

  return (
    <section className="years pd-y">
      {years.map(year => 
        <Link key={year} className='btn' to={`/independance/${year}`}>{year}</Link>
        )}
      

    </section>

    // <Countries/>
  )
}

export default IndependentCountries