import React from "react";
import { Hammer, Droplet, Blocks, Wrench, Paintbrush, Layers } from "lucide-react";

const services = [
  {
    title: "Tiles",
    icon: <Blocks className="w-8 h-8 text-red-600" />,
    details: "Available in sizes 2×2, 2×4, 12×18, and 12×12 for all your wall and flooring needs."
  },
  {
    title: "Marble & Granite",
    icon: <Layers className="w-8 h-8 text-red-600" />,
    details: "Premium quality Marble and Granite for homes and commercial spaces."
  },
  {
    title: "Sanitary Products",
    icon: <Droplet className="w-8 h-8 text-red-600" />,
    details: "Urinals, Vanity units, faucets, and complete sanitaryware collection."
  },
  {
    title: "Plumbing Solutions",
    icon: <Wrench className="w-8 h-8 text-red-600" />,
    details: "M-Seal, Bondtite, Astral Pipes, PPR pipes – all trusted plumbing essentials."
  },
  {
    title: "Grouts",
    icon: <Paintbrush className="w-8 h-8 text-red-600" />,
    details: "High-quality tile grouts for long-lasting and clean tile joints."
  },
  {
    title: "White Cement",
    icon: <Hammer className="w-8 h-8 text-red-600" />,
    details: "Durable white cement for premium construction and finishing."
  }
];

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-white to-red-50 min-h-screen px-6 py-12 md:px-20 text-red-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-700 border-b-4 border-red-600 inline-block pb-2">
        Services We Offer
      </h1>

      <p className="text-center text-lg mb-10 max-w-3xl mx-auto text-gray-800">
        We deliver a wide range of services tailored to your needs — from tiles and marble to complete sanitary and plumbing solutions.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-red-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 space-y-4">
            <div className="flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-center text-red-700">{service.title}</h2>
            <p className="text-gray-700 text-sm text-center">{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
