import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const portfolioItems = [
  {
    title: "Residential Interior Design",
    icon: "🏡",
    link: "/portfolio/residential",
  },
  {
    title: "Commercial Interior Design",
    icon: "🏢",
    link: "/portfolio/commercial",
  },
  {
    title: "Custom Furniture Design",
    icon: "🛋️",
    link: "/portfolio/furniture",
  },
  {
    title: "Ceiling & Lighting Design",
    icon: "💡",
    link: "/portfolio/ceiling-lighting",
  },
  {
    title: "Interior Styling & Décor",
    icon: "🎨",
    link: "/portfolio/styling-decor",
  },
  {
    title: "Space Planning & 3D Visualization",
    icon: "🏗️",
    link: "/portfolio/space-planning",
  },
  {
    title: "Outdoor & Landscape Design",
    icon: "🌿",
    link: "/portfolio/outdoor",
  },
  {
    title: "Smart Home & Sustainable Design",
    icon: "🌱",
    link: "/portfolio/smart-home",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <br></br>
      <br></br>
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Our Portfolio
        </h1>
        <p className="text-lg mb-8">
          Explore our diverse range of interior design works and completed
          projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-gray-800 p-6 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              <div className="flex flex-col items-center">
                <span className="text-5xl mb-4">{item.icon}</span>
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
