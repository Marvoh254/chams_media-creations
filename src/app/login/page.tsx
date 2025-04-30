"use client";

import { Lock, Mail } from "lucide-react";

import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                className="pl-10 w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#d4af37]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="pl-10 w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#d4af37]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black py-2 rounded-md font-semibold hover:bg-[#b8952d] transition"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#d4af37] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
