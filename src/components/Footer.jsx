import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Chams_Media Creations. All rights
        reserved.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-2">
        <Link
          href="https://facebook.com/yourpage"
          target="_blank"
          className="hover:text-yellow-400"
        >
          <FaFacebook size={24} />
        </Link>
        <Link
          href="https://instagram.com/yourpage"
          target="_blank"
          className="hover:text-yellow-400"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          className="hover:text-yellow-400"
        >
          <FaTiktok size={24} />
        </Link>
        <Link
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:text-yellow-400"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://wa.me/254742721979"
          target="_blank"
          className="hover:text-yellow-400"
        >
          <FaWhatsapp size={24} />
        </Link>
      </div>
    </footer>
  );
}
