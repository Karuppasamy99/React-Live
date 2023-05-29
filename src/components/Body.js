import { useState } from "react"
import { restrauntList } from "../config"

import RestaurantCards from "./RestaurantCards"

export default Body = () => {
    const [search , setSearch] = useState("")
    const [restaurant, setRestaurant] = useState(restrauntList);
    // const [searchClicked, setSearchClicked] = useState(false)
    const searchHandler = () => {
        const filterData = restaurant.filter( restaurant => search !== restaurant.data.name );
        console.log(restaurant.data.name)
        setRestaurant(filterData)
        console.log(filterData)
    }
    console.log(search)
    return (
        <>
        <input type="text" placeholder="Search Restaurants" value={search} name={search} onChange={ e => setSearch(e.target.value)} />
        <button onClick={() => searchHandler}>Search</button>
        <div className="body">
          { !!restaurant && restaurant.map( restaurant => {
            return <RestaurantCards {...restaurant.data} key={restaurant.data.id} />
          })}  
            
        </div>
        </>
        
    )
}