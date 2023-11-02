import React from "react";

const HomeScreenLoader = () => {
  return (
    <div className="relative self-center w-screen">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 mx-auto flex"></div>
      <h2 className="text-3xl text-gray-400 font-bold my-10 text-center">
        Loading some awesome products...
      </h2>
    </div>
  );
};

export default HomeScreenLoader;
