import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-white to-red-50 min-h-screen py-12 px-6 md:px-20 text-red-900">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-red-200">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-700 border-b-4 border-red-600 inline-block pb-2">
          Contact Us
        </h1>
 {/* Promotional Tagline */}
        <p className="text-center text-lg text-red-800 mb-8 font-medium">
          Contact us to buy premium <span className="text-red-600 font-semibold">Marbles</span> and <span className="text-red-600 font-semibold">Tiles</span> at the best prices. <br />
          We guarantee top-notch quality and customer satisfaction.
        </p>
        <div className="space-y-8 mt-10">

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-red-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Our Location</h2>
              <p className="text-lg">
                Opposite Jai Kisan Cold Store,<br />
                Anmol Nagar, Old Tanda Road,<br />
                Hoshiarpur – 146001, Punjab
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-8 h-8 text-red-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Email Us</h2>
              <p className="text-lg">
                <a href="mailto:Mittalmarble@gmail.com" className="underline hover:text-red-700">
                  Mittalmarble@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-8 h-8 text-red-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Call Customer Care</h2>
              <p className="text-lg">
                <a href="tel:9855817010" className="underline hover:text-red-700">
                  98558 17010
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/mittal_marble"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow hover:bg-red-700 transition duration-300"
          >
            Visit Our Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
