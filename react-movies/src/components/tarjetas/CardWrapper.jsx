import React from 'react'
import Tarjeta from '../tarjeta/Tarjeta'
import movies from '../../assets/movies.json'
import style from './CardWrapper.module.css'
import { Grid } from '@mui/material'

const CardWrapper = () => {
    console.log(movies);

  return (
        <div className='row'>
            {movies.map(x=>
                <Tarjeta
                    titulo={x.title} 
                    sinopsis={x.overview}
                    img={x.poster_path}/>
            )}
        </div>

  )
}

export default CardWrapper