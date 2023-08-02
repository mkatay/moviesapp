import React from 'react'
import {img_300} from '../utils'
import { imgUnavailable } from '../utils'
import './SingleContent.css'
import { ContentModal } from './ContentModal'
import {LazyLoadImage} from 'react-lazy-load-image-component'

export const SingleContent = ({id,poster,title,type,date,vote}) => {
  return (
    <div style={{display: 'flex',marginBottom:'10px'}}>
    <ContentModal type={type} id={id}>
        {/*<img className="poster" src={poster ? img_300+poster : imgUnavailable} alt={title} />*/}
        <LazyLoadImage
            className="poster"
            src={poster ? img_300+poster : imgUnavailable}
            alt={title}
            maxWidth={300}
            maxHeight={300}
            placeholderSrc='placeholder.webp'
            effect="blur"
          />
        <h3>{title}</h3>
        <div className='info'>
            <span>{type}</span>
            <span>{date}</span>
        </div>
        <div className="vote">{vote}</div>
    </ContentModal>
    </div>
  )
}

