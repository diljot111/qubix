import { ContactSection } from "@/components/ContactPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      {/* Contact Hero */}
      <section className="bg-qubix-midnight w-full py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Text Section */}
      <div className="flex w-[50%] flex-col items-start space-y-6">
        <h2 className="lg:text-7xl text-3xl text-qubix-pink whitespace-nowrap  font-bold mb-4">Get in Touch</h2>
        <p className="text-white mb-6">
          Have questions or need help? We’d love to hear from you.
        </p>

        {/* Contact Info List */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <MapPin className="text-qubix-blue" />
            <span className="text-white">
              Ludhiana,Punjab <br /> India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-qubix-blue" />
            <span className="text-white">+91 9056132170</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-qubix-blue" />
            <span className="text-white">Qubixtechnology9@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MessageCircle className="text-qubix-blue" />
            <span className="text-white">Live Chat</span>
          </div>
        </div>
      </div>

      {/* Right Illustration Section */}
      <div className="flex justify-center  items-center ">
        <img
          src="contact.svg"
          alt="Support Illustration"
          className="max-w-full w-auto  h-auto"
        />
      </div>
    </section>
      <ContactSection />
          <section className="w-full px-4 py-10 bg-qubix-midnight">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-white">
        Our Location
      </h2>
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13713.83284522631!2d75.8448907144527!3d30.90096565174378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8327ccf37905%3A0x14d193d9a0620b2b!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1717171717171!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
      <Footer />
    </>
  );
}
