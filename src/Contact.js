// src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from './ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('/api/contact', { name, email, message });
      setStatus('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Failed to send message.');
      console.error(error);
    }
  };

  return (
    
    <main className={`p-6 md:p-12 lg:p-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-1 p-2 border rounded-lg w-full ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 p-2 border rounded-lg w-full ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`mt-1 p-2 border rounded-lg w-full ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${isDarkMode ? 'hover:bg-blue-600' : 'hover:bg-blue-400'} transition-colors duration-300`}
        >
          Send
        </button>
        <h3>call: +254719738677</h3>
        {status && <p className={`mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{status}</p>}

      </form>
    </main>
  );
};

export default Contact;
