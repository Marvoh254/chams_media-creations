import {
  Armchair,
  Briefcase,
  Cpu,
  Home,
  Lightbulb,
  Paintbrush,
  Ruler,
  Trees,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const services = [
  {
    title: "Residential Interior Design",
    icon: <Home size={24} className="text-yellow-400" />,
    description:
      "Transform your home with customized designs for living rooms, bedrooms, kitchens, and more.",
    details: [
      "Living Room Design",
      "Bedroom Design",
      "Kitchen Design",
      "Bathroom Design",
      "Home Renovation & Remodeling",
    ],
  },
  {
    title: "Commercial Interior Design",
    icon: <Briefcase size={24} className="text-yellow-400" />,
    description:
      "Enhance your business space with functional and stylish interior solutions.",
    details: [
      "Office Design",
      "Retail Store Design",
      "Hotel & Restaurant Interiors",
      "Salon & Spa Interiors",
    ],
  },
  {
    title: "Custom Furniture Design",
    icon: <Armchair size={24} className="text-yellow-400" />,
    description:
      "Craft unique furniture pieces tailored to fit your style and space.",
    details: [
      "Wardrobes & Closets",
      "Kitchen Cabinets",
      "TV Units & Wall Units",
    ],
  },
  {
    title: "Ceiling & Lighting Design",
    icon: <Lightbulb size={24} className="text-yellow-400" />,
    description:
      "Innovative ceiling and lighting solutions to elevate your space.",
    details: ["False Ceilings", "Lighting Solutions"],
  },
  {
    title: "Interior Styling & Décor",
    icon: <Paintbrush size={24} className="text-yellow-400" />,
    description:
      "Fine-tune your interiors with elegant décor and design elements.",
    details: ["Wall Treatments", "Flooring Solutions", "Curtains & Blinds"],
  },
  {
    title: "Space Planning & 3D Visualization",
    icon: <Ruler size={24} className="text-yellow-400" />,
    description:
      "Get a clear picture of your space with expert planning and 3D visualization.",
    details: [
      "3D Renderings & Floor Plans",
      "Furniture Arrangement & Optimization",
    ],
  },
  {
    title: "Outdoor & Landscape Design",
    icon: <Trees size={24} className="text-yellow-400" />,
    description:
      "Enhance your outdoor spaces with stylish and functional designs.",
    details: ["Balcony & Terrace Design", "Garden & Patio Interiors"],
  },
  {
    title: "Smart Home & Sustainable Design",
    icon: <Cpu size={24} className="text-yellow-400" />,
    description:
      "Upgrade your interiors with smart and eco-friendly solutions.",
    details: ["Home Automation", "Eco-Friendly Interiors"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />
      <br></br>
      <br></br>

      {/* Services Section */}
      <div className="bg-black text-white min-h-screen p-8">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          Our Interior Design Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                {service.icon}
                <h2 className="text-xl font-semibold text-yellow-400">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <ul className="mt-4 list-disc list-inside text-gray-400">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/portfolio"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
