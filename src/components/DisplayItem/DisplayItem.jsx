// ProductDisplay.js
import React, { useContext } from 'react';
import CartContext from '../Store/Cart-Context';

const ProductDisplay = ({ product, onPurchase }) => {
  const { addItem } = useContext(CartContext);

  const purchaseHandler = (size) => {
    if (product.quantities[size] > 0) {
      addItem({ ...product, selectedSize: size });
      onPurchase(product.id, size);
    }
  };

  return (
    <div>
      <h2>{product.shoeName}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Buttons to purchase shoes in different sizes */}
      <button onClick={() => purchaseHandler('large')}>Buy Large ({product.quantities.large})</button>
      <button onClick={() => purchaseHandler('medium')}>Buy Medium ({product.quantities.medium})</button>
      <button onClick={() => purchaseHandler('small')}>Buy Small ({product.quantities.small})</button>
    </div>
  );
};

export default ProductDisplay;
