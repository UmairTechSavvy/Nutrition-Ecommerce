import React from 'react';
import { useLocation } from 'react-router-dom';

const Total = () => {
  const location = useLocation();
  const { state } = location;

  // Default values if state is not available
  const {
    productName = 'Unknown Product',
    quantity = 0,
    price = 0,
    totalPrice = 0
  } = state || {};

  return (
    <div className="flex flex-col justify-center items-center w-full h-full rounded-lg shadow-lg bg-white p-6 border border-black playwrite-cu-regular">
      <h1 className="text-green-800 font-extrabold text-3xl">Shopping Summary</h1>
      <p className="text-lg text-gray-700 mt-4">
        Product: {productName}
      </p>
      <p className="text-lg text-gray-700 mt-2">
        Quantity: {quantity}
      </p>
      <p className="text-lg text-gray-700 mt-2">
        Price per Item: ${price}
      </p>
      <p className="text-lg text-gray-700 mt-2 font-bold">
        Total Price: ${totalPrice}
      </p>
    </div>
  );
};

export default Total;
