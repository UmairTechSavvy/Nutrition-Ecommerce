import React, { useEffect, useState } from 'react';
import vitc from './vitc.jpeg';
import vitd from './vitd.jpeg';
import ve from './vitamine.jpeg';
import { Detail } from './Detail'; // Ensure you have a Detail component

// Sample product data with random prices
const products = [
  {
    id: 1,
    name: 'Vitamin C',
    imageUrl: vitc,
    link: '/vitamin-c',
    price: 46,
    description: "Vitamin C, also known as ascorbic acid, is a water-soluble vitamin and a powerful antioxidant. It is essential for the growth, development, and repair of body tissues. Vitamin C is crucial for collagen synthesis, immune function, and the absorption of iron from plant-based foods."
  },
  {
    id: 2,
    name: 'Vitamin D',
    imageUrl: vitd,
    link: '/vitamin-d',
    price: 32,
    description: "Vitamin D is a fat-soluble vitamin that plays a crucial role in the absorption of calcium and phosphorus, which are essential for maintaining healthy bones and teeth. It is often referred to as the sunshine vitamin because our skin produces it when exposed to sunlight."
  },
  {
    id: 3,
    name: 'Vitamin E',
    imageUrl: ve,
    link: '/vitamin-e',
    price: 50,
    description: "Vitamin E is a fat-soluble antioxidant that helps protect cells from damage caused by free radicals. It plays a vital role in maintaining healthy skin and eyes and supports the immune system. There are eight different forms of Vitamin E, with alpha-tocopherol being the most active in humans."
  },
];

export const Vitamins = () => {
  const [openDetailId, setOpenDetailId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
const [setProduct , setSetProduct] = useState([])
  const handleDetailOpener = (productId) => {
    setOpenDetailId(prevId => (prevId === productId ? null : productId));
  };

  useEffect(()=>{

    const getProducts = async () => {

try {
  const response = await axios.get(`api/products`);
  setSetProduct(response.data)
  
} catch (error) {
  console.error('Error fetching products:', error);
  throw error;
}


    }

getProducts();

  },[])

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
          placeholder="Search for vitamins..."
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
