
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { planningProjects } from "@/data/planningProjects";
import { planningTestimonials } from "@/data/planningTestimonials";
import { useState } from "react";
import Head from "next/head";

export default function SpacePlanning() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % planningProjects.length);
  const prev = () => setIdx((i) => (i - 1 + planningProjects.length) % planningProjects.length);

  return (
    <div className="bg-black text-white min-h-screen">
      <Head><title>3D Visualization & Space Planning | Chams Media Creations</title></Head>
      <Navbar />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">3D Visualization & Space Planning</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Bring your vision to life with 3D renders and strategic layout planning.
        </p>
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <Image
            src={planningProjects[idx].image}
            alt={planningProjects[idx].title}
            width={800}
            height={500}
            className="rounded-lg"
            priority
          />
          <button onClick={prev} aria-label="Previous Slide" className="absolute left-0 ...">❮</button>
          <button onClick={next} aria-label="Next Slide" className="absolute right-0 ...">❯</button>
        </div>
        <h2 className="text-xl text-yellow-400 mt-4">{planningProjects[idx].title}</h2>
        <p className="text-lg max-w-2xl mx-auto mt-2">{planningProjects[idx].description}</p>
        <div className="mt-12">
          <h2 className="text-2xl text-yellow-400 mb-4">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="italic">"{planningTestimonials[0].feedback}"</p>
            <p className="mt-4 text-yellow-400 font-semibold">– {planningTestimonials[0].name}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
