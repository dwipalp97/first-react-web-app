import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedRestaurantcard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CONNECTION_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchRes, setSearchRes] = useState("");
    
    const RestaurantCardPromoted = withPromotedRestaurantcard(RestaurantCard);

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async() => {
      const res = await fetch(CONNECTION_URL);

       const json= await res.json();

      //console.log("json=====",json);
      //console.log("json.data=====",json.data);
      //console.log("json.data.restaurants=====",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(
        listOfRestaurants.length == 0 ? <Shimmer/>: (

        
      <div className="app-body">
        <div className="app-filter"> 
          <div className="m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchRes} onChange={(target)=> setSearchRes(target.target.value)}></input>
            <button className="px-4 py-2 bg-red-100 m-4 rounded-lg"onClick={()=>{
              console.log(searchRes);
              const filterList = listOfRestaurants.filter(res => {
                console.log(res.info.name);
                return res.info.name.toLowerCase().includes(searchRes.toLowerCase())
              });
              console.log(filterList);
              console.log(listOfRestaurants);
              setfilteredRestaurant(filterList);  
            }}>Search</button>

            <button className="px-4 py-2 bg-gray-100 mx-4 rounded-lg" onClick={()=>{
              const filterList = listOfRestaurants.filter(res => res.info.avgRating > 4)
              setfilteredRestaurant(filterList);
            }}>
            Top Rated Restaurants
          </button>
          </div>
        
          </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => {
            return <Link key={restaurant.info.id} to={`restaurant/${restaurant.info.id}`}> 
              {restaurant.info.isOpen ?  <RestaurantCardPromoted resData={restaurant}/> :  <RestaurantCard resData={restaurant}/>}
             </Link>
          }
         
          )}
       
        </div>
        </div>
    ))
  }
  
  export default Body;