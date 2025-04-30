import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div
        className="flex-grow flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hm1.jpg')" }}
      >
        {/* Translucent Background for Text Area */}
        <section className="text-center bg-black/60 p-10 rounded-xl backdrop-blur-md shadow-lg">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Welcome to{" "}
            <span className="text-yellow-500">Chams_Media Creations</span>
          </h1>
          <p className="mt-4 text-lg text-white font-serif">
            Transforming spaces with elegance & style
          </p>
          <p className="mt-2 text-2xl font-semibold italic text-yellow-400">
            "Live Smarter, Live Better"
          </p>
          <a
            href="/portfolio"
            className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            View Our Work
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
