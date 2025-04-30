"use client";

import {
  Briefcase,
  Home,
  Info,
  Mail,
  Menu,
  User,
  UserPlus,
  X,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo.jpg"
            alt="Chams Media Logo"
            width={50}
            height={50}
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-semibold text-white tracking-wide">
            Chams_Media Creations
          </span>
        </Link>

        {/* Desktop Navigation with Icons */}
        <div className="hidden md:flex items-center ml-50 space-x-6">
          {[
            { name: "Home", href: "/", icon: <Home size={20} /> },
            { name: "About", href: "/about", icon: <Info size={20} /> },
            {
              name: "Services",
              href: "/services",
              icon: <Briefcase size={20} />,
            },
            { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative flex items-center space-x-2 text-gray-300 hover:text-[#d4af37] transition duration-300 group"
            >
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute left-0.5 bottom-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Search Bar + Login & Signup Icons (Desktop) */}
        <div className="hidden md:flex items-center ml-auto space-x-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-gray-900 text-white placeholder-gray-400 px-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition w-48"
          />

          {/* Login & Signup Icons */}
          <Link
            href="/login"
            className="text-gray-300 hover:text-[#d4af37] transition duration-300"
          >
            <User size={24} />
          </Link>
          <Link
            href="/signup"
            className="text-gray-300 hover:text-[#d4af37] transition duration-300"
          >
            <UserPlus size={24} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none ml-4"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Icons */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md p-4 space-y-4">
          {[
            { name: "Home", href: "/", icon: <Home size={24} /> },
            { name: "About", href: "/about", icon: <Info size={24} /> },
            {
              name: "Services",
              href: "/services",
              icon: <Briefcase size={24} />,
            },
            { name: "Contact", href: "/contact", icon: <Mail size={24} /> },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 text-gray-300 hover:text-[#d4af37] text-lg transition duration-300"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          {/* Mobile Search Bar */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-gray-900 text-white placeholder-gray-400 px-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition w-full"
          />

          {/* Login & Signup Icons (Mobile) */}
          <div className="flex justify-center space-x-6 pt-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#d4af37] transition duration-300"
            >
              <User size={28} />
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#d4af37] transition duration-300"
            >
              <UserPlus size={28} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
