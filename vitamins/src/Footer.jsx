import { motion } from 'framer-motion';


const Footer = ({showFooter}) => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <motion.div
        className='container mx-auto px-4'
        initial={{ opacity: 0, y: 50 }}  
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, delay: 0.4 }}  
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <p className="text-sm mb-4">Follow us for updates and news:</p>
            <div className="flex space-x-4">
              <a href="www.linkedin.com/in/umair-hasan-0688aa2a3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/UmairTechSavvy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="umairhasanumair12@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
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
  );
};

export default Footer;