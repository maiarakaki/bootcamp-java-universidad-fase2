import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import movies from '../../assets/movies.json';
import {  Box, Button, Chip, LinearProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import genres from '../../assets/genres.json'
import style from './TarjetaDetalle.module.css'


export const TarjetaDetalle = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const [generos, setGeneros] = useState([]);

  useEffect(()=>{
    const currMovie = movies.filter(mov=> mov.id == id)[0];
    setMovie(currMovie);

    const movGenres = currMovie['genre_ids'];
    
    const filtered = genres.filter(genre=> movGenres.includes(genre.id));
    setGeneros(filtered);

  },[]);


  return (
    <>
    <Paper className={`container ${style.detailsContainer}`}>
      <Box className={style.innerBox}>
        <div className='row'>
          <div className='col-4 d-flex justify-content-center'>
            <img src={`https://www.themoviedb.org/t/p/w200${movie['poster_path']}`}/>
          </div>
          <div className='col'>
            <div className='row'>
              <h1>{movie.title}</h1>
              <div className='col-12'>
                Fecha de estreno: {movie['release_date']}
              </div>
              <div className='col-12'>
                Titulo original: {movie["original_title"]}
              </div>
              <div className='col-12'>
                {generos.map(x=> <Chip key={x.id} label={x.name}/>)}
              </div>
              <div className='col-12'>
                {movie.overview}
              </div>
              <div className='col-12'>
                Calificacion
                <div className='row align-items-center'>
                  <div className='col-10'>
                    <LinearProgress variant="determinate" value={movie['vote_average']*10}/>
                  </div>
                  <div className='col'>
                    {movie['vote_average']*10}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Link to={'/'}>
        <Button>Volver</Button>
      </Link>
    </Paper>
    </>
  )
}
