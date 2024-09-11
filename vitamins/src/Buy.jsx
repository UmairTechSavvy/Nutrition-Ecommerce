import React, { useEffect } from 'react';
import axios from 'axios';

export const Buy = ({ product, currentQty }) => {
  useEffect(() => {
    const sendPurchaseData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/purchase', { // Ensure this URL is correct
          productName: product.name,
          quantity: currentQty,
          totalPrice: currentQty * product.price,
        });
        console.log('Purchase recorded:', response.data); // Debugging log
      } catch (error) {
        console.error('Error recording purchase:', error); // Debugging log
      }
    };

    sendPurchaseData();
  }, [product, currentQty]);

  return (
    <div className="flex justify-center items-center w-full h-full rounded-lg shadow-lg bg-white p-6 border border-black">
      <div className="text-green-800 font-extrabold text-3xl space-y-4 p-3"> 
        <div className='underline'>{product.name} has been placed.</div>
        <div><span className='underline text-red-500'>Quantity:</span> {currentQty}</div>
        <div>
          <span className="underline text-red-500">Price per item:</span> ${product.price}
        </div>
        <div>
          <span className="underline text-red-500">Total:</span> ${(currentQty * product.price).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
