import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import restaurantList from "../utils/restaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local state variable
  // Whenever the state variable updates, react triggers the reconcilliation cycle (re-renders the component)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json data: ", json);
    const restaurantList =
      json?.data?.cards[2]?.card?.card.id === "top_brands_for_you"
        ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
    console.log("fetched data: ", restaurantList);
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "6239",
  //       name: "Chaitanya Paranthas",
  //       cloudinaryImageId: "xofljpukrkkbftsjospa",
  //       locality: "FC Road",
  //       areaName: "Shivajinagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Punjabi",
  //         "Chinese",
  //         "Thalis",
  //         "Beverages",
  //         "Desserts",
  //       ],
  //       avgRating: 4.1,
  //       veg: true,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "6279",
  //       name: "Dominos",
  //       cloudinaryImageId: "xofljpukrkkbftsjospa",
  //       locality: "FC Road",
  //       areaName: "Shivajinagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Pizza", "Cold Drinks", "Beverages"],
  //       avgRating: 2.5,
  //       veg: true,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "6269",
  //       name: "McDonalds",
  //       cloudinaryImageId: "xofljpukrkkbftsjospa",
  //       locality: "FC Road",
  //       areaName: "Shivajinagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Pizza", "Cold Drinks", "Beverages"],
  //       avgRating: 4.5,
  //       veg: true,
  //     },
  //   },
  // ];

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-4 p-4">
        <input
          type="text"
          className="search-box border border-solid border-black"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 m-4 bg-green-100 rounded-xl"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn px-4 py-2 bg-gray-100"
          onClick={() => {
            console.log("btton clicked");
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });
            setFilteredRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-cards flex flex-wrap justify-around">
        {/* Key should be added to parent most component which is iterating over map/for loop */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.2 ? (
                <RestaurantCardPromoted restaurant={restaurant.info}/>
              ) : (
                <RestaurantCard restaurant={restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
