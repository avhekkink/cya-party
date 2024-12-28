import React from "react";
import "./Countdown.css";

const Countdown = () => {
  const partyDate = new Date("01/11/2025");
  const today = new Date();
  const daysToGo = Math.floor((partyDate - today) / (1000 * 60 * 60 * 24));

  return <header className="countdown">{daysToGo} days to go...</header>;
};

export default Countdown;
