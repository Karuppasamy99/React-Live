import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import RestaurantCards from "./RestaurantCards"
import { Link } from "react-router-dom" 
import { filterRestaurants } from "../utils/helper"
import useOnline from "../utils/useOnline"

export default Body = () => {
    const [search , setSearch] = useState("")
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const online = useOnline();
    
    useEffect(()=>{
      getRestaurant();
    },[])

    async function getRestaurant(){
      try{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.701930899999999&lng=77.72807829999999&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        setAllRestaurant(data?.data?.cards[0]?.data?.data?.cards);
        setFilteredRestaurants(data?.data?.cards[0]?.data?.data?.cards);
        console.log(data)
      }
      catch(err){
              console.log(err);
            }
      
    }

    if(!online){
      return <h1>Please check your internet connection</h1>
    }

   
    

    return (allRestaurant?.length===0)?<Shimmer />: (
        <>
        
        <input type="text" placeholder="Search Restaurants" value={search} name={search} onChange={ e => setSearch(e.target.value)} />
        <button onClick={() => {
          const data =filterRestaurants(search, allRestaurant);
          setFilteredRestaurants(data);
        }}>Search</button>
        <div className="body">
          { filteredRestaurants?.length > 0? filteredRestaurants.map( restaurant => {
            return <Link to={'/restaurant/'+restaurant.data.id} key={restaurant.data.id}><RestaurantCards className="restaurant-cards" {...restaurant.data}/></Link>
          }): "no restaurant found"}  
            
        </div>
        </>
        
    )
}