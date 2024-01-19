import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CartProvider from './components/Store/Cart-Provider';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
