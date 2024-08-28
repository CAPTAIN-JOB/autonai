import React, { useState, useEffect } from 'react';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCart } from './CartContext';
import { useTheme } from './ThemeContext';


const CheckoutForm = ({ agent, onSuccess }) => {
    const { isDarkMode } = useTheme();
  const stripe = useStripe();
  const elements = useElements();
  const { cart, getCartTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const isSingleAgent = !!agent;
  const amount = Math.round((isSingleAgent ? agent.price : getCartTotal()) * 100); // amount in cents

  useEffect(() => {
    // Handle any setup or cleanup tasks if needed
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    try {
      // Create a payment intent on the server
      const { data: { clientSecret } } = await axios.post('/api/create-payment-intent', { amount });

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: event.target.elements.name.value,
          },
        },
      });

      if (error) {
        console.error('Payment failed', error);
        // Handle payment failure
        setLoading(false);
      } else {
        // Payment succeeded
        onSuccess();
      }
    } catch (error) {
      console.error('Error creating payment intent', error);
      // Handle server error
      setLoading(false);
    }
  };

  return (
    <main className={`p-6 md:p-12 lg:p-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
    <form onSubmit={handleSubmit} className="space-y-6">
      <label>
        Email
        <input
          type="text"
          name="email"
          required
          className="block mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Card details
        <div className="block mb-4 p-2 border rounded">
          <CardElement />
        </div>
      </label>
      <button
        type="submit"
        disabled={loading || !stripe || !elements}
        className={`w-full py-2 px-4 rounded-lg text-white ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {loading ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
      </button>
    </form>
    </main>
  );
};

export default CheckoutForm;
