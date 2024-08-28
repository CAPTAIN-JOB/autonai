import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();
  const { isDarkMode } = useTheme();

  return (
    <main className={`p-6 md:p-12 lg:p-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="max-w-4xl mx-auto">
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty. <Link to="/" className="text-blue-500 hover:underline">Browse agents</Link></p>
        ) : (
          <>
            <ul className="mb-8">
              {cart.map(item => (
                <li key={item.id} className="flex items-center justify-between border-b py-4">
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-lg">${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={`text-red-500 hover:text-red-700 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 rounded`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-semibold">Total: ${getCartTotal()}</span>
              <button
                onClick={clearCart}
                className={`bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 ${isDarkMode ? 'hover:bg-red-700' : ''}`}
              >
                Clear Cart
              </button>
            </div>
            <Link to="/checkout">
              <button
                className={`w-full py-2 px-4 rounded-lg text-white ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
              >
                Proceed to Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
