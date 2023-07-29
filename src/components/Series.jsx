import React from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'
import { SingleContent } from './SingleContent'
import { ContentPagination } from './ContentPagination'
import { useState} from 'react'

const urlSeries=`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`

export const Series = ({urlForGenre}) => {
  const [page,setPage]=useState(1)
  const { data,status, isLoading, isError } = useQuery(['tv', urlSeries+'&page='+page+'&with_genres='+urlForGenre], getData);
    
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching images</div>;
  }
  status=='success' && console.log(data.results);

return (
  <div className="content">
  {status=='success' && data.results.length>0 ? 
    data.results.map(obj=>
    <SingleContent key={obj.id}
      id={obj.id}
      poster={obj.poster_path}
      title={obj.title || obj.name}
      type='TV Series'
      date={obj.release_date || obj.first_air_date}
      vote={obj.vote_average}
    />)
  :
  <div>no results found</div>
  }
 <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages>500? 500 : data.total_pages}/>   
</div>
)
}

