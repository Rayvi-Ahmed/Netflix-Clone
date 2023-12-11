import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegHeart,FaHeart} from "react-icons/fa"
 
const AllMovies = ({title,fetchUrl}) => {
    const [movies,setMovies]=useState([])
    const [like,setLike]=useState(false)

    useEffect(()=>{
    axios.get(fetchUrl).then((Response)=>{
    setMovies(Response.data.results)
        })

    },[fetchUrl])

    console.log(movies)


    return (
        <div>
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className='relative flex items-center'>
                <div id={"slider"}>
            {
                movies.map((item,id)=>(

        <div className='w-[160px] sm:w-[180px] md:[200px] lg:w-[220px] xl:w-[240px] cursor-pointer inline-block relative'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
    <div className='absolute top-0 left- w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
    <p className=' flex justify-center items-center whitespace-normal w-full h-full'>{item.title}</p>
  <p className='absolute top-4 left-4 text-gray-300'>
    {like?<FaHeart></FaHeart>:<FaRegHeart></FaRegHeart>}
  </p>
    </div>
        </div>
                ))
                        }
                </div>
                
            </div>
        </div>
    );
};

export default AllMovies;