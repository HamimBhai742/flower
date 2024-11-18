const FlowerCard = ({ flower }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={flower.image}
        alt={flower.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-bold">{flower.name}</h2>
      <p className="text-gray-700">${flower.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600">
        Add to Cart
      </button>
    </div>
  );
};

export default FlowerCard;
