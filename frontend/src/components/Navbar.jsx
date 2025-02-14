import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-1 px-6 flex items-center justify-between w-full">
      
      {/* Left Section - Enlarged Logo (Keeps Navbar Height Fixed) */}
      <div className="flex items-center">
        <img 
          src="/ego.png" 
          alt="EGO Clothing" 
          className="h-16 w-auto -m-2"  // Increased size but keeps navbar height fixed
        />
      </div>

      {/* Center Section - Navigation Links */}
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li className="hover:text-black cursor-pointer">New Arrivals</li>
        <li className="hover:text-black cursor-pointer">Best Sellers</li>
        <li className="hover:text-black cursor-pointer">Apparel</li>
      </ul>

      {/* Right Section - Search, Login, and Account */}
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="border rounded-md px-2 py-1 text-sm"
        />
        <button className="text-gray-600 hover:text-black">Login</button>
        <button className="text-gray-600 hover:text-black">Account</button>
      </div>

    </div>
  );
};

export default Navbar;
