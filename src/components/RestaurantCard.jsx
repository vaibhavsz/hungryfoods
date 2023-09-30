import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant;
  return (
    <div className="res-card m-4 p-4 w-[250px] flex flex-col h-[350px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt={name}
        className="h-40 rounded-lg"
      />
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>⭐ {avgRating}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white p-2 m-2 rounded-s-lg">
          Star Rated
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
