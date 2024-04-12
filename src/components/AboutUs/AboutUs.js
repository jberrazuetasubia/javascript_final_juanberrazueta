import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.scss";

function AboutUs() {
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
            Panita Food is a personal project to help people find the best recipes for their daily meals. We provide a variety of recipes from all over the world along with nutritional information. Our goal is to assist people in discovering the perfect recipe for their daily meals.
          </p>
          <p>
            I have created Panita Food beacuse I had a need to search for a new easy recipes, as an international student has been hard to find the right recipe for my daily meals.     
            
          </p>
          <h3>I hope you enjoy the recipes and find the perfect one for you. </h3>

        </div>
        <div className="column">
          <h2>I'm Juanfer, an Ecuadorian in Canada!</h2>
          <img className="juanPic" src="profilePicture.jpg" alt="Juanfer's Profile" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
