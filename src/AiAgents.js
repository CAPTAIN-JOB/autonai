import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import smart_recruiter from './smart-recruiter.jpg'
import chatbot from './chatbot-pro.jpg'
import dataanalyzer from './dataanalyzer-ai.jpg'
import fraud_detector from './fraud-detector.jpg'
import marketing from './marketing-suite.jpg'
import voiceassistant from './voiceassistant.jpg'
import financial_advisor from './financial-advisor.jpg'
import education_ai from "./education-ai.jpg"
import legal_bot from './legal-bot.jpg'
import supply_chain from "./supply-chain.jpg"
import rpa from "./rpa.jpg"
import travel_assistant from "./travel-assistant.jpg"
import agriculture_ai from "./agriculture-ai.jpg"
import energy_management from "./energy-management.jpg"
import smart_home from "./smart-home.jpg"
import cybersecurity_sentinel from "./cybersecurity-sentinel.jpg"
import customer_insights from "./customer-insights.jpg"
import retail_optimizer from "./retail-optimizer.jpg"
import content_creator from "./content-creator.jpg"

// Load Stripe with your public key
const stripePromise = loadStripe('your-stripe-public-key');

// Expanded sample data for AI agents
const agents = [
  {
    id: 1,
    name: 'ChatBot Pro',
    price: 199.99,
    description: 'Advanced chatbot for customer service, capable of understanding natural language and providing accurate responses.',
    features: [
      'Natural Language Processing',
      '24/7 Customer Support',
      'Customizable Responses'
    ],
    image: chatbot
  },
  {
    id: 2,
    name: 'DataAnalyzer AI',
    price: 299.99,
    description: 'AI tool for analyzing large datasets, providing insights and recommendations to improve business decisions.',
    features: [
      'Data Visualization',
      'Predictive Analytics',
      'Automated Reporting'
    ],
    image: dataanalyzer
  },
  {
    id: 3,
    name: 'VoiceAssistant',
    price: 249.99,
    description: 'Voice-activated AI assistant for automating tasks and providing hands-free control for various applications.',
    features: [
      'Voice Recognition',
      'Task Automation',
      'Integration with Smart Devices'
    ],
    image: voiceassistant
  },
  {
    id: 4,
    name: 'FraudDetector AI',
    price: 399.99,
    description: 'AI for identifying and preventing fraudulent activities in real-time, protecting financial transactions and data.',
    features: [
      'Real-time Monitoring',
      'Anomaly Detection',
      'Fraudulent Pattern Recognition'
    ],
    image: fraud_detector
  },
  {
    id: 5,
    name: 'AI-driven Marketing Suite',
    price: 499.99,
    description: 'Comprehensive marketing automation tool that leverages AI to optimize campaigns and improve ROI.',
    features: [
      'Predictive Lead Scoring',
      'Automated Campaign Management',
      'Personalized Content Recommendations'
    ],
    image: marketing
  },
  {
    id: 6,
    name: 'HealthMonitor AI',
    price: 349.99,
    description: 'AI system for monitoring and analyzing health metrics, providing insights and alerts for better health management.',
    features: [
      'Real-time Health Data Analysis',
      'Predictive Health Alerts',
      'Integration with Wearable Devices'
    ],
    image: '/images/health-monitor.jpg'
  },
  {
    id: 7,
    name: 'SmartRecruiter',
    price: 279.99,
    description: 'AI-powered recruitment tool that helps in finding the best candidates by analyzing resumes and conducting initial screenings.',
    features: [
      'Resume Parsing',
      'Candidate Matching',
      'Automated Interview Scheduling'
    ],
    image: smart_recruiter
  },
  {
    id: 8,
    name: 'FinancialAdvisor AI',
    price: 449.99,
    description: 'AI-based financial advisory service providing personalized investment advice and portfolio management.',
    features: [
      'Personalized Investment Strategies',
      'Risk Assessment',
      'Portfolio Optimization'
    ],
    image: financial_advisor
  },
  {
    id: 9,
    name: 'CyberSecurity Sentinel',
    price: 599.99,
    description: 'AI for monitoring and protecting against cyber threats, offering real-time threat detection and response.',
    features: [
      'Threat Detection and Mitigation',
      'Vulnerability Scanning',
      'Incident Response Automation'
    ],
    image: cybersecurity_sentinel
  },
  {
    id: 10,
    name: 'CustomerInsights AI',
    price: 329.99,
    description: 'AI tool for analyzing customer behavior and preferences, helping businesses improve their customer engagement strategies.',
    features: [
      'Customer Segmentation',
      'Behavior Analysis',
      'Actionable Insights'
    ],
    image: customer_insights
  },
  {
    id: 11,
    name: 'LegalBot',
    price: 259.99,
    description: 'AI solution for legal research and document review, assisting lawyers and legal teams with case analysis and document automation.',
    features: [
      'Legal Document Analysis',
      'Case Law Research',
      'Contract Drafting Assistance'
    ],
    image: legal_bot
  },
  {
    id: 12,
    name: 'RetailOptimizer AI',
    price: 399.99,
    description: 'AI for optimizing retail operations, including inventory management, demand forecasting, and personalized promotions.',
    features: [
      'Inventory Management',
      'Demand Forecasting',
      'Dynamic Pricing'
    ],
    image: retail_optimizer
  },
  {
    id: 13,
    name: 'SupplyChain AI',
    price: 469.99,
    description: 'AI-driven solution for managing and optimizing supply chain operations, improving efficiency and reducing costs.',
    features: [
      'Supply Chain Visibility',
      'Demand Planning',
      'Supplier Management'
    ],
    image: supply_chain
  },
  {
    id: 14,
    name: 'EducationAI Tutor',
    price: 229.99,
    description: 'AI-powered educational tool offering personalized tutoring and learning experiences for students of all levels.',
    features: [
      'Personalized Learning Paths',
      'Adaptive Assessments',
      'Interactive Lessons'
    ],
    image: education_ai
  },
  {
    id: 15,
    name: 'TravelAssistant AI',
    price: 299.99,
    description: 'AI for planning and managing travel itineraries, providing recommendations and real-time travel updates.',
    features: [
      'Itinerary Planning',
      'Real-time Travel Updates',
      'Personalized Recommendations'
    ],
    image: travel_assistant
  },
  {
    id: 16,
    name: 'EnergyManagement AI',
    price: 359.99,
    description: 'AI solution for optimizing energy usage in buildings and industrial operations, reducing costs and environmental impact.',
    features: [
      'Energy Consumption Monitoring',
      'Efficiency Optimization',
      'Cost Reduction Strategies'
    ],
    image: energy_management
  },
  {
    id: 17,
    name: 'AgricultureAI',
    price: 349.99,
    description: 'AI for enhancing agricultural productivity through precision farming, crop monitoring, and yield prediction.',
    features: [
      'Crop Health Monitoring',
      'Precision Farming',
      'Yield Prediction'
    ],
    image: agriculture_ai
  },
  {
    id: 18,
    name: 'SmartHome Assistant',
    price: 279.99,
    description: 'AI for managing smart home devices, providing automation, and enhancing the convenience of home living.',
    features: [
      'Home Automation',
      'Voice Control',
      'Energy Management'
    ],
    image: smart_home
  },
  {
    id: 19,
    name: 'AI-driven Content Creator',
    price: 259.99,
    description: 'AI tool for generating high-quality content, including articles, blogs, and social media posts, tailored to your audience.',
    features: [
      'Content Generation',
      'SEO Optimization',
      'Audience Targeting'
    ],
    image: content_creator
  },
  {
    id: 20,
    name: 'RoboticProcessAutomation (RPA)',
    price: 499.99,
    description: 'AI for automating repetitive business processes, increasing efficiency and reducing manual workload.',
    features: [
      'Workflow Automation',
      'Process Optimization',
      'Error Reduction'
    ],
    image: rpa
  }
];

const AiAgents = () => {
    const { isDarkMode } = useTheme();
    const { addToCart } = useCart();
  
    return (
      <main className={`p-6 md:p-12 lg:p-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Our AI Agents</h1>
        <p className="text-lg mb-12 text-center">
          Discover our cutting-edge AI agents designed to address today's most pressing problems and enhance efficiency across various industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {agents.map(agent => (
            <div key={agent.id} className={`border p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} transition-transform transform hover:scale-105`}>
              <img src={agent.image} alt={agent.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
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
