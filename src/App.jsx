// src/App.js
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';


const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAddProduct = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container mx-auto p-6">
     
      <h1 className="text-3xl font-bold mb-6 text-center">Product Management</h1>
      <ProductForm onAdd={handleAddProduct} />
      <ProductList key={refresh} />
    </div>
  );
};

export default App;
