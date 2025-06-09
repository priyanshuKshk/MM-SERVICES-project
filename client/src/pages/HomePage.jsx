import React from "react";
import { Blocks, Layers, Droplet, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import orderAnimation from "../animations/order.json";
const featuredMarbles = [
  {
    id: 1,
    name: "Italian White Marble",
    image: "/images/italian-white-marbles.jpg",
    
  },
  {
    id: 2,
    name: "Makrana Marble",
    image: "/images/Makrana-White-Marble.jpg",
    
  },
  {
    id: 3,
    name: "Black Marquina",
    image: "/images/black-marquina.jpg",
  
  }
];

const servicesPreview = [
  { icon: <Blocks className="w-8 h-8 text-red-600" />, title: "Tiles" },
  { icon: <Layers className="w-8 h-8 text-red-600" />, title: "Marble & Granite" },
  { icon: <Droplet className="w-8 h-8 text-red-600" />, title: "Sanitary Products" },
  { icon: <Wrench className="w-8 h-8 text-red-600" />, title: "Plumbing Solutions" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50 text-red-900">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Text Content */}
      <div className="text-center md:text-left md:flex-1 max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-red-900">
          Premium Marble & Tile Solutions <br /> For Your Dream Spaces
        </h1>
        <p className="text-lg mb-10 text-gray-700">
          Quality craftsmanship, trusted service, and a wide range of options to transform your home or business.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-red-700 transition"
        >
          Contact Us to Buy Now
        </Link>
      </div>

      {/* Lottie Animation */}
      <div className="w-72 h-72 md:w-96 md:h-96">
        <Lottie animationData={orderAnimation} loop={true} />
      </div>
    </section>

      {/* Services Preview */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-700 border-b-4 border-red-600 inline-block pb-2 max-w-md mx-auto">
          Our Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
          {servicesPreview.map(({ icon, title }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-6 bg-red-50 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold text-red-700">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Gallery Snippet */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-700 border-b-4 border-red-600 inline-block pb-2 max-w-md mx-auto">
          Featured Marbles
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {featuredMarbles.map(({ id, name, image }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-red-50"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-700 mb-1">{name}</h3>
                
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            View All Marbles & Tiles
          </Link>
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="px-6 md:px-20 py-16 bg-white text-center rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-bold mb-4 text-red-700 border-b-4 border-red-600 inline-block pb-2 mx-auto max-w-md">
          Ready to Transform Your Space?
        </h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-6 text-lg">
          Contact us today to get the best deals on marbles, tiles, and more. Our expert team is here to help you find the perfect fit for your project.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
