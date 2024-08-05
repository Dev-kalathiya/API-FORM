import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", formData);
      onAdd();
      setFormData({
        title: "",
        image: "",
        price: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className= "bg-gray-200 p-6 w-96 mx-auto rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-md mx-auto space-y-4 bg-white shadow-md rounded-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter product title"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter product description"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
