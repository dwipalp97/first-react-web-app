import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {

    const [resData, setResData] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const menuData =   await fetch(RESTAURANT_MENU_URL+resId);

        const json= await menuData.json();
 
        console.log("json=====",json);
        setResData(json);
      
    }

    return resData;
}

export default useRestaurantMenu;