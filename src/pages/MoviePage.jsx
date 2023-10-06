import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import '../App.css';

function MoviePage() {
  const APIURL = "https://www.omdbapi.com/?apikey=1565bd66&t="
  const [movieName,setMovieName]=useState("")
  const [searchMovie,setSearchMovie]=useState("")
  const [movieData,setMovieData]=useState({})
  const [movieErr,setMovieErr]=useState(false)
  const [loading,setLoading]=useState(null)

  const handleInput=(e)=>{
    setMovieName(e.target.value)
  }

  const searchMovieHandler=()=>{
    if(movieName===""|| movieName===null){
      alert("Enter A Movie Name")
    }
    else{
      setLoading(true)
      var api = APIURL+ movieName
      axios.get(api).then((res)=>{
        console.log('response', res);
        setMovieData(res.data)
        setLoading(false)
      }).catch((err)=>{
        console.log(err);
      })
    }
   }

   const actors="Scarlett Johansson, Morgan Freeman,Choi Min-sik"
   const listactors = actors.split(",")
   console.log((listactors));


  return (
    <>
    <Navbar activeTab="movies"/>

    <div className='w-11/12 p-2 mx-auto mt-20 flex flex-row gap-5  '>
        <input className='flex-1 p-2 border-2 border-black' 
        onChange={handleInput} 
        value={movieName}
        type="text" name="" id="" placeholder='Search for the Movie or TV Show  you want!! Example: Batman'/>
        <button 
        onClick={searchMovieHandler}
        className='px-[16px] py-[8px] bg-black text-white font-semibold' 
        
        >Search Movie or TV Show</button>
    </div>
    {loading&&
    <div  className='w-full h-[80vh] flex items-center justify-center'>
    <div className="loader"></div>
  </div>
    }

    {
      movieData.Title && !loading?
  
    <div className='maincard'>
    <div className="movie-card">
  <img src={movieData?.Poster} alt="Avatar wallpaper" />
  <div className="content">
    <div class="main">
      <h1>{movieData?.Title}</h1>
      <div className="information">
      <div className="infos">
        <span>{movieData?.Released}&nbsp;&nbsp;-&nbsp;&nbsp;{movieData?.Type}  </span>
      </div>
      <div className="score">
        <p><span className="gradient-text">{movieData?.imdbRating}</span>   {movieData?.Runtime}{movieData.Type==="series"?" / Episode":""}   </p>
      </div>
      </div>
    </div>
    <div className="synopsis">
      <p>{movieData?.Plot}</p>
      {/* <i className="gg-play-button-o"></i> */}
    </div>
  </div>
</div>
</div>:null
    }
    {
      movieData.Error&&
      <div className='w-11/12 text-center font-bold text-[30px] py-10 text-black flex flex-col justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto ' height="80" viewBox="0 -960 960 960" width="80"><path fill='#53161640' d="M612.461-641.615q0-56.077-37.73-90.154-37.731-34.077-99.346-34.077-39.77 0-69.423 15.577-29.654 15.577-51.269 48.038-6.77 9.154-17.347 11.5-10.577 2.347-19.038-4.115-7.077-5.308-8.577-13.923-1.5-8.616 3.346-16.385 28.923-44.154 69.192-65.654 40.269-21.5 93.116-21.5 81.615 0 133.269 47.308 51.654 47.308 51.654 122.462 0 41.923-18.231 78.307-18.231 36.385-56.923 70.77-47 41.153-64.615 69.115-17.616 27.961-18.539 62.192-.923 10.154-7.808 16.923-6.884 6.77-16.807 6.77-9.924 0-16.808-7.039-6.885-7.038-6.885-16.962 0-41.307 19.692-75.346 19.693-34.038 65.847-74.654 41-35.769 57.115-65.269 16.115-29.5 16.115-63.884ZM475.385-120q-16.077 0-28.039-11.961-11.962-11.962-11.962-28.039t11.962-28.039Q459.308-200 475.385-200t28.038 11.961q11.962 11.962 11.962 28.039t-11.962 28.039Q491.462-120 475.385-120Z"/></svg>

        <div>Sorry We could Not find.Please Check your Movie name</div>
      </div>
    }
    </>
  )
}

export default MoviePage