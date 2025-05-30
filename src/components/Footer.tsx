import {
  Instagram,
  Linkedin,
  X,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black w-full text-white">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left Logo + Description + Socials */}
        <div className="space-y-4">
          <img className="h-[140px] w-[140px] bg-black" src={"./logo.png"} />
          <p className="text-sm leading-relaxed">
            Empowering businesses with modern design and cutting–edge development.
          </p>
          <div className="flex gap-3">
            <button className="p-2 border border-white/40">
              <Instagram size={16} />
            </button>
            <button className="p-2 border border-white/40">
              <Linkedin size={16} />
            </button>
            <button className="p-2 border border-white/40">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>&rsaquo; About Us</li>
            <li>&rsaquo; Portfolio</li>
            <li>&rsaquo; Write For Us</li>
            <li>&rsaquo; Blog</li>
            <li>&rsaquo; Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>&rsaquo; Web Design</li>
            <li>&rsaquo; Website Development</li>
            <li>&rsaquo; Mobile App Development</li>
            <li>&rsaquo; CMS Solution</li>
            <li>&rsaquo; Ecommerce Development</li>
            <li>&rsaquo; Digital Marketing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>
                301–302, Santiniketan Flora Business Hub,<br />
                Abrama Road, Mota Varachha,<br />
                Surat, Gujarat 394105
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              79842 04930
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              info@coderdevise.com
            </li>
          </ul>

          <button className="mt-6 px-5 py-3 flex items-center gap-2 bg-qubix-pink hover: rounded-md text-white font-semibold">
            Get In Touch <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black border-t-2 border-white text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
        <div>© 2025 CODER DEVISE. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
