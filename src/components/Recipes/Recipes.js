import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

import './Recipes.scss';
import { Link } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from '../../database/firebase_config';


import CountrySelect from '../SendRecipe/CountryComponent';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const style = {

};

function Recipes() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [open, setOpen] = React.useState(false);

  const [recipesData, setRecipesData] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesCollection = collection(db, 'recipes');
      const recipesSnapshot = await getDocs(recipesCollection);
      const recipesList = recipesSnapshot.docs.map(doc => doc.data());
      setRecipesData(recipesList);
    };

    fetchRecipes();
  }, []);

  //Handlers to close and open the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  // Filter recipes based on selected country
  const filteredRecipes = recipesData.filter(recipe => {
    const matchesCountry = selectedCountry ? recipe.country === selectedCountry : true;
    const matchesSearchTerm = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCountry && matchesSearchTerm;
  });

  const handleCountrySelect = (country) => {
    setSelectedCountry(country && country.label ? country.label : '');
    console.log('country', country && country.label ? country.label : 'All');
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  // Handle recipe details
  const handleRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
    handleOpen();
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


  const modalVariants = {
    hidden: { y: '100vh', opacity: 0 },
    visible: { y: '50vh', opacity: 1, transition: { type: 'spring', stiffness: 50 } },
    exit: { y: '100vh', opacity: 0, transition: { ease: 'easeInOut' } },
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



      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} style={{ textAlign: "left" }}>
        <div style={{ marginLeft: 10 }}>
          <h2>Select Country:</h2>
          <CountrySelect value={selectedCountry} onCountrySelect={handleCountrySelect} />

        </div>
        <div style={{ marginLeft: 20 }}>
          <h2 style={{ textAlign: 'left' }}>Search by your favorite ingredient:</h2>

          <TextField
            value={searchTerm}
            onChange={handleSearchTermChange}
            label="Search by ingredient"
            color='success'
            variant="outlined"
          />
        </div>

      </Stack>





      <div className="recipe-cards">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.recipeName}</h2>
              <p><strong>Country:</strong> {recipe.country}</p>
              <p><strong>Email:</strong> {recipe.email}</p>
              <p><strong>Name:</strong> {recipe.firstName} {recipe.lastName}</p>
              <p><strong>Description:</strong> {recipe.recipeDescription}</p>

              <div>
                <img className='recipeImage' src={recipe.imageURL} alt={recipe.recipeName} />
              </div>


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

      {/* show the modal getting the info from the recipe selected */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={style}
        >
          <Box className="box">
            <div className='boxContent'>
              <h2 className='titleBox'>{selectedRecipe && selectedRecipe.recipeName}</h2>
              <p><strong>Ingredients:</strong></p>
              <ul>
                {selectedRecipe && selectedRecipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p><strong>Instructions:</strong> </p>
              <ul>
                {selectedRecipe &&
                  selectedRecipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
              </ul>

              <img className='recipeImage' src={selectedRecipe && selectedRecipe.imageURL} alt={selectedRecipe && selectedRecipe.recipeName} />
            </div>

          </Box>
        </motion.div>

      </Modal>
    </div>
  );
};

export default Recipes;
