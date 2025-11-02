// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Define Framer Motion variants for the drawer animation
  const drawerVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  const MotionDiv = motion.div;

  // Close drawer when viewport grows to md+ so overlay never lingers
  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsDrawerOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-7 py-4 bg-transparent text-white z-40 glass">
      {/* Left side: Text Link */}
      <a href="#" className="text-xl md:text-2xl font-bold animate-pop" aria-label="Home">
        ME!!
      </a>

      {/* Desktop nav (md and up) */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#about" className="text-white text-base hover:text-gray-300">About</a>
        <a href="#services" className="text-white text-base hover:text-gray-300">Services</a>
        <a href="#contact" className="text-white text-base hover:text-gray-300">Contact</a>
      </div>

      {/* Mobile: Drawer Icon (hidden on md+) */}
      <button
        onClick={toggleDrawer}
        className="text-2xl hover:text-gray-400 focus:outline-none md:hidden"
        aria-label="Open menu"
        aria-expanded={isDrawerOpen}
        aria-controls="mobile-drawer"
      >
        <FaBars />
      </button>

      {/* Use AnimatePresence to handle mounting and unmounting animations */}
      <AnimatePresence>
        {isDrawerOpen && (
          // The Drawer with motion.div
          <MotionDiv
            id="mobile-drawer"
            className="fixed top-0 right-0 h-full w-60 bg-gray-900 shadow-xl z-50 md:hidden"
            variants={drawerVariants}
            initial="closed" // Start in the 'closed' state
            animate="open"   // Animate to the 'open' state
            exit="closed"    // Animate back to the 'closed' state when removed
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Drawer content and links */}
            <div className="p-4 flex flex-col items-start space-y-4">
              <button onClick={toggleDrawer} className="text-white text-xl self-end">
                &times;
              </button>

              <a href="#about" onClick={toggleDrawer} className="text-white text-lg hover:text-gray-400">About</a>
              <a href="#services" onClick={toggleDrawer} className="text-white text-lg hover:text-gray-400">Services</a>
              <a href="#contact" onClick={toggleDrawer} className="text-white text-lg hover:text-gray-400">Contact</a>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Transparent overlay behind the open drawer */}
      {isDrawerOpen && (
        <div 
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;