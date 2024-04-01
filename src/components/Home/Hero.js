
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';



import "./Hero.scss";
import ImageGrid from "./ImageGrid";
const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="flexContainer">
          <div className="flexItem1">
            <div className='containerFlexItem1'>
              <h2>Find recipies from every part of the world</h2>
              <motion.h1
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='title'
              >
                Panita Food
              </motion.h1>
              <Link to="/send-recipe" > <Button className='buttonCall' > Send your recipe now!</Button></Link>
              
            </div>

          </div>
          <div className="flexItem2">
            <ImageGrid className="imageGrid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;