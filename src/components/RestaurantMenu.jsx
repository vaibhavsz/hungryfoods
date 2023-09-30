// import { useState, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
// import { RESTAURANT_MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // const fetchMenu = async () => {
  //   const data = await fetch(`${RESTAURANT_MENU_API_URL}${resId}`);

  //   const json = await data.json();
  //   console.log("restaurant details: ", json?.data); //cards[0]?.card?.card?.info
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;

  const menuCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  // const { title: cardTitle, itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
  //     .title === "Recommended"
  //     ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
  //     : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
  //         .card;

  const { title: cardTitle, itemCards } =
    menuCards[1].card.card.title === "Recommended"
      ? menuCards[1].card.card
      : menuCards[2].card.card;

  console.log("cardTitle: ", cardTitle);
  const catagories = menuCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="res-menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {catagories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (index === showIndex) {
              setShowIndex(!showIndex);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
      <ul>
        {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))} */}
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
