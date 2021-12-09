import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
//import { useHistory } from "react-router-dom";
import {movieState} from './src/movieState';


const movieDetail = () => {
        const history = useHistory();
        const url = history.location.pathname;
        const [movies,setMovies] = useState(movieState);
        const [movie,setMovie] = useState(nul);

        useEffect(() => { 
              const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        })
    return (
    <div>
        <h1>movieDetail</h1>
    </div>
    )
}

export default movieDetail;