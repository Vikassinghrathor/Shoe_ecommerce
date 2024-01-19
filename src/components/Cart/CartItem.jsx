// CartItem.jsx
import React from 'react';

const CartItem = (props) => {
  const { shoeName, quantity, price, onRemove, onAdd } = props;

  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';

  return (
    <li>
      <div>
        <h3>{shoeName}</h3>
        <div>
          <span>Quantity: {quantity}</span>
          <span>Price: ${formattedPrice}</span>
        </div>
      </div>
      <div>
        <button onClick={onRemove}>Remove</button>
        <button onClick={onAdd}>Add</button>
      </div>
    </li>
  );
};

export default CartItem;
