import React from "react";
import MapCard from "./MapCard";

const TimeAndPlace = () => {
  return (
    <div className="container">
      <h2 className="heading">When & Where?</h2>
      <p className="date">Saturday, 11th January 2025</p>
      <p>From 7pm onwards</p>
      <MapCard />
    </div>
  );
};

export default TimeAndPlace;
