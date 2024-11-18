const flowers = [
  {
    id: 1,
    name: "Rose",
    price: 50,
    image: "https://www.conklyns.com/assets/img/dictionary/rose-main.jpg",
  },
  {
    id: 2,
    name: "Tulip",
    price: 40,
    image:
      "https://www.colorblends.com/wp-content/uploads/2020/01/1505_BestPink_CGC9568sqII-1024x1024.jpg",
  },
  {
    id: 3,
    name: "Lily",
    price: 60,
    image:
      "https://bouqs.com/blog/wp-content/uploads/2023/08/lilly-8094912_1280-min-1080x720.png",
  },
  {
    id: 4,
    name: "Sunflower",
    price: 45,
    image:
      "https://www.peachtreepetals.com/cdn/shop/articles/all_about_sunflowers.jpg?v=1631036676&width=1600",
  },
  {
    id: 5,
    name: "Daisy",
    price: 35,
    image: "https://cdn.britannica.com/68/123068-050-00390894/Crown-daisy.jpg",
  },
  {
    id: 6,
    name: "Orchid",
    price: 80,
    image:
      "https://i0.wp.com/discoverandshare.org/wp-content/uploads/2023/01/Orchid_Show_Tom_Incrocci347-1.jpg?fit=600%2C450&ssl=1",
  },
  {
    id: 7,
    name: "Chrysanthemum",
    price: 55,
    image:
      "https://www.gardenia.net/wp-content/uploads/2023/08/shutterstock_1718631592Optimized.jpg",
  },
  {
    id: 8,
    name: "Peony",
    price: 70,
    image:
      "https://cdn.shopify.com/s/files/1/0579/2625/4781/t/14/assets/7fc917aa-2656-4fcd-8c59-1685279a5c4b-1684240692974.jpg?v=1684240694",
  },
  {
    id: 9,
    name: "Carnation",
    price: 45,
    image:
      "https://cdn.salla.sa/eQvjY/DtsTm58kwp3LAQDNXjkLjrZYk0dv1gWqqeqHohWH.jpg",
  },
  {
    id: 10,
    name: "Gerbera",
    price: 40,
    image: "https://www.satvai.com/wp-content/uploads/2018/10/Gerberas.jpg",
  },
  {
    id: 11,
    name: "Lavender",
    price: 60,
    image: "https://m.media-amazon.com/images/I/81euKzQpXjL.jpg",
  },
  {
    id: 12,
    name: "Iris",
    price: 50,
    image:
      "https://sciotogardens.com/wp-content/uploads/2020/08/Iris-versicolor-Blue-Flag-Iris-Flower-Detail-scaled.jpg",
  },
  {
    id: 13,
    name: "Zinnia",
    price: 30,
    image:
      "https://i0.wp.com/sownsow.com/wp-content/uploads/2022/09/How-to-grow-zinnia-flowers-from-seed.jpg?fit=1536%2C1097&ssl=1",
  },
  {
    id: 14,
    name: "Tulip (Purple)",
    price: 55,
    image:
      "https://www.coopersofstortford.co.uk/images/products/medium/K498i.jpg",
  },
  {
    id: 15,
    name: "Hibiscus",
    price: 50,
    image:
      "https://www.thespruce.com/thmb/mE9-28XFACXl657Q3efps9rbqaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hibiscus-growing-guide-5192541-hero-615db48a744245c49517f7f4bef54d18.JPG",
  },
  {
    id: 16,
    name: "Violet",
    price: 45,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/10/2020/01/2048x1365-Carols-pick-of-best-plants-for-colourful-containers-GettyImages-1185235271-0ee53ef.jpg",
  },
  {
    id: 17,
    name: "Jasmine",
    price: 65,
    image: "https://images.unsplash.com/photo-1562533551-83ca79a8fdbb",
  },
  {
    id: 18,
    name: "Begonia",
    price: 60,
    image: "https://images.unsplash.com/photo-1589914740874-6fc7b32ff57d",
  },
  {
    id: 19,
    name: "Freesia",
    price: 50,
    image: "https://images.unsplash.com/photo-1552233194-df5b18d5fc13",
  },
  {
    id: 20,
    name: "Amaryllis",
    price: 85,
    image: "https://images.unsplash.com/photo-1563890074-bf3ff2234b92",
  },
  {
    id: 21,
    name: "Aster",
    price: 45,
    image: "https://images.unsplash.com/photo-1571926118312-509a68d0629a",
  },
  {
    id: 22,
    name: "Cala Lily",
    price: 70,
    image: "https://images.unsplash.com/photo-1590608314245-56efb283a9ff",
  },
  {
    id: 23,
    name: "Calla Lily",
    price: 75,
    image: "https://images.unsplash.com/photo-1535518461106-6f674ae84693",
  },
  {
    id: 24,
    name: "Snapdragon",
    price: 40,
    image: "https://images.unsplash.com/photo-1562577303-d507ee29677e",
  },
  {
    id: 25,
    name: "Poppy",
    price: 45,
    image: "https://images.unsplash.com/photo-1580371946749-b85c7d803aa6",
  },
  {
    id: 26,
    name: "Fuchsia",
    price: 55,
    image: "https://images.unsplash.com/photo-1554189247-e6021b90bfe9",
  },
  {
    id: 27,
    name: "Lotus",
    price: 100,
    image: "https://images.unsplash.com/photo-1591393155539-2f2d01e88ff7",
  },
  {
    id: 28,
    name: "Bird of Paradise",
    price: 90,
    image: "https://images.unsplash.com/photo-1584620769926-07a2b2431d9e",
  },
  {
    id: 29,
    name: "Chives Flower",
    price: 30,
    image: "https://images.unsplash.com/photo-1572592240484-c4d31785e358",
  },
  {
    id: 30,
    name: "Geranium",
    price: 40,
    image: "https://images.unsplash.com/photo-1579255260696-97c68f4d1e4f",
  },
];


export default flowers;
