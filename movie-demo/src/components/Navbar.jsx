import React, { Fragment } from 'react'
import {HiSearch} from 'react-icons/hi'
import {Routes , Route , NavLink} from 'react-router-dom'
import "../Styles/NavBarStyle.css"
import ComingSoon from './ComingSoon'
import TopRatedIndian from './TopRatedIndian'
import TopRated from './TopRated'
import Favorites from './Favorites'
import Movies from './Movies'
import { useState } from 'react'

export const Container = React.createContext()

function Navbar() {
  const [inputValue, setInputValue] = useState('')
    
  return (
    <Container.Provider value={{inputValue}}>
      <Fragment>
        <nav className='nav'>
            <div className='nav-options'>
                <h1 id='heading'></h1>
                <NavLink to="">
                <span>Movies In Theatre</span>
                </NavLink>
                <NavLink to="/ComingSoon">
                <span>Coming Soon</span>
                </NavLink>
                <NavLink to="/TopRatedIndian">
                <span>Top Rated Indian</span>
                </NavLink>
                <NavLink to="/TopRated">
                <span>Top Rated Movies</span>
                </NavLink>
                <NavLink to="Favorites">
                <span>Favorites</span>
                </NavLink> 
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search...' onChange={(e) => setInputValue(e.target.value)} /> 
            <HiSearch fontSize={22} id='search'/>
            </div>
        </nav>
        <Routes>
            <Route path='' element={<Movies/>} />
            <Route path='ComingSoon' element={<ComingSoon/>} />
            <Route path='TopRatedIndian' element={<TopRatedIndian/>} />
            <Route path='TopRated' element={<TopRated/>} />
            <Route path='Favorites' element={<Favorites/>} />
        </Routes>
      </Fragment>
      </Container.Provider>
  )
}

export default Navbar
