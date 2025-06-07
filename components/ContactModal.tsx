"use client";

import { useState } from "react";

export default function ContactModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You could integrate with an email service or API here
    alert("Thank you for your message! Julia will get back to you soon.");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-modal-content">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-medium mb-2">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          Have a project in mind or want to collaborate? I'd love to hear from
          you.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-vertical"
            placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-black focus:ring-offset-2 outline-none"
        >
          Send Message
        </button>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 pt-6 border-t border-gray-300">
        <h3 className="text-lg font-medium mb-4">Other Ways to Connect</h3>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong> hello@juliahuang.art
          </p>
          <p>
            <strong>Location:</strong> Los Angeles, CA
          </p>
          <p>
            <strong>Response Time:</strong> Usually within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
}
