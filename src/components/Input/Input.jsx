import React, { useState } from 'react'

const Input = (onAddProduct) => {
  const[input,setInput] = useState({
    shoeName: '',
    description: '',
    price: '',
    quantities: {
      large: '',
      medium: '',
      small: '',
    },
  });

  const handleInputChange = (field, value) => {
    setInput((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleQuantityChange = (size, value) => {
    setInput((prevDetails) => ({
      ...prevDetails,
      quantities: {
        ...prevDetails.quantities,
        [size]: Math.max(0, parseInt(value, 10)), // Ensure the value is not negative and convert to integer
      },
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate input fields
    if (!input.shoeName || !input.description || !input.price) {
      alert('Please fill in all fields.');
      return;
    }
    onAddProduct(input);

    // Clear input fields
    setInput({
      shoeName: '',
      description: '',
      price: '',
      quantities: {
        large: '',
        medium: '',
        small: '',
      },
    });
  };
  return (
    <>
      <div>
      <form onSubmit={handleAddProduct}>
        <label>Shoe Name</label>
        <input 
        type='text'
        value={input.shoeName}
        onChange={(e) => handleInputChange('shoeName', e.target.value)}
        />
        <label>Description</label>
        <input 
        type='textarea'
        value={input.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
        />
        <label>Price</label>
        <input 
        type='number'
        value={input.price}
        onChange={(e) => handleInputChange('price', e.target.value)}
        />
        <h1>Quantity Available</h1>
        <label>Large</label>
        <input 
        type='number'
        value={input.quantities.large}
        onChange={(e) => handleQuantityChange('large', e.target.value)}  
        />
        <label>Small</label>
        <input 
        type='number'
        value={input.quantities.small}
        onChange={(e) => handleQuantityChange('small', e.target.value)}
        />
        <label>Medium</label>
        <input 
        type='number'
        value={input.quantities.medium}
        onChange={(e) => handleQuantityChange('medium', e.target.value)}
        />
        <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  )
}

export default Input