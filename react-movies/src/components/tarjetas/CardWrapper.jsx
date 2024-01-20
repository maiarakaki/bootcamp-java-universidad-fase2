import React from 'react'
import Tarjeta from '../tarjeta/Tarjeta'
import movies from '../../assets/movies.json'
import style from './CardWrapper.module.css'


const CardWrapper = () => {

  return (
        <div className='row gy-3'>
            {movies.map(x=>
                <Tarjeta
                    titulo={x.title} 
                    sinopsis={x.overview}
                    img={x.poster_path}
                    id={x.id}
                    key={x.id}/>
            )}
        </div>

  )
}

export default CardWrapper