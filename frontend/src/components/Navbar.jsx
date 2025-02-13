import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="EGO Clothing" className="h-10 w-auto" />  
        {/* Replace /logo.png with your actual logo path */}
      </div>

      {/* Center Section - Navigation Links */}
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li className="hover:text-black cursor-pointer">New Arrivals</li>
        <li className="hover:text-black cursor-pointer">Best Sellers</li>
        <li className="hover:text-black cursor-pointer">Apparel</li>
      </ul>

      {/* Right Section - Search, Login, Account */}
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
