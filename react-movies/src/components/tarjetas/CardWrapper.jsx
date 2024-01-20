import React, { useState } from 'react'
import Tarjeta from '../tarjeta/Tarjeta'
import movies from '../../assets/movies.json'
import InfiniteScroll from 'react-infinite-scroll-component';


const CardWrapper = () => {
  const [items, setItems] = useState(movies.slice(0, 3));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextItems = movies.slice(items.length, items.length + 3);
      setItems([...items, ...nextItems]);

      setHasMore(items.length < movies.length);
    }, 500); 
  };

  return (
    

    
        <div className='row gy-3'>
            {items.map(x=>
                <Tarjeta
                    titulo={x.title} 
                    sinopsis={x.overview}
                    img={x.poster_path}
                    id={x.id}
                    key={x.id}/>
            )}
    <InfiniteScroll
    dataLength={items.length}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<h4>Cargando...</h4>}
    >
    </InfiniteScroll>
    </div>
  )
}

export default CardWrapper