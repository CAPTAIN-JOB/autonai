import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Chatbot from './Chatbot'; // Import Chatbot component

const testimonials = [
  {
    name: 'Jane Doe',
    position: 'CTO at TechCorp',
    text: 'This agency transformed our operations with their AI solutions. Highly recommended!',
  },
  {
    name: 'John Smith',
    position: 'CEO at StartUp Inc.',
    text: 'Exceptional service and groundbreaking AI technology. Our productivity has skyrocketed.',
  },
  // Add more testimonials as needed
];

const services = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions to fit your unique business needs and objectives.',
  },
  {
    title: 'AI Consultation',
    description: 'Expert advice on how AI can be integrated into your business strategy.',
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent chatbots that enhance customer interactions and automate support.',
  },
  {
    title: 'Machine Learning Models',
    description: 'Advanced machine learning models to analyze data and provide insights.',
  },
  // Add more services as needed
];

const clients = [
  {
    name: 'TechCorp',
    logo: '/images/techcorp-logo.png',
  },
  {
    name: 'StartUp Inc.',
    logo: '/images/startup-logo.png',
  },
  // Add more clients as needed
];

const HomePage = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Hero Section */}
      <header className="text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Future of AI Automation</h1>
          <p className="text-xl mb-8">We provide cutting-edge AI solutions to revolutionize your business and enhance efficiency.</p>
          <Link to="/ai-agents" className={`inline-block py-3 px-6 rounded-lg text-white ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
            Explore Our AI Agents
          </Link>
        
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex flex-col gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Some of Our Clients</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="w-32 h-32 flex items-center justify-center">
                <img src={client.logo} alt={client.name} className="max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">Have questions or want to work with us? Reach out to us!</p>
          <form action="mailto:baguscripts@gmail.com" method="post" encType="text/plain" className="mx-auto max-w-md">
            <label className="block mb-4">
              Name
              <input type="text" name="name" required className="block w-full p-2 border rounded" />
            </label>
            <label className="block mb-4">
              Email
              <input type="email" name="email" required className="block w-full p-2 border rounded" />
            </label>
            <label className="block mb-4">
              Message
              <textarea name="message" rows="4" required className="block w-full p-2 border rounded"></textarea>
            </label>
            <button type="submit" className={`w-full py-2 px-4 rounded-lg text-white ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}>
              Send Message
            </button>
            <h3>call: +254719738677</h3>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FaInstagram />
            </a>
          </div>
          <p>&copy; 2024 AI Automation Agency. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default HomePage;
