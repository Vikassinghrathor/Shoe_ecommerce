import React from 'react';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h2>{props.shoeName}</h2>
        <div>
          <span>{price}</span>
          <span>x {props.quantity}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
