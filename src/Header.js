import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { cart } = useCart();

  return (
    <header className={`bg-${isDarkMode ? 'gray-900' : 'white'} text-${isDarkMode ? 'white' : 'gray-900'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">AI Automation Agency</Link>
        <nav className="space-x-4">
          <Link to="/ai-agents" className="hover:underline">AI Agents</Link>
          <Link to="/contacts" className="hover:underline">Contact</Link>
          <Link to="/cart" className="hover:underline">
            Cart ({cart.length})
          </Link>
        </nav>
        <button onClick={toggleTheme} className="ml-4">
          {isDarkMode ? '🌙' : '🌞'}
        </button>
      </div>
    </header>
  );
};

export default Header;
