import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import style from './Tarjeta.module.css';
import { Box } from '@mui/material';
        

const Tarjeta = (props) => {
  const [plot, setPlot] = useState('');

  useEffect(()=>{
    if(countChars(props.sinopsis) > 150) {
      trimPlot();
    } else {
      setPlot(props.sinopsis);
    }


  },[]);

  const countChars = (str) =>{
    return str.length;
  }

  const trimPlot = ()=>{
    setPlot(prev=> `${props.sinopsis.slice(0,150)}...`);
    
  }

  return (
    <div className='col-12 col-md-4'>
        <Card className={style.card}>
          <div className='container d-flex justify-content-center'>
              <CardMedia className={style.cardImg}
                  image={`https://www.themoviedb.org/t/p/w200${props.img}`}
              />

          </div>
          <CardContent>
            <h2>{props.titulo}</h2>
            <p>{plot}</p>
          </CardContent>
          <CardActions>
              <Button className={style.small}>Ver más</Button>
          </CardActions>
        </Card>
    </div>
  )
}

export default Tarjeta