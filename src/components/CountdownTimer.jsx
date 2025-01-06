import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const partyTime = new Date("Jan 11, 2025 19:00:00").getTime();
      let remainingTime = partyTime - currentTime;

      setTimeRemaining(remainingTime);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeRemaining]);

  const formatTime = (time) => {
    if (time < 0) {
      return <header className="countdown-message">CYA BYEEEEEE 🥳</header>;
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      return (
        <div className="countdown-display">
          <div className="countdown-value">
            <p className="time-value">{days.toString().padStart(2, "0")}</p>{" "}
            <p className="time-label">days</p>
          </div>
          <div className="countdown-value">
            <p className="time-value">{hours.toString().padStart(2, "0")}</p>
            <p className="time-label"> hours</p>
          </div>
          <div className="countdown-value">
            <p className="time-value">{minutes.toString().padStart(2, "0")}</p>{" "}
            <p className="time-label">minutes</p>
          </div>
          <div className="countdown-value">
            <p className="time-value">{seconds.toString().padStart(2, "0")}</p>{" "}
            <p className="time-label">seconds</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown-timer-container">
      <h3 className="subheading">Party countdown:</h3>
      <>{timeRemaining ? formatTime(timeRemaining) : "calculating..."}</>
    </div>
  );
};

export default CountdownTimer;
