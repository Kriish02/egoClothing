import React from 'react'

import { useState, useEffect } from "react";

const messages = [
  "🔥 Limited Offer: 15% Off on All Products!",
  "🚀 Free Shipping Worldwide on Orders Above $50!",
  "💡 New Arrivals Now Available!",
  "🎉 Special Discount for New Users!",
  "Ego store - 'Ego is eveything'"
];

const RunBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black-600 text-white h-4 flex items-center m-1.5 justify-center overflow-hidden relative">
      <div key={index} className="absolute w-full text-center animate-scroll text-xs font-medium">
        {messages[index]}
      </div>
    </div>
  );
};

export default RunBar;
