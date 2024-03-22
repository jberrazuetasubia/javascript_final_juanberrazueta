// Home.js
import React, { useState } from 'react';

import { motion, useAnimation, Variants } from 'framer-motion';


import recipesData from '../recipes.json';
import './Recipes.scss';
function Recipes() {
    const [selectedCountry, setSelectedCountry] = useState('');
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
  
    // Filter recipes based on selected country
    const filteredRecipes = selectedCountry ? recipesData.filter(recipe => recipe.country === selectedCountry) : recipesData;
  
    return (
      <div className="recipe-container">
        <h1>Recipes</h1>
        <div>
          <label htmlFor="country-select">Select Country:</label>
          <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">All</option>
            <option value="Italy">Italy</option>
            <option value="France">France</option>
            <option value="India">India</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="recipe-cards">
          {filteredRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.name}</h2>
              <p><strong>Country:</strong> {recipe.country}</p>
              <p><strong>Ingredients:</strong></p>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <p><strong>Email:</strong> {recipe.email}</p>
              <p><strong>Name:</strong> {recipe.name_sender}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Recipes;
