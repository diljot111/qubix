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
  CloudCog,
  Code,
  Code2,
  ComputerIcon,
  Gem,
  LayoutDashboard,
  Lightbulb,
  Lock,
  Power,
  Search,
  SearchCheck,
  Server,
  Settings,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/services"); // replace with your target route
  };
 return (
  <>
    <Navbar />

    <div className="min-h-screen bg-qubix-midnight text-white px-3 xs:px-4 sm:px-6">
      <BackgroundBeamsWithCollision className="min-h-max">
        {/* Main container */}
        <div className="flex flex-col items-center justify-center pt-12 xs:pt-16 sm:pt-20 lg:flex-row lg:justify-between lg:items-center lg:h-[80vh] lg:pt-0 lg:px-8 xl:px-10">
          
          {/* Content Section */}
          <div className="w-full max-w-[320px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
            
            {/* Heading - Adjusts from 320px up */}
            <TypewriterEffect className="text-2xl min-[375px]:text-2xl xs:text-3xl font-bold leading-snug sm:text-4xl md:text-5xl">
              The largest tech show
            </TypewriterEffect>

            {/* Subheading - Scales perfectly */}
            <span className="text-qubix-blue text-lg min-[375px]:text-xl xs:text-2xl font-medium leading-snug sm:text-3xl md:text-4xl lg:text-5xl mt-2 xs:mt-3 sm:mt-4">
              Showcasing Qubix Technology to the World
            </span>

            {/* Paragraph - Auto-wraps at all sizes */}
            <p className="mt-3 xs:mt-4 sm:mt-6 text-qubix-soft-pink text-xs min-[375px]:text-sm xs:text-base leading-relaxed sm:text-lg w-full">
              From sleek interfaces to seamless interactions, we blend design
              and tech to craft digital journeys that inspire, engage, and
              perform. UI/UX, web development, branding, all under one roof!
            </p>

            {/* Button - Maintains proportions */}
            <Link href="/contact">
            <button className="mt-4 xs:mt-6 sm:mt-8 w-full max-w-[160px] xs:max-w-[180px] sm:max-w-[200px] bg-qubix-pink text-white px-3 py-2 xs:px-4 xs:py-2.5 sm:px-6 sm:py-3 rounded-full hover:shadow-lg hover:scale-105 transition text-xs xs:text-sm sm:text-base">
              Start Your Project
            </button>
            </Link>

            {/* Glowing Effect - Positioned below button */}
          </div>

         

            {/* Right Animation Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-full h-auto max-w-[600px]">
                <LottieAnimation />
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        {/* what we work */}
        <section className="max-w-7xl min-h-screen mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            WHAT WE WORK ON
          </h2>

          <HoverEffect>
            <Card backgroundImage="/images/website-dev.jpg">
              <div className="w-8 h-8 mb-3">
                <Code2 />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Web Development
              </h3>
              <p className="text-sm text-zinc-400">
                Full-stack websites using wide range of technologies.
              </p>
              <button
                onClick={handleClick}
                className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/ui-ux.jpg">
              <div className="w-8 h-8 mb-3">
                <LayoutDashboard />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                UI/UX Design
              </h3>
              <p className="text-sm text-zinc-400">
                Clean, intuitive interfaces your users will love
              </p>
              <button
                onClick={handleClick}
                className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/seo.jpg">
              <div className="w-8 h-8 mb-3">
                <SearchCheck />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Search Engine Optimization (SEO)
              </h3>
              <p className="text-sm text-zinc-400">
                Get found by the right people, at the right time
              </p>
              <button
                onClick={handleClick}
                className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/cloud.jpg">
              <div className="w-8 h-8 mb-3">
                <CloudCog />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Cloud & DevOps
              </h3>
              <p className="text-sm text-zinc-400">
                Deploy, scale, and maintain with confidence
              </p>
              <button
                onClick={handleClick}
                className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </Card>

            <Card backgroundImage="/images/domain.jpg">
              <div className="w-8 h-8 mb-3">
                <Server />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Domain & Hosting Support
              </h3>
              <p className="text-sm text-zinc-400">
                We handle the tech, so you don’t have to
              </p>
              <button
                onClick={handleClick}
                className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </Card>
            <Card backgroundImage="/images/custom.jpg">
              <div className="w-8 h-8 mb-3">
                <Wrench />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">
                Custom Software Solutions
              </h3>
              <p className="text-sm text-zinc-400">
                Tailor-made platforms that solve real problems
              </p>
              <button
                onClick={handleClick}
                className="bg-qubix-pink w-[120px] text-white px-1 py-1 rounded-md hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </Card>
          </HoverEffect>
        </section>
        <div className="w-[100%] flex justify-center items-center mt-2 mb-[50px]">
          <Link href="/services">

          <button className="bg-qubix-pink text-white rounded-md hover:bg-pink-600 transition py-4 px-8">
            View All Services
          </button>
          </Link>
        </div>

        <div className="w-full mt-[100px] mb-[100px]">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            WHO WE ARE
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
              <img src="/images/develop.jpg" alt="" />
            </div>

            {/* Right Side (Text Content) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-qubix-pink">
                Build Without Limits
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 text-white">
                Your Digital Identity,
                <br />
                Crafted with Code <br />& Creativity
              </h3>
              <p className="mt-4 text-white text-base sm:text-lg">
                In today’s digital world, your website is often the first thing
                people see — it’s more than just a page, it’s your brand, your
                message, and your growth tool. We don’t just build websites; we
                create smooth, modern experiences that grab attention and
                actually work. Whether you’re starting fresh or giving your
                brand a new look, we’ll help bring your ideas to life with a
                website that looks great and performs even better.
              </p>
              <Link href="/contact">
              <button className="mt-6 bg-qubix-pink text-white px-6 py-3 rounded-full text-sm sm:text-base shadow-lg">
                Contact Us <span className="ml-2">➤</span>
              </button>
              </Link>
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
