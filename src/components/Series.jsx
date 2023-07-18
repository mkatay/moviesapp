import React from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'


const urlSeries=`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`

export const Series = () => {
  const { data,status, isLoading, isError } = useQuery(['tv', urlSeries], getData);
    
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching images</div>;
  }
  status=='success' && console.log(data.results);

return (
  <div>Series</div>
)
}

