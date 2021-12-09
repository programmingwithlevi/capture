import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { MovieState } from '../movieState';


const MovieDetail = () => {
        const history = useNavigate();
        const url = history.location;
        const [movies,setMovies] = useState(MovieState);
        const [movie,setMovie] = useState(null);

        useEffect(() => { 
              const currentMovie = movies.filter(
                  (stateMovie) => stateMovie.url === url)
                  setMovie(currentMovie[0]);
        }, [movies,url]);
    return (
        <>
        {movie && (
    <Details>
        <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
        </HeadLine>
    </Details>
        )}
    </>
    )
}

const Details = styled.div`

`
const HeadLine = styled.div`

`


export default MovieDetail;