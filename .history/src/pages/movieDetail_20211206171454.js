import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import {movieState} from '../MovieState';


const movieDetail = () => {
        const history = useLocation();
        const url = location.pathname;
        const [movies,setMovies] = useState(movieState);
        const [movie,setMovie] = useState(nul);

        useEffect(() => { 
              const currentMovie = movies.filter(
                  (stateMovie) => stateMovie.url === url.pathname)
        })
    return (
    <div>
        <h1>movieDetail</h1>
    </div>
    )
}

export default movieDetail;