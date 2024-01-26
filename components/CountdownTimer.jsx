'use client';
import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="text-center font-mono">
      <div className="flex justify-center grid grid-cols-4 gap-4">
        <div>
          <p className="font-bold text-2xl">{timeLeft.days}</p>
          <div>D</div>
        </div>
        <div>
          <div className="font-bold text-2xl">{timeLeft.hours}</div>
          <div>H</div>
        </div>
        <div>
          <div className="font-bold text-2xl">{timeLeft.minutes}</div>
          <div>M</div>
        </div>
        <div>
            <div className="font-bold text-2xl">{timeLeft.seconds.toString().padStart(2,'0')}</div>
          <div>S</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
