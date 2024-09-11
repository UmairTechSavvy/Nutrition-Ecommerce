import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Total from './Total';
import Contact from './Contact';
import Shopping from './Shopping';
import { Signin } from './Signin';
import { SignUp } from './SignUp';

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInFunctionality = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpFunctionality = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleGoBack = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <Router>
      {/* Show SignIn or SignUp components based on state */}
      {showSignIn ? (
        <Signin handleGoBack={handleGoBack} />
      ) : showSignUp ? (
        <SignUp handleGoBack={handleGoBack} />
      ) : (
        <div className="min-h-screen bg-cover bg-center relative playwrite-cu-regular">
          <div className="relative min-h-screen bg-gradient-to-t from-black to-transparent text-white p-6">
            <header className="flex flex-col items-center justify-between mb-12">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-extrabold line-through uppercase text-black text-center mb-6">nutricart</h1>
                
                {/* Updated button positioning */}
                <div className='flex space-x-4'>
                  <button
                    className='bg-green-500 text-black rounded-lg hover:scale-110 hover:bg-green-600 px-4 py-2'
                    onClick={handleSignInFunctionality}
                  >
                    SignIn
                  </button>
                  <button
                    className='bg-green-500 text-black rounded-lg hover:scale-110 hover:bg-green-600 px-4 py-2'
                    onClick={handleSignUpFunctionality}
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </header>

            <nav className="mb-12">
              <ul className="flex justify-center space-x-6 text-lg text-black">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Shopping">Shopping</Link></li>
                <li><Link to="/Total">Total</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </nav>

            <main className="container mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shopping" element={<Shopping />} />
                <Route path="/Total" element={<Total />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
