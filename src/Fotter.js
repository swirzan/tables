import React from "react";

const Fotter = (props) => {
  const { currentDate } = props;

  const btnHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <>
      <fotter>{currentDate}</fotter>
      <button onClick={btnHandler}>Click me</button>
    </>
  );
};

export default Fotter;
