import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetail from "./RestaurantDetail";
import useRestaurant from "../utils/useRestaurant";

export default RestaurantInfo = () => {

    const {id} = useParams();
    const restaurantDetails = useRestaurant(id);

    console.log(restaurantDetails)
    
    return (
        <div className="restaurant-info">
            <RestaurantDetail {...restaurantDetails?.data?.cards[0]?.card?.card?.info}/>
        </div>
    )
}