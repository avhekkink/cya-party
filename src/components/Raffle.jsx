import React from "react";
import ItemList from "./ItemList";

const Raffle = () => {
  const heading = "Raffle O'Clock!";
  const messageP1 =
    "Everyone will receive a raffle ticket on arrival - lucky you!";
  const messageP2 = "Later, I'll draw winning tickets from a hat.";
  const messageP3 =
    "If your number is called, you get to pick any prize from the table 🎉";
  const disclaimer =
    "** For bigger items there will be a printed version on the table, and you'll get the bonus of seeing me again when picking up from Bridge Avenue ❤";

  return (
    <div className="container">
      <h2 className="heading">{heading}</h2>
      <div className="container">
        <p>{messageP1}</p>
        <p>{messageP2}</p>
        <p>{messageP3}</p>
        <ItemList />
        <br />
        <p>
          <i>{disclaimer}</i>
        </p>
      </div>
    </div>
  );
};

export default Raffle;
