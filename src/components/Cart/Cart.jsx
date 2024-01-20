import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../Store/Cart-Context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${Number(cartCtx.totalAmount || 0).toFixed(2)}`;
  const hasItems = cartCtx.cartItems && cartCtx.cartItems.length > 0; 

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.cartItems && cartCtx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          shoeName={item.shoeName}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button>Order</button>}
      </div>
    </div>
  );
};

export default Cart;
