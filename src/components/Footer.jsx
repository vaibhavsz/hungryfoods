import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { loggedInUser } = useContext(UserContext);
  return <h1>footer: {loggedInUser}</h1>;
};

export default Footer;
