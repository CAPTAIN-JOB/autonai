import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { useCart } from './CartContext';
import { useTheme } from './ThemeContext';

// Load Stripe with your public key
const stripePromise = loadStripe('your-stripe-public-key');

const Checkout = () => {
    const { isDarkMode } = useTheme();

  const { cart, getCartTotal, clearCart } = useCart();
  const location = useLocation();
  const agent = location.state?.agent;

  // If an agent was passed via state (from "Buy Now" button)
  const singleAgentMode = !!agent;

  const handlePaymentSuccess = () => {
    clearCart();
    // Optionally, navigate to a confirmation page or show a success message
  };

  return (
    <main className={`p-6 md:p-12 lg:p-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="max-w-4xl mx-auto">
        {singleAgentMode ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="border-b py-4 mb-8">
              <h2 className="text-xl font-semibold">{agent.name}</h2>
              <p className="text-lg">${agent.price}</p>
              <p className="mb-4">{agent.description}</p>
            </div>
            <div className="mb-8">
              <Elements stripe={stripePromise}>
                <CheckoutForm agent={agent} onSuccess={handlePaymentSuccess} />
              </Elements>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              {cart.length === 0 ? (
                <p className="text-lg text-center">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="mb-8">
                    {cart.map(item => (
                      <li key={item.id} className="flex items-center justify-between border-b py-4">
                        <div>
                          <h2 className="text-xl font-semibold">{item.name}</h2>
                          <p className="text-lg">${item.price} x {item.quantity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-2xl font-semibold">Total: ${getCartTotal()}</span>
                  </div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm onSuccess={handlePaymentSuccess} />
                  </Elements>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Checkout;
