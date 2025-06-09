import React from "react";

// Sample data
const marbleItems = [
  {
    id: 1,
    name: "Italian White Marble",
    image: "/images/italian-white-marbles.jpg", // place image in public/images/
    description: "Premium quality Italian marble with glossy finish.",
  
  },
  {
    id: 2,
    name: "Makrana Marble",
    image: "/images/Makrana-White-Marble.jpg",
    description: "Traditional Makrana marble, highly durable and elegant.",
  
  },
  {
    id: 3,
    name: "Black Marquina",
    image: "/images/black-marquina.jpg",
    description: "Black marble with striking white veins – perfect for flooring.",
  
  },
  {
    id: 4,
    name: "Golden Spider",
    image: "/images/golden-spider.jpg",
    description: "Eye-catching golden veined marble – a luxury choice.",
  
  }
];

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-12 md:px-20 text-red-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-700 border-b-4 border-red-600 inline-block pb-2">
        Marble Gallery
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {marbleItems.map((item) => (
          <div
            key={item.id}
            className="bg-red-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-red-700">{item.name}</h2>
              <p className="text-gray-700">{item.description}</p>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
