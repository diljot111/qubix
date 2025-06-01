"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { link } from "fs";
import { useState } from "react";

import { CheckCircle, Globe, Timer, Star } from "lucide-react";
const categories = [
  "All",
  "Website Development",
  // "UI/UX Design",
  // "Marketing",
  "Custom Solutions",
];

const projects = [
  {
    title: "Grocery Ecommerce Website",
    category: "Website Development",
    image: "/images/grocery-website.png",
    link: "https://grocerit.netlify.app/",
  },
  {
    title: "Ecommerce Shopping Website",
    category: "Website Development",
    image: "/images/ecommerce-shopping.png",
    link: "https://www.oxabags.com/",
  },
  {
    title: "Sass Solutions",
    category: "Custom Solutions",
    image: "images/custom-website-2.png",
    link: "https://ai-seo-roan.vercel.app/",
  },
  {
    title: "Custom Sites That Decode Your Vision",
    category: "Custom Solutions",
    image: "images/custom-website.png",
    link: "https://purepick.vercel.app",
  },
  
];
const features = [
  {
    icon: <Globe className="text-qubix-pink w-6 h-6" />,
    title: "Global Reach",
    desc: "Serving clients across US, UK & Canada with customized digital solutions.",
  },
  {
    icon: <Timer className="text-qubix-pink w-6 h-6" />,
    title: "Quick Turnarounds",
    desc: "Fast delivery with no compromise on quality. Startup agile, enterprise sharp.",
  },
  {
    icon: <CheckCircle className="text-qubix-pink w-6 h-6" />,
    title: "Reliable Results",
    desc: "Every project handled with care, clarity, and commitment to excellence.",
  },
  {
    icon: <Star className="text-qubix-pink w-6 h-6" />,
    title: "Client Satisfaction",
    desc: "We grow through word of mouth—because happy clients tell others.",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <section className="bg-qubix-midnight text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-qubix-pink text-center mb-4">
            BROWSE THROUGH OUR{" "}
            <span className="text-qubix-blue">PORTFOLIO</span>
          </h2>
          <p className="text-center text-qubix-soft-pink mb-10">
            With promise to deliver the best quality
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-qubix-blue text-qubix-midnight"
                    : "bg-white text-qubix-midnight hover:bg-qubix-soft-pink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                  onClick={() => window.open(project.link, "_blank")}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-qubix-midnight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why choose us section */}
      <section className="bg-white dark:bg-qubix-midnight py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold dark:text-qubix-pink text-qubix-midnight mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            As a growing startup, we focus on delivering world-class websites
            and branding solutions at speed, with full attention to detail and
            global standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 px-6 py-8 rounded-xl bg-white  shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-qubix-midnight mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
