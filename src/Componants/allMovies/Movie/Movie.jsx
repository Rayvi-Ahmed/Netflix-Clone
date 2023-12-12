import React, { useState } from 'react';
import { FaRegHeart,FaHeart} from "react-icons/fa"

const Movie = ({item}) => {

    const [like,setLike]=useState(false)
    return (
      
            <div className='w-[160px] sm:w-[180px] md:[200px] lg:w-[220px] xl:w-[240px] cursor-pointer inline-block relative'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
             <div className='absolute top-0 left- w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
           <p className=' flex justify-center items-center whitespace-normal w-full h-full'>{item.title}</p>
             <p className='absolute top-4 left-4 text-gray-300'>
            {like?<FaHeart></FaHeart>:<FaRegHeart></FaRegHeart>}
  </p>
    </div>
        </div>
            
   
    );
};

export default Movie;