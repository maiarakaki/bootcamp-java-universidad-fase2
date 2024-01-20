import React, { useState } from 'react'
import Tarjeta from '../tarjeta/Tarjeta'
import movies from '../../assets/movies.json'
import style from './CardWrapper.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';


const CardWrapper = () => {
  const [items, setItems] = useState(movies.slice(0, 3)); // Initial set of items
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // Simulate loading more data, you can replace this with your actual data fetching logic
    setTimeout(() => {
      const nextItems = movies.slice(items.length, items.length + 3);
      setItems([...items, ...nextItems]);

      // Update hasMore based on your data length or any other condition
      setHasMore(items.length < movies.length);
    }, 500); // Adjust the timeout as needed
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
    loader={<h4>Loading...</h4>}
    >
    </InfiniteScroll>
    </div>
  )
}

export default CardWrapper