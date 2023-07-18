import React from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'


const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`

export const Movies = () => {
  const { data,status, isLoading, isError } = useQuery(['movies', urlMovies], getData);
    
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching images</div>;
  }
  status=='success' && console.log(data.results);

return (
  <div>Movies</div>
)
}

