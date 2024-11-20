// src/App.js
import React from "react";
import fruits from "../../fruites";

const Home = () => {
  return (
    <div className="">
      <div className="p-6">
        {/* হেডিং */}
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
          Welcome to Fruit Paradise 🍎🍇🍌
        </h1>

        {/* ডিসক্রিপশন */}
        <p className="text-lg text-gray-700 text-center mb-8">
          Fresh, juicy, and organic fruits delivered directly to your doorstep.
          Taste the freshness of nature every day!
        </p>

        {/* প্রোডাক্ট লিস্ট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fruits.slice(0,8).map((fruit, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-4 text-center shadow hover:shadow-lg"
            >
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">
                {fruit.name}
              </h3>
              <p className="text-center text-lg mt-2">
                Price: {fruit.price} tk / kg
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Add To Cart              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
