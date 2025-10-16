import { useEffect, useState } from "react";
import "./Timer.css";

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Timer({ targetDate }) {
  const [time, setTime] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="timer-container">
      <div className="timer-item">
        <span className="timer-value">{time.days}</span>
        <span className="timer-label">Days</span>
      </div>
      <div className="timer-item">
        <span className="timer-value">{time.hours}</span>
        <span className="timer-label">Hours</span>
      </div>
      <div className="timer-item">
        <span className="timer-value">{time.minutes}</span>
        <span className="timer-label">Minutes</span>
      </div>
      <div className="timer-item">
        <span className="timer-value">{time.seconds}</span>
        <span className="timer-label">Seconds</span>
      </div>
    </div>
  );
}