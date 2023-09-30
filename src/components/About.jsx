// import User from "./User";
// import UserClassDummy from "./UserClassDummy";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is food delivery app named as HungryFoods</h2>;
      {/* <User name={"Vaibhav Zope (functional)"} /> */}
      {/* <UserClassDummy
        name={"Vaibhav Zope (class based component)"}
        location={"Pune"}
      /> */}
      <UserClass />
    </div>
  );
};

export default About;
