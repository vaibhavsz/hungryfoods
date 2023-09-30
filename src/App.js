import React, { useState, useEffect } from "react";
import "./App.css";
// Default import
import Header from "./components/Header";

// Named import
import { Title } from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

/**
 * Header
 * - Logo
 * - Nav Items (Right Side)
 * - Car
 *
 * Body
 * - Search Bar
 * - RestaurantCard
 *    - Image
 *    - Name
 *    - Rating
 *    - Cuisines
 *
 * Footer
 *    - links
 *    - copyright
 */

// Config driven UI
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // make api call and send username and password
    const data = {
      name: "Vaibhav Zope",
    };
    setUserName(data.name);
  }, []);

  return (
    <React.Fragment>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
        </UserContext.Provider>
        {/* <Title /> */}
        {/* <React.Fragment> */}
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </Provider>
      {/* </React.Fragment> */}
    </React.Fragment>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
