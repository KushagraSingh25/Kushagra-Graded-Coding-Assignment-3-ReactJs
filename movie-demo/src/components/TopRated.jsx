import axios from 'axios'
import React,{Fragment, useEffect, useState } from 'react'
import '../Styles/Card.css'
import NoImg from './NoImage.jpg'
import {AiFillHeart} from 'react-icons/ai'


function TopRated() {
  const [data, setData]= useState([])
  const Api = `https://api.themoviedb.org/3/movie/top_rated?&language=en-US&page=1`
  const Img_path = 'https://image.tmdb.org/t/p/w500'
  const TopRated = async() =>{
    const data = await axios.get(Api,{
      params: {
        api_key: 'db95773a7fb212ba790d71f6adac0e7e',
      }

    })
    const results = data.data.results
    setData(results)
  }
    useEffect(() =>{
      TopRated()
    }, []);

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

export default TopRated
