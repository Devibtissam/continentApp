import logo from './logo.svg';
// import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllContinents from './components/AllContinents'
import IndependentCountries from './components/IndependentCountries'
import Countries from './components/Countries'
import Home from './components/Home'
import Settings from './components/Settings';
import Search from './components/Search';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<AllContinents/>}/>
      </Route>
      <Route path="independance" element={<Home/>}>
          <Route index element={<IndependentCountries/>}/>
          <Route path=':Yr'  element={<Countries/>}/>
      </Route>
      <Route path='settings' element={<Home/>}>
        <Route index element={<Settings/>}/>
      </Route>
      <Route path='search' element={<Home/>}>
        <Route index element={<Search/>}/>
      </Route>

    </Routes> 

    </BrowserRouter>

  );
}

export default App;
