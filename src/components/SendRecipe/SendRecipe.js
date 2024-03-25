
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { TextField, Button, Stack, Input, IconButton } from '@mui/material';
import { Link } from "react-router-dom"


import CountrySelect from './CountryComponent';
import './SendRecipe.scss';

import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Import CloudUploadIcon from Material-UI

function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [recipeSteps, setRecipeSteps] = useState(['']); // State to store recipe steps
    const [ingredientsSet, setIngredients] = useState(['']); // State to store ingredients
    const [recipeImage, setRecipeImage] = useState(null); // State to store recipe image file

    function handleSubmit(event) {
        event.preventDefault();
        const recipe = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            country: country,
            recipeSteps: recipeSteps,
            ingredients: ingredientsSet,
            recipeImage: recipeImage

        };
        console.log(recipe)
    }
    const handleCountrySelect = (country) => {
        setCountry(country)
    };

    //Ingredients

    const handleIngredientChange = (index, value) => {
        const ingredients = [...ingredientsSet];
        ingredients[index] = value;
        setIngredients(ingredients);
    }
    const addIngredientField = () => {
        setIngredients([...ingredientsSet, '']);
    }

    //Steps
    const handleStepChange = (index, value) => {
        const steps = [...recipeSteps];
        steps[index] = value;
        setRecipeSteps(steps);
    };

    const addStepField = () => {
        setRecipeSteps([...recipeSteps, '']);
    };

    // Handle file upload
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setRecipeImage(file);
    };


    return (

        <div className="hero">
            <motion.h1
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='title'
            >
                Send your recipe!
            </motion.h1>

            <form onSubmit={handleSubmit} action={<Link to="/login" />} className='form'>
                <div className="flexContainer">
                    <div className="flexItem">

                        <h2>Tell us about yourself!</h2>

                        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='success'
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='success'
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                fullWidth
                                required
                            />
                        </Stack>
                        <TextField
                            type="email"
                            variant='outlined'
                            color='success'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <h2>Write your recipe</h2>
                        <h3 style={{ textAlign: "left" }}>Where it is from?</h3>
                        <CountrySelect onCountrySelect={handleCountrySelect} />

                        <div style={{ marginTop: "20px" }}>
                            <h4 style={{ textAlign: "left" }}>List all your ingredients!</h4>

                            {ingredientsSet.map((ingredient, index) => (
                                <TextField
                                    key={index}
                                    type="text"
                                    variant="outlined"
                                    color="success"
                                    label={`Ingredient ${index + 1}`}
                                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                                    value={ingredient}
                                    fullWidth
                                    required
                                    sx={{ mb: 2 }}
                                />
                            ))}
                            {/* Button to add new step field */}
                            <Button variant="outlined" color="success" onClick={addIngredientField}>
                                Add new ingredient
                            </Button>
                        </div>


                    </div>
                    <div className="flexItem">

                        <h3 style={{ textAlign: "left" }}>Write all the steps!</h3>

                        {recipeSteps.map((step, index) => (
                            <TextField
                                key={index}
                                type="text"
                                variant="outlined"
                                color="success"
                                label={`Step ${index + 1}`}
                                onChange={(e) => handleStepChange(index, e.target.value)}
                                value={step}
                                fullWidth
                                required
                                sx={{ mb: 2 }}
                            />
                        ))}
                        {/* Button to add new step field */}
                        <Button variant="outlined" color="success" onClick={addStepField}>
                            Add Step
                        </Button>


                        <h3 style={{ textAlign: "left" }}>Upload your recipe photo!</h3>



                        <div style={{textAlign: "left"}}>
                            <Input
                                type="file"
                                onChange={handleFileChange}
                                inputProps={{ accept: 'image/*' }}
                                color="success"
                                style={{width: "100%"}}
                                endAdornment={
                                    <IconButton color="success" component="span">
                                        <CloudUploadIcon />
                                    </IconButton>
                                }
                            />
                        </div>


                        <Button style={{marginTop: "2%", width: "100%", backgroundColor: "green", color: "white", height: "50px"}} variant="outlined" color="success" type="submit">Send the recipe</Button>
                    </div>

                </div>

            </form>

        </div>





    );
};

export default SignUp;
