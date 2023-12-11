import React from 'react';
import Banner from '../Componants/Banner/Banner';
import AllMovies from '../Componants/allMovies/AllMovies';
import requests from '../request';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AllMovies title={'Up comming'} fetchUrl={requests.requestUpcoming}></AllMovies>
         <AllMovies title={'Trending'} fetchUrl={requests.requestTrending}></AllMovies>
         <AllMovies title={'Popular'} fetchUrl={requests.requestPopular}></AllMovies>
         <AllMovies title={'Top Rated'} fetchUrl={requests.requestTopRated}></AllMovies>
         <AllMovies title={'Horror'} fetchUrl={requests.requestHorror}></AllMovies>
    
        </div>
    );
};

export default Home;


