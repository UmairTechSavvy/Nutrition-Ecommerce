import React, { useState } from 'react';
import img8 from "./img9.jpeg"
import img9 from "./img9.jpeg"
import img10 from "./img10.jpeg"
import { Detail } from './Detail'; // Ensure you have a Detail component
import pan from "./pan.jpeg"

// Sample product data with random prices
const products = [
  {
    id: 1,
    name: 'Choline',
    imageUrl: img8,
    price: 112
  },
  {
    id: 2,
    name: 'Panthothenic acid',
    imageUrl: pan,
    price: 320
  },
  {
    id: 3,
    name: 'Fish oil',
    imageUrl: img10,
    price: 500
  },
];

export const Supplements = () => {
  const [openDetailId, setOpenDetailId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDetailOpener = (productId) => {
    setOpenDetailId(prevId => (prevId === productId ? null : productId));
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for supplements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 text-black border border-gray-300 rounded-lg w-full"
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {openDetailId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        )}

        {/* Product List */}
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`border-4 border-green-500 rounded-lg overflow-hidden shadow-lg ${
              openDetailId ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg font-medium text-red-800">${product.price}</p>
              </div>
              <button
                onClick={() => handleDetailOpener(product.id)}
                className="text-blue-500 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}

        {/* Detail Modal */}
        {openDetailId && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg relative">
              <button
                onClick={() => setOpenDetailId(null)}
                className="absolute top-4 right-4 text-red-500 font-bold"
              >
                Close
              </button>
              {/* Render the Detail component with the selected product */}
              <Detail product={products.find(p => p.id === openDetailId)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
