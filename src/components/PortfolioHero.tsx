"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PortfolioHero() {
     const router = useRouter();
 
   const handleClick = () => {
     router.push('/portfolio'); // replace with your target route
   };
  return (
    <section className="bg-qubix-midnight min-h-[70vh] my-[40px]  py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transforming <span className="text-qubix-pink">Ideas</span> into
            <br />
            Impactful Digital Experiences
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-xl">
            We design websites, build custom solutions, and grow your brand with
            strategic search engine optimisation. Let’s bring your vision to life.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="/portfolio">
              <button className="bg-qubix-pink text-white px-6 py-3 rounded-[20px] lg:rounded-full font-semibold hover:bg-qubix-midnight transition">
                View Portfolio
              </button>
            </Link>
            <Link
              href="/contact"
              // href="#contact"
              className="border border-qubix-pink text-qubix-pink px-6 py-3 rounded-[20px] lg:rounded-full font-semibold hover:bg-qubix-pink hover:text-white transition"
            >
              Call Us
            {/* </a> */}
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1">
          <img
            src="/images/illus.webp" // Placeholder illustration
            alt="Hero illustration"
            className="w-full  mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
