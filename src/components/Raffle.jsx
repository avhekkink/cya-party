import React from "react";
import ItemList from "./ItemList";

const Raffle = () => {
  const heading = "Raffle O'Clock!";
  const messageP1 =
    "Instead of selling the raffle tickets, everyone will receive one on arrival - lucky you!";
  const messageP2 =
    "Later, I'll draw winning tickets from a hat. If your number gets called, you can pick a prize from the table.";
  const disclaimer =
    "** For bigger items there will be a printed version on the table, and you'll get the bonus of seeing me again when picking up from Bridge Avenue ❤";

  return (
    <div className="container">
      <h2 className="heading">{heading}</h2>
      <div className="container">
        <p>{messageP1}</p>
        <p>{messageP2}</p>
        <div className="container">INSERT RAFFLE PRIZES HERE</div>
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
