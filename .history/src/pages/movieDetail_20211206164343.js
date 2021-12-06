import React,{useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { movieState } from '../movieState';


const movieDetail = () => {
        const history = useHistory();
        const url = history.location.pathname;
        const [movies,setMovies] = useState(MovieState);
    return (
    <div>
        <h1>movieDetail</h1>
    </div>
    )
}

export default movieDetail;