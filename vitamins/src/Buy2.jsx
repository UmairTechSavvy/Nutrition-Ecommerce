import React from 'react';

export const Buy = ({ product, currentQty }) => {
  return (
    <div className="flex justify-center items-center w-full h-full rounded-lg shadow-lg bg-white p-6 border border-black">
      <div className="text-green-800 font-extrabold text-3xl space-y-4 p-3"> 
        <div className='underline'>{product.name} has been placed.</div>
        <div><span className=' underline text-red-500'>Quantity:</span> {currentQty}</div>
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
