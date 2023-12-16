import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie/Movie';
import {TfiArrowCircleLeft,TfiArrowCircleRight} from "react-icons/tfi";
 
const AllMovies = ({title,fetchUrl}) => {
    const [movies,setMovies]=useState([])

    useEffect(()=>{     	
    axios.get(fetchUrl).then((Response)=>{
    setMovies(Response.data.results)
        })

    },[fetchUrl])

    return (

    <div>
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className='relative flex justify-center items-center group'>

            <TfiArrowCircleLeft size={50} className='bg-white left-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'></TfiArrowCircleLeft>
                <div id={"slider"}
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {
                movies.map((item,id)=>(
                <Movie item={item} key={id}></Movie>
    
                ))
                        }
                </div>
            <TfiArrowCircleRight  size={50} className='bg-white right-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'></TfiArrowCircleRight>
                
            </div>
        </div>
    );
};

export default AllMovies;