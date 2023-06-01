import React from 'react'
import useAllRestaurant from '../utils/useAllRestaurant'
import RestaurantCards from './RestaurantCards';

const Restaurants = () => {
    const restaurant = useAllRestaurant();
    console.log(restaurant)
  return (
    <div>
        
        {/* <div className="restaurant">
            <img src={`${IMG_URL}${restaurant?.data?.cloudinaryImageId}`} />
            <h3>{restaurant?.data?.name}</h3>
            <h4>{restaurant?.data?.cuisines?.join(',')}</h4>
            <h5>{restaurant?.data?.avgRating}</h5>
        </div> */}
        {restaurant && restaurant.map(restaurant => <RestaurantCards key={restaurant.data.id} {...restaurant.data} />)}
        
    
    </div>
  )
}

export default Restaurants