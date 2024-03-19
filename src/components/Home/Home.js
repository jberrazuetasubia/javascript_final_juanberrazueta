// Home.js
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';


import './Home.scss';
import Hero from './Hero';

function HomePage() {
  
  const controls = useAnimation();

  
    

  return (
    <div className="home">
      
      <Hero/>
      
    </div>
  );
};

export default HomePage;
