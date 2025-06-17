import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("Thanks for reaching out! We will get back to you soon.");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <br />
      <br />

      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400">Get in Touch</h1>
        <p className="text-gray-300 mt-2">
          Have questions or need a design consultation? Reach out to us!
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">
            <FaPhone size={28} className="text-yellow-300 mx-auto" />
            <h2 className="text-lg mt-2">Call Us</h2>
            <p className="text-gray-400">+254 742721979</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <FaEnvelope size={28} className="text-yellow-300 mx-auto" />
            <h2 className="text-lg mt-2">Email Us</h2>
            <p className="text-gray-400">info@chamsmedia.ke</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <FaMapMarkerAlt size={28} className="text-yellow-300 mx-auto" />
            <h2 className="text-lg mt-2">Visit Us</h2>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
        </div>

        <div className="mt-10 bg-gray-900 p-8 rounded-xl">
          <h2 className="text-2xl text-yellow-300 mb-4">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-yellow-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-yellow-400"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-yellow-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className="mt-4 text-green-400 font-semibold">{formStatus}</p>
          )}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl text-yellow-300">Find Us Here</h2>
          <iframe
            className="w-full h-64 mt-4 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.323572503586!2d36.8219468!3d-1.2863899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173b2b116a0f%3A0x3b0d5b72e97c2a51!2sNairobi!5e0!3m2!1sen!2ske!4v1673523545000!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:text-yellow-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:text-yellow-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:text-yellow-400"
          >
            <FaTiktok />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:text-yellow-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/254742721979"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:text-yellow-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
