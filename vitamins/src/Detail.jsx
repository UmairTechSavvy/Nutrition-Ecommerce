import React, { useState } from 'react';
import { Buy } from './Buy';

export const Detail = ({product}) => {
  const [currentQty, setCurrentQty] = useState(0);
  const [showOrder, setShowOrder] = useState(false);

  const handleIncreaseQuantity = () => {
    if (currentQty < 20) {
      setCurrentQty(prevValue => prevValue + 1);
    } else {
      alert("Product is unavailable");
    }
  };

  const handleDecreaseQuantity = () => {
    if (currentQty > 0) {
      setCurrentQty(prevValue => prevValue - 1);
    }
  };

  const handleBuyProduct = () => {
    setShowOrder(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-white p-6 shadow-lg rounded-lg">
      {!showOrder && (
        <>
          <h2 className="text-2xl text-black font-bold mb-4 text-green-500">{product.name}</h2>
          <p className="text-lg text-black text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-600 mb-4">Description: {product.description}</p>
          <div className="flex items-center space-x-4">
            <p className="text-black font-semibold">Quantity:</p>
            <button 
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-300"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className='text-black'>{currentQty}</span>
            <button 
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-300"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
            <button 
              className='bg-red-500 rounded-lg hover:bg-red-600 hover:scale-110 p-4'
              onClick={handleBuyProduct}
            >
              Buy
            </button>

         
          </div>
        </>
      )}
   {showOrder && <Buy product={product} currentQty={currentQty}/>}
    
    </div>
  );
};
