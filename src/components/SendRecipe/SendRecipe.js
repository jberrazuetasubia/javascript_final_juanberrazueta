import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TextField,
  Button,
  Stack,
  Input,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import CountrySelect from "./CountryComponent";
import "./SendRecipe.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig from "../../database/firebase_config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

function SendRecipe() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [recipeName, setRecipeName] = useState([""]);
  const [recipeDescription, setRecipeDescription] = useState([""]);
  const [instructionsSet, setInstructions] = useState([""]);
  const [ingredientsSet, setIngredients] = useState([""]);
  const [recipeImage, setRecipeImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setRecipeName("");
    setRecipeDescription("");
    setInstructions([""]);
    setIngredients([""]);
    setRecipeImage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const imageRef = ref(storage, `recipeImages/${uuidv4()}`);
    await uploadBytes(imageRef, recipeImage);

    const imageUrl = await getDownloadURL(imageRef);

    const uid = uuidv4();
    const recipe = {
      uid: uid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country.label,
      recipeName: recipeName,
      recipeDescription: recipeDescription,
      instructions: instructionsSet,
      ingredients: ingredientsSet,
      imageURL: imageUrl,
    };

    try {
      await addDoc(collection(db, "recipes"), recipe);
      console.log("Recipe uploaded successfully!");
      setSuccessMessage("Recipe sent!");
    } catch (error) {
      console.error("Error uploading recipe:", error);
    }

    setLoading(false);
    resetFormFields();
  };

  const handleCountrySelect = (country) => {
    setCountry(country);
  };

  const handleIngredientChange = (index, value) => {
    const ingredients = [...ingredientsSet];
    ingredients[index] = value;
    setIngredients(ingredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredientsSet, ""]);
  };

  const handleInstructionsChange = (index, value) => {
    const instructions = [...instructionsSet];
    instructions[index] = value;
    setInstructions(instructions);
  };

  const addStepField = () => {
    setInstructions([...instructionsSet, ""]);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setRecipeImage(file);
  };

  return (
    <>
      {loading && (
        <div className="loaderContainer">
          <CircularProgress className="progress" color="success" />
        </div>
      )}
      <motion.h1
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Send your recipe!
      </motion.h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="flexContainer">
          <div className="flexItem">
            <h2>Tell us about yourself!</h2>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                variant="outlined"
                color="success"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
              />
              <TextField
                type="text"
                variant="outlined"
                color="success"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Stack>
            <TextField
              type="email"
              variant="outlined"
              color="success"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <h2>Write your recipe</h2>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <div style={{ width: "100%" }}>
                <h3 style={{ textAlign: "left" }}>Where it is from?</h3>
                <CountrySelect
                  value={country}
                  onCountrySelect={handleCountrySelect}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3 style={{ textAlign: "left" }}>
                  What is the name of the dish?
                </h3>
                <TextField
                  type="text"
                  variant="outlined"
                  color="success"
                  label="Name of recipe"
                  onChange={(e) => setRecipeName(e.target.value)}
                  value={recipeName}
                  fullWidth
                  required
                />
              </div>
            </Stack>
            <h3 style={{ textAlign: "left" }}>Write the recipe description</h3>
            <TextField
              type="text"
              variant="outlined"
              color="success"
              label="Name of recipe"
              onChange={(e) => setRecipeDescription(e.target.value)}
              value={recipeDescription}
              fullWidth
              required
            />
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ textAlign: "left" }}>List all your ingredients!</h4>
              {ingredientsSet.map((ingredient, index) => (
                <TextField
                  key={index}
                  type="text"
                  variant="outlined"
                  color="success"
                  label={`Ingredient ${index + 1}`}
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  value={ingredient}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
              ))}
              <Button
                className="add"
                variant="outlined"
                color="success"
                onClick={addIngredientField}
              >
                Add new ingredient
              </Button>
            </div>
          </div>
          <div className="flexItem">
            <h3 style={{ textAlign: "left" }}>Write all the instructions!</h3>
            {instructionsSet.map((instructions, index) => (
              <TextField
                key={index}
                type="text"
                variant="outlined"
                color="success"
                label={`Instructions ${index + 1}`}
                onChange={(e) =>
                  handleInstructionsChange(index, e.target.value)
                }
                value={instructions}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            ))}
            <Button
              className="add"
              variant="outlined"
              color="success"
              onClick={addStepField}
            >
              Add new step
            </Button>
            <h3 style={{ textAlign: "left" }}>Upload your recipe photo!</h3>
            <div style={{ textAlign: "left" }}>
              <Input
                type="file"
                onChange={handleFileChange}
                inputProps={{ accept: "image/*" }}
                color="success"
                style={{ width: "100%" }}
                endAdornment={
                  <IconButton color="success" component="span">
                    <CloudUploadIcon />
                  </IconButton>
                }
              />
            </div>
            {!loading && (
              <Button
                className="submitButton"
                variant="outlined"
                color="success"
                type="submit"
              >
                Send the recipe
              </Button>
            )}
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default SendRecipe;
