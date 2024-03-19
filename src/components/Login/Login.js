
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

function Login() {


    return (
        <div className="home">
            <div className="hero">

                <motion.h1
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    Login      
                    </motion.h1>

            </div>
        </div>
    );
};

export default Login;
