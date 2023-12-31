import React,{useState} from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'
import Stack from '@mui/material/Stack';
import { SingleChip } from './SingleChip';
import { useEffect } from 'react';

export const Genres = ({type,setUrlForGenre}) => {
  const urlGenres=`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`
  const [selectedGenres,setSelectedGenres] =useState([])
  
  useEffect(()=>{
    if(selectedGenres.length<1) setUrlForGenre('')
        else setUrlForGenre(selectedGenres.join(','))
  },[selectedGenres])

    const { data,status, isLoading, isError } = useQuery(['genres', urlGenres], getData);
    
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error occurred while fetching data!</div>;
    }
    //status=='success' && console.log(data.genres);
console.log(selectedGenres);

  return (
    <Stack direction="row" spacing={1} sx={{dispaly:'flex',flexWrap:'wrap',justifyContent:'center',padding:'5px'}}>
     {status=='success' && data.genres.map(obj=>
        <SingleChip key={obj.id} {...obj} 
          selectedGenres={selectedGenres}   
          setSelectedGenres={setSelectedGenres} 
       
          />
      )}
  </Stack>
  )
}

