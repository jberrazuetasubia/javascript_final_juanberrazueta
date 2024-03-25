
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { TextField, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"


import CountrySelect from './CountryComponent';
import './SendRecipe.scss';
function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [recipeSteps, setRecipeSteps] = useState(['']); // State to store recipe steps


    function handleSubmit(event) {
        event.preventDefault();
        const recipe = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            country: country,
            recipeSteps: recipeSteps,
        };
        console.log(recipe)
    }
    const handleCountrySelect = (country) => {
        setCountry(country)
    };

    const handleStepChange = (index, value) => {
        const steps = [...recipeSteps];
        steps[index] = value;
        setRecipeSteps(steps);
    };

    const addStepField = () => {
        setRecipeSteps([...recipeSteps, '']);
    };

    return (

        <div className="hero">

            <div className="flexContainer">

                <div className="flexItem">

                    <form onSubmit={handleSubmit} action={<Link to="/login" />} className='form'>
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


                        <Button variant="outlined" color="success" type="submit">Send the recipe</Button>
                    </form>
                </div>
                <div className="flexItem">
                    <h1>Test</h1>
                </div>
            </div>



        </div>


    );
};

export default SignUp;
