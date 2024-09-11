import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Vitamins } from './Vitamins'; // Import Vitamins component
import { Supplements } from './Supplements';
import img6 from "./img6.jpeg"
import img7 from "./img7.jpg"

const Shopping = () => {
  const [showVitamin, setShowVitamin] = useState(false); // State to toggle Vitamins
  const [showSupplement, setShowSupplement] = useState(false); // State to toggle Supplements

  const handleClickVitaminEvent = () => {
    setShowVitamin((prevShowVitamin) => !prevShowVitamin); // Toggle Vitamins visibility
    if (showSupplement) setShowSupplement(false); // Hide Supplements if they are visible
  };

  const handleClickSupplementEvent = () => {
    setShowSupplement((prevShowSupplement) => !prevShowSupplement); // Toggle Supplements visibility
    if (showVitamin) setShowVitamin(false); // Hide Vitamins if they are visible
  };

  // Reset the visibility to show both buttons
  const handleBackButtonClick = () => {
    setShowVitamin(false);
    setShowSupplement(false);
  };

  return (
    <div className='p-4 playwrite-cu-regular'>
      {(!showVitamin && !showSupplement) && ( // Only show buttons when both are hidden
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleClickVitaminEvent}
            className="w-1/2 p-4 bg-green-500 h-60 flex hover:opacity-80 items-center justify-center hover:bg-green-600 transition-all border-2  border-green-500 rounded-md inset-0"
            style={{backgroundImage:`url(${img6})` , backgroundSize:"cover"}}
          >
            <h2 className="text-black font-extrabold italic text-2xl font-bold">Vitamins</h2>
          </button>

{/*supplements*/}
          <button
            onClick={handleClickSupplementEvent}
            className="w-1/2 p-4 bg-blue-500 h-60 flex  items-center hover:opacity-80 justify-center hover:bg-blue-600 transition-all border-2  border-green-500 rounded-md inset-0"
            style={{backgroundImage:`url(${img7})` , backgroundSize:"cover" }}
          >
            <h2 className="text-black font-extrabold italic text-2xl font-bold">Supplements</h2>
          </button>
        </div>
      )}

      {/* Conditionally render the Vitamins component with animation */}
      {showVitamin && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Vitamins />
        </motion.div>
      )}

      {/* Conditionally render the Supplements component with animation */}
      {showSupplement && <Supplements />}

      {/* Back Button to return to the initial view */}
      {(showVitamin || showSupplement) && (
        <div className='mb-5 pb-8'>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleBackButtonClick}
          className=" absolute right-5 top-5  p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-all"
        >
          Back
        </motion.button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
