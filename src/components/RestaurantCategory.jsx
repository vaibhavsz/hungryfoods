import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log("Category DAta; ", data);

  const handleClick = () => {
    console.log("handle clicked.....");
    setShowIndex();
    // setShowItems(!showItems);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
