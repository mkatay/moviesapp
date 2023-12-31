import React from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'
import { SingleContent } from './SingleContent'
import { ContentPagination } from './ContentPagination'
import { useState} from 'react'

//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc`
//tesztre:
//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28,35,99`

const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`

export const Movies = ({urlForGenre}) => {
  const [page,setPage]=useState(1)
  const { data,status, isLoading, isError } = useQuery(['movies', urlMovies+'&page='+page+'&with_genres='+urlForGenre], getData);
      
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data!</div>;
  }
  status=='success' && console.log(data.results,data.total_pages);

return (
  <div className="content">
  
  {status=='success' && data.results.map(obj=>
    <SingleContent key={obj.id}
      id={obj.id}
      poster={obj.poster_path}
      title={obj.title || obj.name}
      type='movie'
      date={obj.release_date || obj.first_air_date}
      vote={obj.vote_average}
    />)}
 <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages>500? 500 : data.total_pages}/>   
</div>
)
}

