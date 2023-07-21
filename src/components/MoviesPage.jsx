import React from 'react'
import { useState } from 'react'
import { Genres } from './Genres'
import { Movies } from './Movies'

export const MoviesPage = () => {
    const [urlForGenre,setUrlForGenre] =useState('')
  return (
    <div className="content">      
    <Genres type='movie' setUrlForGenre={setUrlForGenre}/>
    <Movies urlForGenre={urlForGenre}/>
    </div>
  )
}
