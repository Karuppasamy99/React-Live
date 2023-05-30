import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

import RestaurantCards from "./RestaurantCards"

function filterRestaurants(search , restaurants){
  const filterData = restaurants.filter(restaurant => restaurant?.data?.name?.toLowerCase().includes(search.toLowerCase()))
  return filterData
} 

export default Body = () => {
    const [search , setSearch] = useState("")
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
      getRestaurant();
    },[])

    async function getRestaurant(){
      try{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.701930899999999&lng=77.72807829999999&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      setAllRestaurant(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      }
      catch(err){
              console.log(err);
            }
      
    }

    return (allRestaurant.length===0)?<Shimmer />: (
        <>
        
        <input type="text" placeholder="Search Restaurants" value={search} name={search} onChange={ e => setSearch(e.target.value)} />
        <button onClick={() => {
          const data = filterRestaurants(search, allRestaurant);
          setFilteredRestaurants(data);
        }}>Search</button>
        <div className="body">
          { filteredRestaurants?.length > 0? filteredRestaurants.map( restaurant => {
            return <RestaurantCards {...restaurant.data} key={restaurant.data.id} />
          }): "no restaurant found"}  
            
        </div>
        </>
        
    )
}