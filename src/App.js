import './App.scss';
import { Routes, Route } from 'react-router-dom';



//COMPONENTS IMPORTS
import HomePage from './components/Home/Home';
import Header from './components/Header/Header';
import SendRecipe from './components/SendRecipe/SendRecipe';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <div className="App">
        <Header />


        <Routes>
          <Route path="/" element={<HomePage/> }  />
          <Route path="/send-recipe" element={<SendRecipe/>} />
          <Route path="/about-us" element={<AboutUs />}/>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>
    </>

  );
}

export default App;
