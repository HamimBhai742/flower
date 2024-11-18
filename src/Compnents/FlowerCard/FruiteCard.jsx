import { useState } from "react";

const FruiteCard = ({ fruit }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold text-center">{fruit.name}</h2>
      <p className="text-center text-lg mt-2">Price: {fruit.price} tk / kg</p>
      <button
        onClick={() => handleAddToCart(fruit)}
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FruiteCard;
