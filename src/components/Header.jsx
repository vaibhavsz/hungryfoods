import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Title = () => {
  // return <h1 className="header-name">HungryFoods</h1>;
  return (
    <a className="flex" href="/">
      <img className="w-28" src="hungry-foods-logo.png" alt="app logo" />
      <h1 className="pt-10 font-bold text-4xl">HungryFoods</h1>
    </a>
  );
};

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems: ", cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-xl p-4">
      <Title />
      <div className="nav-items items-center">
        <ul className="flex p-5 m-5">
         
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
