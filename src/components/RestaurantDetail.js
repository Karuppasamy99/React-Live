import React from 'react'
import { IMG_URL } from '../config'
const RestaurantDetail = ({cloudinaryImageId,city,slugs,cuisines}) => {
  return (
    <div className='h-80 w-80 shadow-xl justify-center m-10 hover:bg-slate-400 p-5'>
        <img src={IMG_URL + cloudinaryImageId} />
        <h4>{slugs?.restaurant.split('-').join(' ')}</h4>
        <h5>{cuisines?.join(',')}</h5>
        <p>{city}</p>
        
    </div>
  )
}

export default RestaurantDetail