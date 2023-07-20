import React from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'
import { SingleContent } from './SingleContent'
import { ContentPagination } from './ContentPagination'
import { useState } from 'react'
import { Genres } from './Genres'


//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc`
//tesztre:
//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28,35,99`

const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`

export const Movies = () => {
  const [page,setPage]=useState(1)
  const { data,status, isLoading, isError } = useQuery(['movies', urlMovies+'&page='+page], getData);
    
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data!</div>;
  }
  status=='success' && console.log(data.results);

return (
  <div className="content">
    <Genres type='movie'/>
  {status=='success' && data.results.map(obj=>
    <SingleContent key={obj.id}
      id={obj.id}
      poster={obj.poster_path}
      title={obj.title || obj.name}
      type={obj.media_type}
      date={obj.release_date || obj.first_air_date}
      vote={obj.vote_average}
    />)}
 <ContentPagination setPage={setPage} numOfPage={10}/>   
</div>
)
}

