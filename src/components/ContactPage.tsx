"use client";

import { Spotlight } from "./ui/Spotlight";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export const ContactSection = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScrollToForm = () => {
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    nameInputRef.current?.focus();
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify that you're not a robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken })
      });

      if (res.ok) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          message: ""
        });
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Error submitting the form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="flex flex-col lg:flex-row relative overflow-hidden items-center justify-between min-h-screen bg-qubix-midnight text-white px-6 lg:px-24 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <Spotlight />

      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-qubix-pink leading-tight mb-6">
          QUBIX TECHNOLOGY <br />
          <span className="text-white">IT SOLUTIONS</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl">
          At Qubix Techs, we specialize in delivering cutting-edge IT solutions tailored to modern business needs.
          From crafting responsive websites to providing robust software development and digital transformation services,
          our mission is to empower startups and enterprises with innovative, scalable technology.
        </p>
        <button
          onClick={handleScrollToForm}
          className="bg-white text-black font-semibold px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition"
        >
          <span>&#9993;</span> Schedule a Free Consultation
        </button>
      </div>

      <div className="w-full lg:w-1/2 bg-white text-black rounded-xl p-8 shadow-xl max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-qubix-midnight">
          Request A Proposal
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleInputChange}
            ref={nameInputRef}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-qubix-pink"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-qubix-pink"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-qubix-pink"
          />
          <select
            name="budget"
            required
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-qubix-pink"
          >
            <option value="">Select Budget Range</option>
            <option value="₹7,000 - ₹15,000">₹7,000 - ₹15,000</option>
            <option value="₹16,000 - ₹30,000">₹16,000 - ₹30,000</option>
            <option value="₹30,000+">₹30,000+</option>
          </select>
          <textarea
            name="message"
            placeholder="Please share your detailed requirement"
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-qubix-pink"
          />

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-qubix-pink text-white font-medium py-2 rounded hover:bg-[#1d1b6a] transition ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};