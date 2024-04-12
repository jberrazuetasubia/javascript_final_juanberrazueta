import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./AboutUs.scss";
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
      <div className="content">
        <div className="column">
          <h2>Panita Food</h2>
          <p>
           Panita Food is a personal project to help people to find the best recipe for their daily meal. We provide a lot of recipe from all over the world. We also provide the information about the nutrition of the recipe. We hope that this project can help people to find the best recipe for their daily meal.
          </p>
        </div>
        <div className="column">
          <h2>I'm Juanfer an Ecuadorian in Canada!</h2>
          <img className="juanPic" src="profilePicture.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
