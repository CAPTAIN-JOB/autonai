import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import python_course from "./python_course.jpg"
import java_course from './java_course.jpg'
import java_functional_course from './java_functional_course.jpg'
import cybersecurity_course from "./cybersecurity_course.jpg"
import tensorflow_course from "./tensorflow_course.jpg"
import generative_ai_course from "./generative_ai_course.jpg"
import webdev_course from "./webdev_course.jpg"
import aws_course from "./webdev_course.jpg"
import gpt_course from "./gpt_course.jpg"
import java from "./java.jpg"

// Load Stripe with your public key
const stripePromise = loadStripe('your-stripe-public-key');

// Expanded sample data for AI agents
const courses = [
  {
    id: 1,
    name: 'Introduction to Python Programming',
    price: 149.99,
    description: 'A comprehensive course covering the basics of Python programming, ideal for beginners and those looking to strengthen their coding skills.',
    features: [
      'Syntax and Semantics',
      'Data Structures',
      'Object-Oriented Programming'
    ],
    image: python_course
  },
  {
    id: 2,
    name: 'Mastering Java for Software Development',
    price: 179.99,
    description: 'An advanced course on Java programming, focusing on software development principles and best practices.',
    features: [
      'Java Core Concepts',
      'Multithreading',
      'Design Patterns'
    ],
    image: java
  },
  {
    id: 3,
    name: 'Functional Programming with Java',
    price: 159.99,
    description: 'Explore the principles of functional programming using Java, focusing on immutability, lambdas, streams, and more.',
    features: [
      'Immutability',
      'Lambdas and Streams',
      'Functional Interfaces'
    ],
    image: java_functional_course
  },
  {
    id: 4,
    name: 'Deep Learning with TensorFlow',
    price: 199.99,
    description: 'Learn how to build and deploy deep learning models using TensorFlow, covering neural networks, CNNs, RNNs, and more.',
    features: [
      'Neural Networks',
      'Convolutional Neural Networks',
      'Recurrent Neural Networks'
    ],
    image: tensorflow_course
  },
  {
    id: 5,
    name: 'Introduction to Generative AI',
    price: 199.99,
    description: 'A beginner-friendly course on generative AI, covering the basics of GANs, VAEs, and their applications.',
    features: [
      'Generative Adversarial Networks',
      'Variational Autoencoders',
      'Practical Applications'
    ],
    image: generative_ai_course
  },
  {
    id: 6,
    name: 'Web Development with JavaScript and React',
    price: 149.99,
    description: 'A practical course on modern web development using JavaScript and React, aimed at building dynamic web applications.',
    features: [
      'React Components',
      'State Management',
      'APIs and Fetch'
    ],
    image: webdev_course
  },
  {
    id: 7,
    name: 'Data Structures and Algorithms in Java',
    price: 169.99,
    description: 'In-depth course on data structures and algorithms using Java, essential for coding interviews and competitive programming.',
    features: [
      'Arrays and Linked Lists',
      'Trees and Graphs',
      'Sorting and Searching Algorithms'
    ],
    image: java_course
  },
  {
    id: 8,
    name: 'Building AI-Powered Applications with GPT Models',
    price: 229.99,
    description: 'Learn how to integrate GPT models into applications, focusing on practical implementations in various domains.',
    features: [
      'GPT-3 and GPT-4 Models',
      'API Integration',
      'Use Cases in Business'
    ],
    image: gpt_course
  },
  {
    id: 9,
    name: 'Cybersecurity Fundamentals',
    price: 179.99,
    description: 'A foundational course in cybersecurity, covering essential topics like cryptography, network security, and ethical hacking.',
    features: [
      'Cryptography Basics',
      'Network Security',
      'Ethical Hacking'
    ],
    image: cybersecurity_course
  },
  {
    id: 10,
    name: 'Cloud Computing with AWS',
    price: 199.99,
    description: 'Master cloud computing with AWS, including cloud architecture, deployment, and management of cloud-based applications.',
    features: [
      'AWS Core Services',
      'Cloud Architecture',
      'Security and Compliance'
    ],
    image: aws_course
  }
];


const AiAgents = () => {
    const { isDarkMode } = useTheme();
    const { addToCart } = useCart();
  
    return (
      <main className={`p-6 md:p-12 lg:p-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Computer Science Courses</h1>
<p className="text-lg mb-12 text-center">
  Discover our diverse range of computer science courses designed to equip you with the skills needed to excel in today's tech-driven world.
</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map(agent => (
            <div key={agent.id} className={`border p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} transition-transform transform hover:scale-105`}>
              <img src={agent?.image} alt={agent.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{agent.name}</h2>
              <p className="text-lg mb-4">${agent.price}</p>
              <p className="mb-4">{agent.description}</p>
              <ul className="list-disc list-inside mb-4">
                {agent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => addToCart(agent)}
                  className={`w-full py-2 px-4 rounded-lg text-white ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                  Add to Cart
                </button>
                <Link to="/checkout" state={{ agent }}>
                  <button
                    className={`w-full py-2 px-4 rounded-lg text-white ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/cart" className={`text-lg font-semibold ${isDarkMode ? 'text-blue-300 hover:underline' : 'text-blue-600 hover:underline'}`}>
            View Cart
          </Link>
        </div>
      </main>
    );
  };
  
  export default AiAgents;
