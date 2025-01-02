import { Button } from "@mui/material";
import React from "react";

const Donations = () => {
  const messageP1 =
    "Rather than selling these items on Vinted or Facebook Marketplace, I've decided to gift them to my nearest and dearest in the raffle instead.";
  const messageP2 =
    "I don't expect anything, but if you would like to donate to the bar tab to express your gratitude, I'll allow it.";
  const messageP3 = "(Might sneak you a few extra tickets if you do too)";
  const messageP4 =
    "** all proceeds will be going directly behind the bar against my deposit for the pub!";
  return (
    <div className="container">
      <h2 className="heading">Donations</h2>
      <div className="container text-block">
        <p>{messageP1}</p>
        <p>{messageP2}</p>
        <p>{messageP3}</p>
        <img
          src={"public/images/Shut-Up-And-Take-My-Money-Fry.jpg"}
          width="100%"
        />
        <Button
          variant="outlined"
          size="large"
          color="#8fcb9b"
          className="donation-button"
          href="https://monzo.me/annahekkink?h=5hZfxx"
          target="_blank"
          rel="noopener"
        >
          Shut up and take my money
        </Button>
        <p className="text-block">
          <i>{messageP4}</i>
        </p>
      </div>
    </div>
  );
};

export default Donations;
