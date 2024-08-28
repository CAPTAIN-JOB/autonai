import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { isDarkMode } = useTheme();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = useCallback(async () => {
    if (input.trim() === '') return;

    const userMessage = input;
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInput('');

    try {
      const response = await axios.post('/api/chat', { message: userMessage });
      setMessages([...messages, { text: userMessage, isUser: true }, { text: response.data.reply, isUser: false }]);
    } catch (error) {
      console.error(error);
      setMessages([...messages, { text: userMessage, isUser: true }, { text: 'Sorry, something went wrong.', isUser: false }]);
    }
  }, [input, messages]);

  return (
    <div
      className={`fixed bottom-4 right-4 ${
        isOpen ? 'w-80' : 'w-16'
      } transition-all duration-300`}
    >
      <div
        className={`flex flex-col h-full border rounded-lg ${
          isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
        } shadow-lg`}
      >
        {isOpen ? (
          <>
            <div className="flex justify-between items-center p-2 bg-blue-500 text-white">
              <h3 className="font-bold">AI Chatbot</h3>
              <button onClick={toggleChatbot} className="text-xl">
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 mb-2 rounded-lg ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-2 bg-gray-200">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleSendMessage}
                className={`mt-2 w-full py-2 px-4 rounded-lg text-white ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={toggleChatbot}
            className={`flex items-center justify-center w-full h-full rounded-lg ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-lg`}
          >
            <FaRobot size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
