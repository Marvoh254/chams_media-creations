"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { commercialProjects } from "@/data/commercialProjects";
import { testimonials as commercialTestimonials } from "@/data/commercialTestimonials";
import { useState } from "react";
import Head from "next/head";

export default function Commercial() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % commercialProjects.length);
  const prev = () => setIdx((i) => (i - 1 + commercialProjects.length) % commercialProjects.length);

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Commercial Interior Design | Chams Media Creations</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Commercial Interior Design</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Create inspiring, functional commercial spaces that elevate your brand.
        </p>
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <Image
            src={commercialProjects[idx].image}
            alt={commercialProjects[idx].title}
            width={800}
            height={500}
            className="rounded-lg"
            priority
          />
          <button onClick={prev} aria-label="Previous Slide" className="absolute left-0 ...">❮</button>
          <button onClick={next} aria-label="Next Slide" className="absolute right-0 ...">❯</button>
        </div>
        <h2 className="text-xl text-yellow-400 mt-4">{commercialProjects[idx].title}</h2>
        <p className="text-lg max-w-2xl mx-auto mt-2">{commercialProjects[idx].description}</p>
        <div className="mt-12">
          <h2 className="text-2xl text-yellow-400 mb-4">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="italic">"{commercialTestimonials[0].feedback}"</p>
            <p className="mt-4 text-yellow-400 font-semibold">– {commercialTestimonials[0].name}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

