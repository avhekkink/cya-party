import React from "react";
import ItemList from "./ItemList";

const Raffle = () => {
  const heading = "Raffle O'Clock!";
  const subheading = "\'Leaving you with a piece of me\'";
  const messageP1 =
    "Everyone will receive a raffle ticket on arrival - lucky you!";
  const messageP2 = "Later on, I'll draw winning tickets from a hat.";
  const messageP3 =
    "If your number is called, you get to pick any prize from the table* 🎉";
  const disclaimer =
    "* for bigger items there will be a printed version on the table, and you'll get the bonus of seeing me again when picking up from Bridge Avenue ❤";

  return (
    <div className="container">
      <h2 className="heading">{heading}</h2>
      <h3 className="subheading">
        <i>{subheading}</i>
      </h3>
      <div className="container">
        <p className="text-block">{messageP1}</p>
        <p className="text-block">{messageP2}</p>
        <p className="text-block">{messageP3}</p>
      </div>
      <ItemList />
      <br />
      <p>
        <i>{disclaimer}</i>
      </p>
    </div>
  );
};

export default Raffle;
