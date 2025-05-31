"use client";

import { Card } from "@/components/Card";
import Footer from "@/components/Footer";
import GridItem from "@/components/GridItem";
import LottieAnimation from "@/components/LottieAnimation";
import Navbar from "@/components/Navbar"; // adjust path if needed
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

      <div className="min-h-screen  bg-qubix-midnight text-white px-6 ">
        <BackgroundBeamsWithCollision>
          <div className=" flex flex-col lg:flex-row items-center pl-10 justify-between">
            <div className=" w-[50%] flex justify-center items-start flex-col  text-center lg:text-left lg:max-w-xl">
              <TypewriterEffect className="text-5xl font-bold leading-tight">
                The largest tech show
              </TypewriterEffect>
              <br />
              <span className="text-qubix-blue text-5xl">
                where we present our brand
              </span>
              <p className="mt-6 text-qubix-soft-pink max-w-2xl mx-auto lg:mx-0">
                Secure, private, and compliant models training with up-to-date
                knowledge...
              </p>
              <button className="mt-8 bg-qubix-pink text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition">
                Get a Free Consultation
              </button>
            </div>

            {/* Right Animation Section */}
            <div className="flex justify-center items-center w-[50%]">
              <LottieAnimation />
            </div>
          </div>
          {/* <BackgroundBeams />
           */}
        </BackgroundBeamsWithCollision>

        {/* what we work */}
        <section className="max-w-7xl h-screen mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What We Work On
          </h2>

          <HoverEffect>
            <Card backgroundImage="/images/web-dev.avif">
              <div  className="w-8 h-8 mb-3">
                <ComputerIcon/>
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
             <div  className="w-8 h-8 mb-3">
                <ComputerIcon/>
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
              <div  className="w-8 h-8 mb-3">
                <ComputerIcon/>
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
            <div  className="w-8 h-8 mb-3">
                <Code/>
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
            <div  className="w-8 h-8 mb-3">
                <ComputerIcon/>
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
               <div  className="w-8 h-8 mb-3">
                <ComputerIcon/>
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
          <div className="grid grid-cols-4 h-[50vh]  gap-4">
            <GridItem
              // area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={
                <Lightbulb className="h-10 w-10 text-black dark:text-white" />
              }
              title="Innovation Partners"
              description="We’re collaborators in your success. We bring fresh perspectives, cutting-edge technology, and a commitment to pushing boundaries, transforming your vision into groundbreaking solutions."
            />

            <GridItem
              // area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
              icon={
                <Users className="h-10 w-10 size- text-black dark:text-white" />
              }
              title="We’re Humans"
              description="Being a good listener makes it all easier. Our consulting team will hear your pain areas, aspirations, and needs. This helps craft solutions that resonate with your brand and goals."
            />

            <GridItem
              // area="md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/5]"
              icon={
                <CheckCircle className="h-10 w-10 text-black dark:text-white" />
              }
              title="People’s Choice"
              description="Our clients choose us because we don’t just deliver software — we deliver success, turning challenges into opportunities and visions into reality. We’re trusted globally for excellence in innovation."
            />

            <GridItem
              // area="md:[grid-area:2/7/3/13] xl:[grid-area:2/5/3/9]"
              icon={
                <Gem className="h-10 w-10 text-black dark:text-white" />
              }
              title="Deliver Value for $"
              description="Excellence doesn’t have to come with a hefty price tag—just the right partner. With us, every dollar invested brings you closer to success, ensuring high-quality results without breaking the bank."
            />
          </div>
        </div>

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
        <section
          className="flex flex-col lg:flex-row relative overflow-hidden items-center justify-between min-h-screen bg-qubix-midnight text-white px-6 lg:px-24 py-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/your-background.jpg')" }}
        >
          <Spotlight  />

          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Top website <br />
              <span className="text-white">Development company</span>
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              At SDLC CORP, we help brands transform their digital presence with
              cutting-edge web development solutions. Whether you need a sleek
              corporate site, a dynamic eCommerce store, or a robust web portal,
              we bring your vision to life with scalable, secure, and
              SEO-optimized websites.
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
      </div>
      <Footer />
    </>
  );
}

