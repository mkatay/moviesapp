import React,{useState} from 'react'
import {useQuery} from 'react-query'
import { getData } from '../utils'
import Stack from '@mui/material/Stack';
import { SingleChip } from './SingleChip';
import { useEffect } from 'react';


let x=''

const urlGenres=`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`

export const Genres = ({type,setUrlForGenre}) => {
  const [selectedGenres,setSelectedGenres] =useState([])
  useEffect(()=>{
    if(selectedGenres.length<1) setUrlForGenre('')
        else setUrlForGenre(selectedGenres.join(','))
  },[selectedGenres])

     x=type
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

