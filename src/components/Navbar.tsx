"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-qubix-midnight text-white shadow-lg z-50 sticky top-0">
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 sm:h-20 md:h-[100px] max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Qubix Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              priority
            />
            <Image
              src="/Qubix.png"
              alt="Qubix Text Logo"
              width={120}
              height={120}
              className="w-200 h-100 sm:w-200 sm:h-100 md:w-200 md:h-100 object-contain mb-8"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 items-center font-medium">
          <li>
            <Link href="/" className="hover:text-qubix-pink transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-qubix-pink transition-colors duration-200">
              What We Work
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-qubix-pink transition-colors duration-200">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-qubix-pink transition-colors duration-200">
              Contact
            </Link>
          </li>
          <li>
            <Link 
              href="tel:+91 9056132170" 
              className="bg-qubix-pink text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-200 whitespace-nowrap"
            >
              Call Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-qubix-midnight shadow-lg z-50">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <Link 
                  href="/" 
                  className="block hover:text-qubix-pink transition-colors duration-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="block hover:text-qubix-pink transition-colors duration-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  What We Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="block hover:text-qubix-pink transition-colors duration-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block hover:text-qubix-pink transition-colors duration-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="tel:+91 9056132170" 
                  className="inline-block bg-qubix-pink text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-200 w-full text-center"
                  onClick={toggleMobileMenu}
                >
                  Call Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}