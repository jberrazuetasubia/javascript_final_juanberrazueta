// Home.js
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';


import './Home.scss';
import Slider from './HomeSlider';

function HomePage() {
  
  const controls = useAnimation();

  
    

  return (
    <div className="home">
      <div className="hero">

        <motion.h1
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Recipe Sharing Platform
        </motion.h1>
        <p>Start exploring and sharing delicious recipes!</p>
        
      </div>
      <Slider/>
      
    </div>
  );
};

export default HomePage;
