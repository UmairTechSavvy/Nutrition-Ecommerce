import React, { useState } from 'react';

const Contact = () => {
  const [writeReview, setWriteReview] = useState('');
  const [userName, setUserName] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleAddReview = () => {
    if (writeReview.trim()) {
      // Add new review with user's name or "Anonymous"
      setReviews([
        ...reviews,
        { text: writeReview, name: userName.trim() || 'Anonymous' },
      ]);
      setWriteReview(''); // Clear review input
      setUserName(''); // Clear name input
    }
  };

  const handleDeleteReview = (index) => {
    // Remove review at the specified index
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className='mb-8'>
      <div>
        <h1 className='mb-8 text-green-800 text-center underline'>
          For further queries, message at x@gmail.com
        </h1>
      </div>

      {/* Predefined Reviews */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 m-4'>
        <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300'>
          <h1 className='text-black'>"Amazing products" -- Jack</h1>
        </div>
        <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300'>
          <h1 className='text-black'>"Must try" -- Isaac</h1>
        </div>
        <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300'>
          <h1 className='text-black'>"Good to try" -- Angelina</h1>
        </div>
      </div>

      {/* Input Section */}
      <div className='mt-8'>
        <input
          type='text'
          placeholder='Your Name'
          className='p-2 border border-gray-300 text-black rounded w-full mb-4'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Write a review'
          className='p-2 border border-gray-300 rounded text-black w-full mb-4'
          value={writeReview}
          onChange={(e) => setWriteReview(e.target.value)}
        />
        <button
          className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300'
          onClick={handleAddReview}
        >
          Submit Review
        </button>
      </div>

      {/* Display User Reviews with Delete Option */}
      <div className='mt-8'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='bg-gray-100 p-4 my-2 rounded shadow-md border border-gray-200 flex justify-between items-center'
          >
            <h1 className='text-black'>
              "{review.text}" -- {review.name}
            </h1>
            <button
              className='ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300'
              onClick={() => handleDeleteReview(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
