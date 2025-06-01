"use client";

import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactPage";
import Footer from "@/components/Footer";
import GridItem from "@/components/GridItem";
import LottieAnimation from "@/components/LottieAnimation";
import Navbar from "@/components/Navbar"; // adjust path if needed
import PortfolioHero from "@/components/PortfolioHero";
import { ProcessStep } from "@/components/ProcessStep";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/Typewriter-effect";
import { CardDemo } from "@/components/WhoWeAreCard";
import { IconHomeQuestion, IconQuestionMark } from "@tabler/icons-react";
import {
  Box,
  CheckCircle,
  Code,
  ComputerIcon,
  Gem,
  Lightbulb,
  Lock,
  Power,
  Search,
  Settings,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-qubix-midnight text-white px-4 sm:px-6 py-10 overflow-x-hidden">
  <BackgroundBeamsWithCollision>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-12">
      {/* Text Content - Center aligned on mobile, left on desktop */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          The largest tech show
        </h1>

        <p className="text-qubix-blue text-2xl sm:text-3xl md:text-4xl mt-2 lg:mt-4">
          Where we present our brand
        </p>

        <p className="mt-4 text-qubix-soft-pink text-base sm:text-lg md:text-xl max-w-md lg:max-w-xl">
          Secure, private, and compliant models training with up-to-date knowledge...
        </p>

        <button className="mt-8 bg-qubix-pink text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-medium">
          Get a Free Consultation
        </button>
      </div>

      {/* Animation Section - Properly sized for all screens */}
     <div className="w-full lg:w-1/2 flex justify-center items-center">
  <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-full lg:h-auto">
    <LottieAnimation />
  </div>
</div>
    </div>
  </BackgroundBeamsWithCollision>

        {/* what we work */}
        <section className="max-w-7xl min-h-screen mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What We Work On
          </h2>

          <HoverEffect>
            <Card backgroundImage="/images/web-dev.avif">
              <div className="w-8 h-8 mb-3">
                <ComputerIcon />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using Next.js and Tailwind CSS.
              </p>
              <button className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition">
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/web-dev.avif">
              <div className="w-8 h-8 mb-3">
                <ComputerIcon />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using Next.js and Tailwind CSS.
              </p>
              <button className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition">
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/web-dev.avif">
              <div className="w-8 h-8 mb-3">
                <ComputerIcon />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using Next.js and Tailwind CSS.
              </p>
              <button className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition">
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/web-dev.avif">
              <div className="w-8 h-8 mb-3">
                <Code />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using Next.js and Tailwind CSS.
              </p>
              <button className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition">
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/web-dev.avif">
              <div className="w-8 h-8 mb-3">
                <ComputerIcon />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using Next.js and Tailwind CSS.
              </p>
              <button className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition">
                Learn More
              </button>
            </Card>
            <Card backgroundImage="/images/web-dev.avif">
              <div className="w-8 h-8 mb-3">
                <ComputerIcon />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using Next.js and Tailwind CSS.
              </p>
              <button className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition">
                Learn More
              </button>
            </Card>
          </HoverEffect>
        </section>
        <div className="w-[100%] flex justify-center items-center mt-2 mb-[50px]">
          <button className="bg-qubix-pink text-white rounded-md hover:bg-pink-600 transition py-4 px-8">
            View All Services
          </button>
        </div>

        <div className="w-full mt-[100px] mb-[100px]">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
            <GridItem
              icon={
                <Lightbulb className="h-10 w-10 text-black dark:text-white" />
              }
              title="Innovation Partners"
              description="We’re collaborators in your success. We bring fresh perspectives, cutting-edge technology, and a commitment to pushing boundaries, transforming your vision into groundbreaking solutions."
            />
            <GridItem
              icon={<Users className="h-10 w-10 text-black dark:text-white" />}
              title="We’re Humans"
              description="Being a good listener makes it all easier. Our consulting team will hear your pain areas, aspirations, and needs. This helps craft solutions that resonate with your brand and goals."
            />
            <GridItem
              icon={
                <CheckCircle className="h-10 w-10 text-black dark:text-white" />
              }
              title="People’s Choice"
              description="Our clients choose us because we don’t just deliver software — we deliver success, turning challenges into opportunities and visions into reality. We’re trusted globally for excellence in innovation."
            />
            <GridItem
              icon={<Gem className="h-10 w-10 text-black dark:text-white" />}
              title="Deliver Value for $"
              description="Excellence doesn’t have to come with a hefty price tag—just the right partner. With us, every dollar invested brings you closer to success, ensuring high-quality results without breaking the bank."
            />
          </div>
        </div>

        {/* Portfolio Hero Section
         */}
        <PortfolioHero />

        <section className="bg-[#e0ccd01b] py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Side (Image Placeholder) */}
            <div className="w-full md:w-1/2">
              {/* Replace this with your image */}
              {/* <div className="w-full h-96 bg-qubix-midnight rounded-xl shadow-md flex items-center justify-center">
              <span className="text-gray-600">Your Image Here</span>
            </div> */}
              <img src="/images/web-dev.avif" alt="" />
            </div>

            {/* Right Side (Text Content) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-qubix-pink">
                Increased Reach
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 text-white">
                On Your Website <br />
                With Our Reliable <br />
                SEO Services
              </h3>
              <p className="mt-4 text-white text-base sm:text-lg">
                With an aim to help your business break through barriers and
                achieve excellence in digital marketing, the best website
                designing company in India empowers your business to communicate
                efficiently to the world and surpass the limits of your
                imagination by fueling your growth engine and elevating your
                power.
              </p>
              <button className="mt-6 bg-qubix-pink text-white px-6 py-3 rounded-full text-sm sm:text-base shadow-lg">
                Contact Us <span className="ml-2">➤</span>
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            OUR <span className="text-white/60">PROCESS</span>
          </h2>
          <p className="mt-3 text-base text-white/70">
            See how our smooth, step-by-step process can turn your ideas into
            practical digital solutions.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <ProcessStep
              step={1}
              icon={<IconHomeQuestion className="text-fuchsia-400 size-20" />}
              title="Discovery"
              description="We start by understanding your goals."
            />
            <ProcessStep
              step={2}
              icon={<Settings className="text-fuchsia-400 size-20" />}
              title="Strategy"
              description="We create a custom plan customized to your needs."
            />
            <ProcessStep
              step={3}
              icon={<Wrench className="text-fuchsia-400 size-20" />}
              title="Development"
              description="We build and code your solution."
            />
            <ProcessStep
              step={4}
              icon={<Power className="text-fuchsia-400 size-20" />}
              title="Launch"
              description="We go live with the finished product."
            />
          </div>
        </section>

        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
