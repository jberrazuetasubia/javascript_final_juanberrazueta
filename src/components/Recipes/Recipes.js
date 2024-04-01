import React, { useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import recipesData from '../recipes.json';
import './Recipes.scss';
import { Link } from 'react-router-dom';


import CountrySelect from '../SendRecipe/CountryComponent';

const style = {

};

function Recipes() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpen] = React.useState(false);


  const [country, setCountry] = useState('');


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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country && country.label ? country.label : '');
    console.log('country', country && country.label ? country.label : 'All');
  };



  const getRandomRecipe = (recipes) => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  };

  const handleRandomRecipe = () => {
    const randomRecipe = getRandomRecipe(filteredRecipes);
    setSelectedRecipe(randomRecipe);
    handleOpen();
  };

  return (
    <div className="recipe-container">


      <motion.h1
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className='title'
      >
        Find your recipe!
      </motion.h1>
      <div id="mySidenav" class="sidenav">
        <Button id='tryNew' onClick={handleRandomRecipe}>Try something new!</Button>
      </div>
      <div className='country'>
        <h2 style={{ textAlign: 'left' }}>Select Country:</h2>
        <CountrySelect value={selectedCountry} onCountrySelect={handleCountrySelect} />
      </div>
      <div className="recipe-cards">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.name}</h2>
              <p><strong>Country:</strong> {recipe.country}</p>
              <p><strong>Email:</strong> {recipe.email}</p>
              <p><strong>Name:</strong> {recipe.name_sender}</p>

              <Button className='recipeButton' autocomplete="false" variant="outlined" onClick={() => handleRecipeDetails(recipe)}>View Details</Button>
            </div>
          ))
        ) : (
          <>
            <div className='noFoundContainer'>
              <motion.h1
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className='noFound'
              >
                No recipes found yet!
              </motion.h1>

              <Link to="/send-recipe" ><Button className='buttonCall' >Help us with more recipes!</Button></Link>


            </div>

          </>


        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <div className='boxContent'>
            <h2 className='titleBox'>{selectedRecipe && selectedRecipe.name}</h2>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {selectedRecipe && selectedRecipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Instructions:</strong> {selectedRecipe && selectedRecipe.instructions}</p>
          </div>

        </Box>
      </Modal>
    </div>
  );
};

export default Recipes;
