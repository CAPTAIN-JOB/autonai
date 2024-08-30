import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements, loadStripe } from '@stripe/react-stripe-js';
import Header from './Header';
import HomePage from './HomePage';
import AiAgents from './AiAgents';
import Cart from './Cart';
import Checkout from './Checkout';
import { CartProvider } from './CartContext';
import { ThemeProvider } from './ThemeContext';
import Contact from './Contact';
import Courses from './Courses';


// Load Stripe with your public key
// const stripePromise = loadStripe('your-stripe-public-key');

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <Header />
          {/* <Elements stripe={stripePromise}> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ai-agents" element={<AiAgents />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path='/contacts' element={<Contact/>} />
            </Routes>
          {/* </Elements> */}
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
