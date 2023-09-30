import React from "react";

class UserClassDummy extends React.Component {
  constructor(props) {
    super(props);
    console.log("props: ", props);
    console.log("constructor called.. ");

    //best place to receive the props and initialise state variables
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  async componentDidMount() {
    console.log("componentDidMount called.. ");
    const data = await fetch("https://api.github.com/users/vzope");
    const json = await data.json();
    console.log("User Data: ", json);
  }

  render() {
    const { name, location } = this.props;
    console.log("render called.. ");

    return (
      <div className="user-card">
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            // never modify or update state variables directly.
            // this.state.count++;
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2 = {this.state.count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @vaibhavsz</h4>
      </div>
    );
  }
}

/**
 * - Parent Constructor
 * - Parent render
 *
 *   - FirstChild constructor
 *   - FirstChild render
 *
 *   - SecondChild constructor
 *   - SecondChild render
 *
 *  <DOM updates IN A SINGLE BATCH for all childs>
 *
 *   - FirstChild componentDidMount called
 *   - SecondChild componentDidMount called
 *
 * - Parent componentDidMount called
 */

export default UserClassDummy;
