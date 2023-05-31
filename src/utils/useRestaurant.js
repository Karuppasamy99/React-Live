import { RESTAURANT_INFO_URL } from "../config";
import { useState, useEffect } from "react";

export default useRestaurant = (id) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    const getRestaurantInfo = async () => {
        const response = await fetch(`${RESTAURANT_INFO_URL}${id}`);
        const data = await response.json();
        console.log(data);
        setRestaurantDetails(data);
    }

    return restaurantDetails;

}
