import React, { useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import recipesData from '../recipes.json';
import './Recipes.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  rounded: 20,
  boxShadow: 24,
  p: 4,
};

function Recipes() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpen] = React.useState(false);

  //Handlers to close and open the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle country change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Filter recipes based on selected country
  const filteredRecipes = selectedCountry ? recipesData.filter(recipe => recipe.country === selectedCountry) : recipesData;

  // Handle recipe details
  const handleRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
    handleOpen();
  };

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
            <p><strong>Email:</strong> {recipe.email}</p>
          <p><strong>Name:</strong> {recipe.name_sender}</p>
       
            <Button variant="outlined" onClick={() => handleRecipeDetails(recipe)}>View Details</Button>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>{selectedRecipe && selectedRecipe.name}</h2>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {selectedRecipe && selectedRecipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <p><strong>Instructions:</strong> {selectedRecipe && selectedRecipe.instructions}</p>
         </Box>
      </Modal>
    </div>
  );
};

export default Recipes;
