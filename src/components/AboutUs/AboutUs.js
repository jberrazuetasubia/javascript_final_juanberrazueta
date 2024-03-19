
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

function AboutUs() {

    const controls = useAnimation();




    return (
        <div className="home">
            <div className="hero">

                <motion.h1
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                >
                    About Us      
                    </motion.h1>

            </div>
        </div>
    );
};

export default AboutUs;
