import { useState, useEffect } from "react";
import FlowerCard from "../FlowerCard/FruiteCard";
import fruits from "../../fruites";
import FruiteCard from "../FlowerCard/FruiteCard";

const FlowerShopPage = () => {
//   const [flowers, setFlowers] = useState([]);

//   useEffect(() => {
//     setFlowers(flowersData); // Simulate fetching data
//   }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Our Fruits</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {fruits.map((fruit) => (
          <FruiteCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default FlowerShopPage;
