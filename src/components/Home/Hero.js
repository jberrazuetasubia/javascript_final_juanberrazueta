
import { Link } from 'react-router-dom';

import "./Hero.scss";
import ImageGrid from "./ImageGrid";
const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="flexContainer">
          <div className="flexItem">
            <h2>Find recipies from every part of the</h2>
            <h1>World</h1>
            <h1>Panita Food</h1>
            <button><Link to="/send-recipe" >Send your recipe now!</Link></button>
          </div>
          <div className="flexItem">
            <ImageGrid className="imageGrid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;