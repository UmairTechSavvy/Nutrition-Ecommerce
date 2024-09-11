import React from 'react';

export const Signin = ({ handleGoBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Sign In Page</h1>
      <button
        onClick={handleGoBack}
        className='bg-green-500 text-white px-4 py-2 rounded'
      >
        Back
      </button>
    </div>
  );
};
