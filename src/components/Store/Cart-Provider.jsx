// CartProvider.js
import React, { useReducer } from 'react';
import CartContext from './Cart-Context';

const defaultCartState = {
  cartItems: [],
  totalItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
    }

    return {
      cartItems: updatedItems,
      totalItems: state.totalItems + 1,
    };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem.quantity === 1) {
      updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      cartItems: updatedItems,
      totalItems: state.totalItems - 1,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCart = (item) => {
    dispatchCartAction({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item) => {
    dispatchCartAction({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    totalItems: cartState.totalItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
