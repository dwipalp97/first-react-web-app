import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(-1);

  console.log(resId);

  if (resData == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;
  console.log(
    "cards",
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cardInfo) =>
        cardInfo?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <h4 className="font-bold text-lg">{cuisines.join(",")}</h4>
      <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.id}
          categoryData={category.card.card}
          showItem={index == showIndex && true}
          updateIndex={()=> {index!=showIndex ? setShowIndex(index) : setShowIndex(-1)}}
          index={index}
        />
      ))}

      {/* <ul>
                {itemCards && itemCards.map((restaurant)=> <li key={restaurant.card.info.id}>{restaurant.card.info.name} - {"Rs. "} {restaurant.card.info.price/100}</li>)}
                
            </ul> */}
    </div>
  );
};

export default RestaurantMenuCard;
