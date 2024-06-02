import React from "react";

const Header = () => {
  return (
    <div className="bg-black py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Abstract | Help Center
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-400 border-2 mt-4 text-white py-2 px-4 rounded shadow-inner">Submit a request</button>
          <button className="bg-blue-600 border-2 mt-4 text-white py-2 px-4 rounded">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
