import { Spotlight } from "./ui/Spotlight";

export const ContactSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row relative overflow-hidden items-center justify-between min-h-screen bg-qubix-midnight text-white px-6 lg:px-24 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <Spotlight />

      {/* Left Content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Top website <br />
          <span className="text-white">Development company</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl">
          At SDLC CORP, we help brands transform their digital presence with
          cutting-edge web development solutions. Whether you need a sleek
          corporate site, a dynamic eCommerce store, or a robust web portal, we
          bring your vision to life with scalable, secure, and SEO-optimized
          websites.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition">
          <span>&#9993;</span> Schedule a Free Consultation
        </button>
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 bg-white text-black rounded-xl p-8 shadow-lg max-w-lg">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Request A Proposal
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="+1 (Country Code)"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="(510)-630-6507"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <select className="w-full border border-gray-300 rounded px-4 py-2">
            <option>Select Budget Range</option>
            <option>$1,000 - $5,000</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000+</option>
          </select>
          <textarea
            placeholder="Please share your detailed requirement"
            className="w-full border border-gray-300 rounded px-4 py-2 h-24"
          ></textarea>
          <input
            type="text"
            placeholder="What is 10 + 1?"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-qubix-pink  text-white font-medium py-2 rounded hover:bg-[#1d1b6a] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
