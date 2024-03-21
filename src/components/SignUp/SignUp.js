
import React, {  useState } from 'react';
import { motion } from 'framer-motion';

import { TextField, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"

import './SignUp.scss';
function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password)
    }


    return (

        <div className="hero">
            <div className="flexContainer">
                <div className="flexItem">
                    <motion.h1
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className='title'
                    >
                        Sign Up
                    </motion.h1>
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
                        <TextField
                            type="password"
                            variant='outlined'
                            color='success'
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="date"
                            variant='outlined'
                            color='success'
                            label="Date of Birth"
                            onChange={e => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Button variant="outlined" color="success" type="submit">Register</Button>
                    </form>
                    <small>Already have an account? <Link to="/login">Login Here</Link></small>
                </div>
                <div className="flexItem">
                    <h1>Test</h1>
                </div>
            </div>



        </div>


    );
};

export default SignUp;
