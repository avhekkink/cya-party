import React from "react";
import "../App.css";

const Donations = () => {
  const messageP1 =
    "Instead of selling these items on Vinted or Facebook Marketplace, I've decided to gift them to my nearest and dearest in the raffle instead.";
  const messageP2 =
    "I don't expect anything, but if you would like to donate to the bar tab to express your gratitude, I'll allow it.";
  const messageP3 =
    "Suggested amount £3-5. All proceeds will be going directly behind the bar against my redeemable deposit for the pub!";
  return (
    <div className="container">
      <h2 className="heading">Donations</h2>
      <div className="container">
        <p>INSERT MONZO LINK HERE</p>
        <p>{messageP1}</p>
        <p>{messageP2}</p>
        <p>
          <i>{messageP3}</i>
        </p>
      </div>
    </div>
  );
};

export default Donations;
