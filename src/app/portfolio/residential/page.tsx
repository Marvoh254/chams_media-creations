"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { residentialProjects } from "@/data/residentialProjects";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";

export default function ResidentialInterior() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % residentialProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + residentialProjects.length) % residentialProjects.length
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <br></br>
      <br></br>
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Residential Interior Design
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Transform your home into a masterpiece with our expert residential
          interior design services. We create functional, beautiful, and
          comfortable spaces tailored to your lifestyle.
        </p>

        {/* Gallery Slider */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <Image
            src={residentialProjects[currentIndex].image}
            alt={residentialProjects[currentIndex].title}
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
          {residentialProjects[currentIndex].title}
        </h2>
        <p className="text-lg max-w-2xl mx-auto mt-2">
          {residentialProjects[currentIndex].description}
        </p>

        {/* Testimonials */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            What Our Clients Say
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg italic">quot;{testimonials[0].feedback}quot;</p>
            <p className="mt-4 text-yellow-400 font-semibold">
              - {testimonials[0].name}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
