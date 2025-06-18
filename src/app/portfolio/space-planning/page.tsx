"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { planningProjects } from "@/data/planningProjects";
import { planningTestimonials } from "@/data/planningTestimonials";
import { useState } from "react";

export default function SpacePlanningPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % planningProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + planningProjects.length) % planningProjects.length
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          3D Visualization & Space Planning
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Experience your future space before it's built with our 3D visualization and precise space planning services.
        </p>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <Image
            src={planningProjects[currentIndex].image}
            alt={planningProjects[currentIndex].title}
            width={800}
            height={500}
            className="rounded-lg"
          />
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 py-2 rounded"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 py-2 rounded"
          >
            ❯
          </button>
        </div>

        <h2 className="text-xl font-semibold text-yellow-400 mt-4">
          {planningProjects[currentIndex].title}
        </h2>
        <p className="text-lg max-w-2xl mx-auto mt-2">
          {planningProjects[currentIndex].description}
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            What Our Clients Say
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg italic">"{planningTestimonials[0].feedback}"</p>
            <p className="mt-4 text-yellow-400 font-semibold">
              - {planningTestimonials[0].name}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
