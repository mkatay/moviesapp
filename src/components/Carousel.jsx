import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useQuery } from 'react-query';
import { getData,img_300 ,imgUnavailable} from '../utils';
import './Carousel.css'
const handleDragStart = (e) => e.preventDefault();

const responsive={
    0: {items:3},
    512:{items:5},
    1024:{items:7}
}

export const Carousel = ({type,id}) => {
    const urlCredits=`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`;
    const {data,status}=useQuery(['credits',urlCredits],getData)
    status=='success' && console.log(data.cast);

    const items=status=="success" ? data.cast.map(obj=>(
        <div className="carousel-item">
            <img src={obj.profile_path ? img_300+obj.profile_path : imgUnavailable} alt={obj?.name}
                onDragStart={handleDragStart}
                className='carousel-item-img'
            />
            <b className="carousel-item-text">{obj?.name}</b> 
        </div>
    )) :[]


  return (
    <AliceCarousel mouseTracking autoplay responsive={responsive} infinite 
        disableButtonsControls 
        disableDotsControls
        items={items} />
  );
}