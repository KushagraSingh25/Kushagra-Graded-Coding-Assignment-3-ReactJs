import axios from 'axios'
import React,{Fragment, useEffect, useState, useContext } from 'react'
import { Container } from './Navbar';
import '../Styles/Card.css'
import NoImg from './NoImage.jpg'
import {AiFillHeart} from 'react-icons/ai'


function TopRatedIndian() {
  const {inputValue} = useContext(Container)
  const input = inputValue
  const [data, setData]= useState([])
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie?&language=en-IN&region=IN&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2022&with_original_language=hi`
  const Img_path = 'https://image.tmdb.org/t/p/w500'
  const TopRatedIndian = async() =>{
    const data = await axios.get(Api,{
      params: {
        api_key: 'db95773a7fb212ba790d71f6adac0e7e',
        query:input
      }

    })
    const results = data.data.results
    setData(results)
  }
    useEffect(() =>{
      TopRatedIndian()
    }, [input]);

  return (
    <Fragment>
      <div className='BgColor'>
      <div className='movies-container'>
      {data.map((movie) =>{
        return(
          <>
          <div id='container'>
          <AiFillHeart color='red' fontSize={40} id="favIcon"/>
          <img src={movie.poster_path ? `${Img_path}${movie.poster_path}` : NoImg} alt=''/>
          <h3 className='DarkTheme' id={movie.title.length > 28 ? 'smaller-Text' : ''}>{movie.title}</h3>
          </div>
          </>
        )
      })}
      </div>
      </div>
    </Fragment>
  )
}

export default TopRatedIndian
