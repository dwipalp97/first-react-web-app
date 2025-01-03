import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantItem = ({ itemData }) => {
  console.log("itemData", itemData);
  return (
    <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
      <div className="w-9/12">
        <div className="py-2">
          <span className="text-lg">{itemData?.card?.info?.name}</span>
          <span className="px-2">
            {" "}
            ₹ {itemData?.card?.info?.defaultPrice / 100}
          </span>
        </div>
        <p className="text-xs">{itemData?.card?.info?.description}</p>
      </div>
      <div className="w-2/12">
      <div className="p-2 mx-16 rounded-lg shadow-lg bg-black absolute text-white text-xs">
        <button>Add +</button>
      </div>
        <img
          className="rounded-lg"
          src={`${IMAGE_BASE_URL}${itemData?.card?.info?.imageId}`}
        />
      </div>
    </div>
  );
};

export default RestaurantItem;
