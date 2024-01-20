import { useState } from 'react';
import Input from './components/Input/Input';
import ProductDisplay from './components/DisplayItem/DisplayItem';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/Cart-Provider';
function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, { ...product, id: Date.now() }]);
  };
  const handlePurchase = (productId, size) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId && product.quantities[size] > 0) {
          const updatedQuantities = {
            ...product.quantities,
            [size]: product.quantities[size] - 1,
          };
            const isProductEmpty = Object.values(updatedQuantities).every(
            (quantity) => quantity === 0
          );
  
          return isProductEmpty
            ? null
            : {
                ...product,
                quantities: updatedQuantities,
              };
        }
        return product;
      }).filter(Boolean);
    });
  };
  

  return (
    <CartProvider>
    <Input onAddProduct={handleAddProduct}/>
    {products.map((product) => (
          <ProductDisplay key={product.id} product={product} onPurchase={handlePurchase} />
    ))}
    <Cart />
    </CartProvider>
  );
}

export default App;
