import { useState } from 'react';
import Input from './components/Input/Input';
import ProductDisplay from './components/DisplayItem/DisplayItem';
function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, { ...product, id: Date.now() }]);
  };
  const handlePurchase = (productId, size) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId && product.quantities[size] > 0) {
          const updatedProduct = { ...product };
          updatedProduct.quantities[size] -= 1;
          return updatedProduct;
        }
        return product;
      });
    });
  };
  return (
    <div>
    <Input onAddProduct={handleAddProduct}/>
    {products.map((product) => (
          <ProductDisplay key={product.id} product={product} onPurchase={handlePurchase} />
    ))}
    </div>
  );
}

export default App;
