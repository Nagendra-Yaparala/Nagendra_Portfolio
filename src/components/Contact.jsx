

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("");

    try {
      const result = await emailjs.sendForm(
        "service_4ua1bwo", // EmailJS Service ID
        "template_9xeeu0u", // EmailJS Template ID
        e.target, // The form data
        "12ZWrVWKdze9AnrKG" // EmailJS User ID
      );

      if (result.text === "OK") {
        setSendStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        setSendStatus("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendStatus("Error sending message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-4xl font-extrabold text-yellow-300">Let&apos;s Connect!</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Got a project in mind, an exciting opportunity, or just want to say
            hello? I&apos;m always open to conversations. Let&apos;s create
            something impactful together!
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Links */}
            <motion.a
              href="https://linkedin.com/in/nagendra-yaparala-18111919b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-linkedin fa-lg"></i> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-github fa-lg"></i> GitHub
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-twitter fa-lg"></i> Twitter
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-300">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSending}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-800 shadow-lg transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
            {sendStatus && (
              <div
                className={`mt-4 text-center text-sm ${
                  sendStatus.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {sendStatus}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
