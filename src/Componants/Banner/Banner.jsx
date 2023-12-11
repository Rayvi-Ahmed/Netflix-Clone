import React, { useEffect, useState } from 'react';

import axios from 'axios';
import requests from '../../request';


const Banner = () => {
    const [movies,setMovies]=useState([])
    
    const movie =movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results)

})
    },[])

    console.log(movie)

    const tuncreteString=(str,num)=>{
    if(str?.length>num){
        return str.slice(0,num)

    }else{
        return str
    }
    }

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
          <div className='abulate w-full h-[550px] bg-gradient-to-l from-black'>
          <img className='w-full h-full object-cover opacity-95' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          </div>
            </div>

      <div className='w-full absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-gray-100 font-bold text-3xl md:text-5xl py-2'>{movie?.title}</h1>
       
      <div>
                <button className='border bg-gray-300 border-gray-300 px-4 py-2'>Play</button>
                <button className='border border-gray-300 px-4 py-2 text-white ml-2'>Watch Leter</button>
            </div>

            <p className='text-gray-500 text-sm w-full py-3'>Relised date:{movie?.release_date}</p>
            <p className='text-white w-full md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] py-3'>{tuncreteString(movie?.overview,200)}</p>
      </div>
        </div>
    );
};

export default Banner;