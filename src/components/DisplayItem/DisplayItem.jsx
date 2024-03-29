// ProductDisplay.js

import React, { useContext } from 'react';
import CartContext from '../../Store/Cart-Context';

const ProductDisplay = ({ product, onPurchase }) => {
  const { addItem } = useContext(CartContext);

  const purchaseHandler = (size) => {
    if (product.quantities[size] > 0) {
      addItem({ ...product, selectedSize: size, price: Number(product.price) });
      onPurchase(product.id, size);
    }
  };
  
  

  return (
    <div>
      <h2>Shoe Name : {product.shoeName}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${Number(product.price).toFixed(2)}</p>

      {/* Buttons to purchase shoes in different sizes */}
      <button onClick={() => purchaseHandler('large')}>Buy Large ({product.quantities.large})</button>
      <button onClick={() => purchaseHandler('medium')}>Buy Medium ({product.quantities.medium})</button>
      <button onClick={() => purchaseHandler('small')}>Buy Small ({product.quantities.small})</button>
    </div>
  );
};

export default ProductDisplay;
