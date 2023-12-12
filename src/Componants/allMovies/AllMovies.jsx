import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie/Movie';
 
const AllMovies = ({title,fetchUrl}) => {
    const [movies,setMovies]=useState([])

    useEffect(()=>{
    axios.get(fetchUrl).then((Response)=>{
    setMovies(Response.data.results)
        })

    },[fetchUrl])

    console.log(movies)


    return (
    <div>
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className='relative flex justify-center items-center'>
                <div id={"slider"} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {
                movies.map((item,id)=>(
                <Movie item={item} key={id}></Movie>
        
                ))
                        }
                </div>
                
            </div>
        </div>
    );
};

export default AllMovies;