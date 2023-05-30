import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetail from "./RestaurantDetail";

export default RestaurantInfo = () => {

    const {id} = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState({})

    useEffect(()=>{
        getRestaurantInfo();
    },[id])

    const getRestaurantInfo = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.701930899999999&lng=77.72807829999999&restaurantId=${id}`);
        const data = await response.json();
        console.log(data);
        setRestaurantDetails(data);
    }
    
    return (
        <div className="restaurant-info">
            <RestaurantDetail {...restaurantDetails?.data?.cards[0]?.card?.card?.info}/>
        </div>
    )
}