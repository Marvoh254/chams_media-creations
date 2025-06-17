import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 underline">
          About Chamsmedia Creations
        </h1>

        <section className="max-w-3xl mx-auto text-lg leading-relaxed text-left">
          <p className="mb-8">
            Welcome to <span className="text-yellow-400 font-semibold">Chamsmedia Creations</span>, 
            your trusted partner in Nairobi for custom interiors and smart tech solutions.
            We specialize in designing and building beautiful kitchen units, wardrobes, cabinets,
            and furniture tailored to your style and space.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Our Mission</h2>
          <p className="mb-8">
            To deliver high-quality, personalized interior designs and IT solutions that
            transform your home or business into a space that’s both functional and inspiring.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Custom Interiors</h3>
              <p>
                Expertly crafted kitchen units, wardrobes, cabinets, and custom woodwork designed 
                to fit perfectly in your space, using quality materials and finishes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">IT & Tech Services</h3>
              <p>
                From setting up websites to providing IT support and smart home solutions, 
                we bring technology that makes your life easier and business more efficient.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>Years of hands-on experience in interiors and technology</li>
            <li>Customized solutions tailored to your needs and budget</li>
            <li>Reliable and timely project completion</li>
            <li>Based in Nairobi, with fast and flexible service</li>
            <li>Personalized customer care from start to finish</li>
          </ul>

          <div className="flex justify-center">
            <Link href="/contact">
              <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
