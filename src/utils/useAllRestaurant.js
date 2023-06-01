import { useState, useEffect} from 'react'
import { ALL_RESTAURANT_URL } from '../config';

export default useAllRestaurant = () => {
    const [allRestaurants, setAllRestaurants] = useState(null);
    useEffect(()=>{
        getRestaurant();
    },[])
  
    async function getRestaurant(){
    try{
        const response = await fetch(ALL_RESTAURANT_URL);
        const data = await response.json();
        setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    }
    catch(err){
            console.log(err);
            }
    
    }
    return allRestaurants;
}