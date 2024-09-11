import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import HomeA1 from './HomeA1';
import bg from "./img4.jpeg";
import img5 from "./img5.jpg";
import "./index.css"

const Home = () => {
  const array = [
    {
      img: img1,
      link: "https://www.mayoclinic.org/diseases-conditions/iron-deficiency-anemia/symptoms-causes/syc-20355034",
      para: "Explore iron deficiency reasons"
    },
    {
      img: img2,
      link: "https://www.healthline.com/nutrition/supplements-for-muscle-gain",
      para: "Muscle not gaining - Let's discover"
    },
    {
      img: img3,
      link: "https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/",
      para: "Health professional on vitamin E"
    }
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [showHomeA1, setShowHomeA1] = useState(false);
  

  const nextImage = useCallback(() => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % array.length);
  }, [array.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const openImg = () => setShowHomeA1(true);
  const closeHomeA1 = () => setShowHomeA1(false);

  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-screen playwrite-cu-regular"
      style={{ backgroundImage: `url(${bg})` }}  
    >
      {showHomeA1 && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <HomeA1 onClose={closeHomeA1} />
        </div>
      )}

      {!showHomeA1 && (
        <>
          {/* Image Carousel */}
          <motion.div
            className="relative w-full h-[calc(100vh-8rem)] overflow-hidden mb-8"
          >
            <motion.img
              src={array[currentImg].img}
              alt={`Slide ${currentImg + 1}`}
            className="w-full h-80 lg:w-full lg:h-full overflow-hidden  border border-green-500 md:w-1/2 sm:w-1/3 rounded-lg object-cover shadow-lg inset-0"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <a
                href={array[currentImg].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black bg-opacity-50 text-white p-4 rounded-lg text-center hover:bg-opacity-75"
              >
                <span className="text-xl font-bold">Click Here</span>
              </a>
              <div className="mt-4">
                <p className='text-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-extrabold italic'>
                  {array[currentImg].para}
                </p>
              </div>
            </div>
          </motion.div>

          {/* What's Trending Section */}
          <motion.div
            className="bg-gray-800 rounded-lg p-4 w-full flex justify-center mb-8"
            initial={{ opacity: 0, y: 100 }}  // Start animation hidden and down
            whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and move up
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}  // Appear when 50% visible
          >
            <h1
              className='text-green-500 text-center text-3xl font-bold'
              style={{
                borderBottom: '2px inset white',
                display: 'inline-block',
                paddingBottom: '8px',
                marginBottom: '10px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              What's Trending
            </h1>
          </motion.div>
          
          {/* Example Image Section */}
          <motion.div
            className='mb-8'
            initial={{ opacity: 0, y: 100 }}  // Start animation hidden and down
            whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and move up
            transition={{ duration: 0.8, delay: 0.6 }}  
            viewport={{ once: true, amount: 0.5 }}  // Appear when 50% visible
          >
            <div className='w-48 h-64 bg-gray-200 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110 rounded-lg p-4'>
              <button
                onClick={openImg}
                className='w-full h-full flex items-center justify-center p-0'
              >
                <img
                  src={img1}
                  alt="Example"
                  className='w-full h-full object-cover rounded-lg hover:opacity-80'
                />
              </button>
              <p className="mt-2 text-center text-sm font-bold text-green-700">
                Nutrition, Health and Wellness
              </p>
            </div>
          </motion.div>
        </>
      )}

      {/* Footer Section - Part of the Home Page */}
      <footer className="bg-gray-800 text-white py-8 w-full">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 100 }}  // Start animation hidden and down
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
          transition={{ duration: 0.8, delay: 0.4 }} // Smooth transition
          viewport={{ once: true, amount: 0.5 }}  // Appear when 50% visible
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="text-sm mb-4">Follow us for updates and news:</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/umair-hasan-0688aa2a3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/UmairTechSavvy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="mailto:umairhasanumair12@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col items-center md:items-end">
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-center md:text-right">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Home;
