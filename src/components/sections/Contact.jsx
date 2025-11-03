"use client";

import React, { useState, useRef } from "react";
import { Mail, MapPin, Phone } from "../Icons";
import PopupModal from "../PopupModal";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [popupData, setPopupData] = useState({ title: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmitFunction = async (e) => {
    e.preventDefault();

    if (isSending) return; // prevent double clicks
    setIsSending(true);

    try {
      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
      );

      console.log("Email sent:", res.status, res.text);

      setPopupData({
        title: "Message Sent",
        message: "Thank you for reaching out! I'll get back to you soon.",
      });
    } catch (err) {
      console.log("EmailJS error:", err);

      setPopupData({
        title: "Error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setShowModal(true);
      setIsSending(false);

      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 w-full min-h-screen">
      <PopupModal
        isOpen={showModal}
        title={popupData.title}
        message={popupData.message}
        onClose={() => setShowModal(false)}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-black text-xl font-semibold">
              Get In Touch
            </h2>
            <p className="text-slate-600">
              Have a project in mind? Let's work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-6 text-black">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p>Email</p>
                    <a
                      href="mailto:mitrankshah2@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      mitrankshah2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p>Phone</p>
                    <a
                      href="tel:+91 8850616628"
                      className="text-blue-600 hover:underline"
                    >
                      +91-8850616628
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p>Location</p>
                    <p className="text-slate-600">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmitFunction}
                className="space-y-6 text-black"
              >
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`cursor-pointer w-full px-6 py-3 rounded-md text-white transition-colors ${
                    isSending
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
