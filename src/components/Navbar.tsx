"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string | null) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-qubix-midnight text-white shadow-lg z-50 sticky top-0">
      <nav className="flex justify-between items-center px-8 h-[100px]  max-w-7xl mx-auto">
        <div className="flex items-center gap-2">

        <Link href="/">
        <Image
            src="/logo.png" // Replace with the actual path to your logo image
            alt="Qubix Logo"
            width={60}
            height={20}
            className="object-contain"
            priority
        />
        </Link>
         <Link href="/">
        <Image
            src="/Qubix.png" // Replace with the actual path to your logo image
            alt="Qubix Logo"
            width={150}
            height={70}
            className="mb-8 object-contain"
            priority
        />
        </Link>
        </div>

        {/* <h1 className="text-3xl font-bold text-qubix-pink">QUBIX</h1> */}

        <ul className="hidden lg:flex space-x-8 items-center font-medium relative">
          <li><Link href="/" className="hover:text-qubix-pink transition">Home</Link></li>

          <li><Link href="/services" className="hover:text-qubix-pink transition">What We Work</Link></li>


          <li><Link href="/portfolio" className="hover:text-qubix-pink transition">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:text-qubix-pink transition">Contact</Link></li>

          <li>
            <a href="tel:+91 9056132170" className="bg-qubix-pink text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
              Call Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
