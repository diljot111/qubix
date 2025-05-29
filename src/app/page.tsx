"use client";

import LottieAnimation from "@/components/LottieAnimation";
import Navbar from "@/components/Navbar"; // adjust path if needed


export default function Home() {
  return (
    <div className="min-h-screen bg-qubix-midnight text-white px-6 py-20">
            <Navbar />

      {/* <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-qubix-pink">QUBIX</h1>
        <button className="bg-qubix-pink text-white px-4 py-2 rounded-md hover:bg-pink-600">
          Book a Demo
        </button>
      </nav> */}

      <div className="mt-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="text-center lg:text-left lg:max-w-xl">
          <h2 className="text-5xl font-bold leading-tight">
            The largest tech show<br />
            <span className="text-qubix-blue">where we present our brand</span>
          </h2>
          <p className="mt-6 text-qubix-soft-pink max-w-2xl mx-auto lg:mx-0">
            Secure, private, and compliant models training with up-to-date knowledge...
          </p>
          <button className="mt-8 bg-qubix-pink text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition">
            Get a Free Consultation
          </button>
        </div>

        {/* Right Animation Section */}
        <div className="mt-12 lg:mt-0 lg:ml-10 flex justify-center items-center">
          <LottieAnimation />
        </div>
      </div>
    </div>
  );
}
