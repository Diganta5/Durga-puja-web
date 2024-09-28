import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timer, setTimer] = useState('00d 00h 00m 00s');

  useEffect(() => {
    const countdown = () => {
      const eventDate = new Date('2024-10-20');
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-center bg-hero-pattern">
      <div className="text-white p-8">
        <h2 className="text-4xl font-bold">Welcome to Durga Puja 2024</h2>
        <p className="mt-4 text-lg">Join us in celebrating the festival of divine energy and good triumphing over evil.</p>
        <div id="countdown-timer" className="mt-8">
          <h3 className="text-2xl font-semibold">Countdown to Durga Puja</h3>
          <p id="timer" className="text-xl mt-4">{timer}</p>
        </div>
        <a href="#schedule" className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full">View Schedule</a>
      </div>
    </section>
  );
};

export default Hero;
