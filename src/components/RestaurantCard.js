import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props)=> {
  const  {resData} = props;
    return(
     <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-red-100 hover:bg-red-500">
        <img
             className="w-[100%] h-[150px] rounded-lg"
            
             src={`${IMAGE_BASE_URL}${resData.info.cloudinaryImageId}`}
           />
       <h3 className="font-bold text-lg py-4">{resData.info.name}</h3>
       <h4 className="break-words"> {resData.info.cuisines.toString()}</h4>
       <h4>{resData.info.avgRating} stars</h4>
       <h4>{resData.info.sla.deliveryTime} mins</h4>
     </div>
    )
}

export default RestaurantCard;

export const withPromotedRestaurantcard = (RestaurantCard)=> {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 rounded-lg text-white bg-black absolute">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}