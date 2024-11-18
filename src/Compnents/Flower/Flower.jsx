import { useState, useEffect } from "react";
// import FlowerCard from "../components/FlowerCard";
import flowers from "../../flowers";
import FlowerCard from "../FlowerCard/FlowerCard";

const FlowerShopPage = () => {
//   const [flowers, setFlowers] = useState([]);

//   useEffect(() => {
//     setFlowers(flowersData); // Simulate fetching data
//   }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Our Flowers</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {flowers.map((flower) => (
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </div>
    </div>
  );
};

export default FlowerShopPage;
