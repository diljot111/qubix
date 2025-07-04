"use client";
import {
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import {
  Instagram,
  Linkedin,
  X,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  LinkedinIcon,
  MailIcon,
  Router,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const handleClickService = () => {
    router.push("/services");
  };
  return (
    <footer className="bg-black w-full text-white">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Logo + Description + Socials */}
        <div className="space-y-4">
          <img className="h-[140px] w-[140px] bg-black" src={"./logo.png"} />
          <p className="text-sm leading-relaxed">
            Empowering businesses with modern design and cutting–edge
            development.
          </p>
          <div className="flex gap-3">
            <button  className="p-2 border v border-white/40 hover:bg-qubix-pink transition">
              <Link href="mailto:qubixtechnology9@gmail.com">
                <MailIcon size={16} />
              </Link>
            </button>
            <button className="p-2 border border-white/40 hover:bg-qubix-pink transition">
              <Link href="https://www.linkedin.com/company/qubix-technology/">
                <Linkedin   size={16} />
              </Link>
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <ul className="space-y-2 text-sm">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>

          <li className="hover:text-qubix-pink text-white cursor-pointer">
            <Link href="/">&rsaquo; Home</Link>
          </li>
          <li className="hover:text-qubix-pink text-white cursor-pointer">
            <Link href="/services">&rsaquo; What we do</Link>
          </li>
          <li className="hover:text-qubix-pink text-white cursor-pointer">
            <Link href="/portfolio">&rsaquo; Portfolio</Link>
          </li>
          <li className="hover:text-qubix-pink text-white cursor-pointer">
            <Link href="/contact">&rsaquo; Contact Us</Link>
          </li>
        </ul>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li
              onClick={handleClickService}
              className="hover:text-qubix-pink cursor-pointer"
            >
              &rsaquo; Web Development
            </li>
            <li
              onClick={handleClickService}
              className="hover:text-qubix-pink cursor-pointer"
            >
              &rsaquo; UI/UX Design
            </li>
            <li
              onClick={handleClickService}
              className="hover:text-qubix-pink cursor-pointer"
            >
              &rsaquo; Search Engine Optimization
            </li>
            <li
              onClick={handleClickService}
              className="hover:text-qubix-pink cursor-pointer"
            >
              &rsaquo; Cloud & DevOps
            </li>
            <li
              onClick={handleClickService}
              className="hover:text-qubix-pink cursor-pointer"
            >
              &rsaquo; Domain & Hosting Support
            </li>
            <li
              onClick={handleClickService}
              className="hover:text-qubix-pink cursor-pointer"
            >
              &rsaquo; Custom Software Solutions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span className="hover:text-qubix-pink cursor-pointer">
                Ludhiana, Punjab, India <br />
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a className="hover:text-qubix-pink" href="tel:+91 9056132170">
                9056132170
              </a>
            </li>
            <li className="flex items-center gap-2 ">
              <Phone size={16} />
              <a className="hover:text-qubix-pink" href="tel:+91 6280545027">
                6280545027
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                className="hover:text-qubix-pink"
                href="mailto:qubixtechnology9@gmail.com"
              >
                qubixtechnology9@gmail.com
              </a>
            </li>
          </ul>

          <button
            onClick={() => {
              router.push("/contact");
            }}
            className="mt-6 px-5 py-3 flex items-center gap-2 bg-qubix-pink hover: rounded-md text-white font-semibold"
          >
            Get In Touch <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black border-t-2 border-white text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
        <div>© 2025 QUBIX TECHNOLOGY. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
