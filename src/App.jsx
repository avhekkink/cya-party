import React from "react";
import "./App.css";
import "./variables.css";
import TimeAndPlace from "./components/TimeAndPlace";
import Raffle from "./components/Raffle";
import Donations from "./components/Donations";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <CountdownTimer />
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
