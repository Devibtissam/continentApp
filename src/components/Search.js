import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import '../styles/Form.scss'

const Search = () => {
    const [filteredcountries, setFilteredCountries] = useState([]);
    const [populationSearch, setPopulationSearch] = useState(0);
    const [continentSearch, setContinentSearch] = useState("")
    const continents = useSelector(state => state.data);
    const continentNames = continents.map(continent => continent.continentName);

    const searchDropDown = [...continentNames];

    const SearchFilter = (e)=>{
        e.preventDefault();
        // first search for the matching continent and then for the matching population
        // if both empty => no matching continent 
        // if continent specified but population not, display all country we have
        // if both specified => then display the country matching the condition filter
        if(Number(populationSearch) <=0 && !continentSearch){
            setFilteredCountries([]);
        }
        if(continentSearch || Number(populationSearch)> 0){
            const matchingCountries = continents.filter(continent=> continent.continentName === continentSearch)
            .map(country => country.countries).flat()
            .filter(country => country.population >= Number(populationSearch))
            console.log(matchingCountries);
            setFilteredCountries(matchingCountries);
        }
    }

  return (
    <>
    <form className='center pd-y' onSubmit={(e)=>SearchFilter(e)}>
        <div className="form-control">
            <label htmlFor="continentSearch">
                <select name="continentSearch" id="continentSearch" onChange={(e)=>setContinentSearch(e.target.value)}>
                    <option value="Filter" selected disabled>Filter</option>
                    {
                        searchDropDown.map(searchKey =>
                            (<option key={searchKey} value={searchKey}>{searchKey}</option>))
                    }
                </select>
                <br/>
            </label>
            <label htmlFor="populationSearch">
                Search By population : <br/>
                <input type="text" value={populationSearch} onChange={(e)=>setPopulationSearch(e.target.value)}/>
            </label>
        </div>
        <button className='btn' type='submit'>Search</button>
    </form>
    <section className='center pd-y'>
        {filteredcountries.length ? 
        
        filteredcountries.map(country => {
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
        : <h2 className='text-center'>No Matching Country :/</h2> }

    </section>
    </>
  )
}

export default Search