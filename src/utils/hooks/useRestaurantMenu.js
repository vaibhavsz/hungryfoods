import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_API_URL + resId);
    const json = await data.json();
    console.log("restaurant details: ", json?.data);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
