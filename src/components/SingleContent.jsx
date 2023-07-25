import React from 'react'
import {img_300} from '../utils'
import { imgUnavailable } from '../utils'
import './SingleContent.css'

export const SingleContent = ({id,poster,title,type,date,vote}) => {
  return (
    <div className="single-content" id={id}>
        <img src={poster ? img_300+poster : imgUnavailable} alt={title} />
        <h3>{title}</h3>
        <div className='info'>
            <span>{type}</span>
            <span>{date}</span>
        </div>
        <div className="vote">{vote}</div>
    </div>
  )
}

