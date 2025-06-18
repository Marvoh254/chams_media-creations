import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

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
    title: "Interior Styling & Décor",
    icon: "🎨",
    link: "/portfolio/styling-decor",
  },
  {
    title: "3D Visualization & Space Planning",
    icon: "🏗️",
    link: "/portfolio/space-planning",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Our Portfolio | Chams Media Creations</title>
        <meta
          name="description"
          content="Explore our featured interior design projects and creative solutions by Chams Media Creations."
        />
      </Head>

      <Navbar />
      <br />
      <br />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Our Portfolio
        </h1>
        <p className="text-lg mb-8">
          Explore our featured interior design projects and creative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <Link key={index} href={item.link} passHref legacyBehavior>
              <a
                className="block bg-gray-800 p-6 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer"
                aria-label={`View portfolio for ${item.title}`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-5xl mb-4">{item.icon}</span>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
