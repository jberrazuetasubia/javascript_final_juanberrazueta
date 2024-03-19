import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from 'react-router-dom';

import "./Hero.scss";
import ImageGrid from "./ImageGrid";
const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="flexContainer">
          <div className="flexItem">
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <button><Link to="/signup" >Join Now!</Link></button>
          </div>
          <div className="flexItem">
          <ImageGrid className="imageGrid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;