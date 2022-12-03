import axios from 'axios';
import React, { Fragment , useEffect , useState , useContext } from 'react'
import { Container } from './Navbar';
import NoImg from './NoImage.jpg'
import {AiFillHeart} from 'react-icons/ai'
import '../Styles/Card.css'

function Movies() {
  const [movies, setMovies]= useState([])
  const [favorites, setFavorites]=useState([])
  const {inputValue} = useContext(Container)
  const input = inputValue
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Img_path = 'https://image.tmdb.org/t/p/w500'
  const MovieCall = async () =>{
    const data = await axios.get(Api,{
      params:{
        api_key: 'db95773a7fb212ba790d71f6adac0e7e',
        query: input
      }

    })
    const results = data.data.results
    setMovies(results)
  
  } 
  useEffect(() =>{
    MovieCall()
  }, [input]);

  
  return (
    <Fragment>
      <div className='BgColor'>
      <div className='movies-container'>
      {movies.map((movie) => {
        return(
        <>
        <div id='container'>
          <AiFillHeart color='red' fontSize={40} id="favIcon" />
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

export default Movies
