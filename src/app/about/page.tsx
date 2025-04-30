import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 underline">
          Chams_Media Creations
        </h1>

        <section className="max-w-3xl mx-auto text-lg leading-relaxed text-left">
          <p className="mb-8">
            Welcome to
            <span className="text-yellow-400 font-semibold">
              {" "}
              Chams_Media Creations
            </span>
            , where creativity meets functionality. We specialize in
            high-quality interior design services, transforming spaces into
            beautiful and functional environments.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Our Mission
          </h2>
          <p className="mb-8">
            Our mission is to deliver stunning, personalized interior solutions
            that enhance comfort and style while reflecting our clients' unique
            personalities and needs.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>Experienced team of designers and craftsmen</li>
            <li>Custom interior solutions tailored to your taste</li>
            <li>Attention to detail and high-quality materials</li>
            <li>Timely project delivery with client satisfaction</li>
          </ul>

          <div className="flex justify-center mt-6">
            <Link href="/contact">
              <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
