import React, {useEffect} from 'react'
import { FETCH_CONTINENTS, FETCH_SUCCES, FETCH_FAILED } from '../Redux/continentTypes';
import { useSelector, useDispatch } from 'react-redux'
import Continent from './Continent'
import axios from 'axios';
const API_ENDPOINT = 'https://dumbapi.onrender.com/api/continents';
const AllContinents = () => {
  const allContinents = useSelector(state => state.data);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()


const fetchData = (url)=>{
  dispatch({type:FETCH_CONTINENTS})
    axios.get(url)
    .then(res=> {
      // console.log(res.data);
      const data = res.data
      dispatch({type: FETCH_SUCCES, payload : data})
    })
    .catch(error=> {
      const errMsg = error.message
      dispatch({type: FETCH_FAILED, payload: errMsg})
      // console.log(error.message);
    })
}

// fetchData();
// console.log(allContinents[0]);

  useEffect(()=>{
    fetchData(API_ENDPOINT);
    // console.log(allContinents);
  }, [])

  return (
    <section className='center pd-y'>
        <h2 className='text-center'>All Continents</h2>
        <div className="container">
        { loading ? <h2 className='text-center'>Loading ... </h2> : 
        allContinents.map(continent => 
        <Continent key={continent.id} {...continent}/>)}
        </div>
    </section>
  )
}

export default AllContinents