import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});

  // Set the target date for Durga Puja (e.g., October 20, 2024)
  const targetDate = new Date('October 8, 2024 00:00:00').getTime();

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="bg-black bg-opacity-75 p-8 rounded-lg">
      <h3 className="text-white text-2xl md:text-3xl mb-4">
        COUNTDOWN TO DURGA PUJA
      </h3>
      <div className="text-yellow-300 text-3xl md:text-4xl mb-4">
        {`${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${timeLeft.seconds || 0}s`}
      </div>
      <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500">
        View Schedule
      </button>
    </div>
  );
};

export default CountdownTimer;
