import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called...");

    this.state = {
      userInfo: {
        name: "dummy",
      },
    };
  }

  async componentDidMount() {
    console.log("componentDidMount called...");
    const data = await fetch("https://api.github.com/users/vzope");
    const json = await data.json(data);
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called...");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called...");
  }

  render() {
    console.log("render called...");

    const { name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h2 className="flex">
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h3 className="text-xl font-bold">{loggedInUser}</h3>
            )}
          </UserContext.Consumer>
        </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
