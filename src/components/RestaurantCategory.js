import React, { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantCategory = ({ categoryData,showItem, updateIndex }) => {

  const updateRestaurantItemVisibility = () => {
    updateIndex();
  }
  console.log("categoryData", categoryData);
  return (
    <div>
      <div className="w-6/12 my-4 p-4 mx-auto bg-red-200 rounded-lg shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={updateRestaurantItemVisibility}>
          <span className="font-bold">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span>{"⌄"}</span>
        </div>
        <div>
          {showItem && categoryData?.itemCards.map((item) => (
            <RestaurantItem key={item?.card?.info?.id} itemData={item} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
