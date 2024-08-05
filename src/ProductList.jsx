import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="card card-bordered bg-base-100 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <figure className="relative w-full h-full overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold mb-1">{product.title}</h2>
            <p className="text-gray-600 mb-1">{product.description}</p>
            <div className="card-actions flex justify-between items-center">
              <span className="text-xl font-bold text-primary">₹{product.price}</span>
              <button className="btn btn-outline btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
