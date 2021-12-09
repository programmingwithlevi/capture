import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import {MovieState} from '../MovieState';


const movieDetail = () => {
        const history = useLocation();
        const url = location.pathname;
        const [movies,setMovies] = useState(MovieState);
        const [movie,setMovie] = useState(nul);

        useEffect(() => { 
              const currentMovie = movies.filter(
                  (stateMovie) => stateMovie.url === url)
        })
    return (
    <div>
        <h1>MovieDetail</h1>
    </div>
    )
}

export default MovieDetail;