// frontend/components/Footer.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const BACKEND_URL = "http://localhost:5001/api/contact" || NULL;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <footer id="footer" className="w-full bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Rudranil Chowdhury. Want to hire me or contact me for anything? 
            Please leave a message! Thank you for visiting my page :D.
          </p>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 text-white transition-all duration-300 hover:border-white"
          >
            <a href="#projects">View My Work</a>
          </motion.button>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none 
              transition-all duration-300 ease-in-out
              focus:border-blue-500 focus:ring-2 focus:ring-blue-300
              hover:border-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none 
              transition-all duration-300 ease-in-out
              focus:border-blue-500 focus:ring-2 focus:ring-blue-300
              hover:border-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none 
              transition-all duration-300 ease-in-out
              focus:border-blue-500 focus:ring-2 focus:ring-blue-300
              hover:border-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded font-medium hover:bg-gray-200 transition"
            >
              Send
            </button>

            {status && <p className="text-sm text-gray-400">{status}</p>}
          </form>
        </div>
      </div>
    </footer>
  );
}
