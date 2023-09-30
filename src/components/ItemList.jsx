import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log("items: ", items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="text-left p-2 m-2 border-gray-200 border-b-2 flex"
          >
            <div className="w-9/12 p-4">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="bg-black text-white rounded-lg p-2 mx-16 shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={`${IMG_CDN_URL}${item.card.info.imageId}`} alt="item" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
