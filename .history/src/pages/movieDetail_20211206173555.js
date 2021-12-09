import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { movieState } from './src/movieState';


const MovieDetail = () => {
        const history = useHistory();
        const url = history.location.pathname;
        const [movies,setMovies] = useState(movieState);
        const [movie,setMovie] = useState(0);

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