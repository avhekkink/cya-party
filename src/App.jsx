import React from "react";
import "./App.css";
import "./variables.css";
import Countdown from "./components/Countdown";
import TimeAndPlace from "./components/TimeAndPlace";
import Raffle from "./components/Raffle";
import Donations from "./components/Donations";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Countdown />
      </div>
      <div className="App-body">
        <TimeAndPlace />
        <Raffle />
        <Donations />
      </div>
    </div>
  );
};

export default App;
