import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import NavBar from './components/NavBar';
import WishList from './components/WishList';
import FilterBeer from './components/FilterBeer'
import BeerRandom from './components/BeerRandom';
import BeerInfo from './components/BeerInfo';
import Buttons from './components/Buttons'; 



function App() {
  const [beer, setBeer] = useState(null);  
  const [showInfo, setShowInfo] = useState(false);
  const [selectedBeers, setSelectedBeers] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [allBeers,setAllBeers]=useState([]);
  const [filteredBeers,setFilteredBeers]=useState([]);



  const getAllBeers = () => {
    const promises=[1,2].map((number)=>{
      return fetch(`https://api.punkapi.com/v2/beers?page=${number}&per_page=80`).then((res)=>res.json());
    });
    Promise.all(promises).then((data)=>{
      const combinedResponses=data.flat();
      setAllBeers(combinedResponses);
      setIsSaved(false);
  
      })};
    
  
  const getBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then((res) => res.json())
      .then((data) => {
        setBeer(data[0]);
        setIsSaved(false);
      });
  };
  

  useEffect(() =>{getBeer()},[]);
  useEffect(()=>{getAllBeers()},[]);



  const showMore = (beerId) => {
   if(beerId!==null)
   return(
    setShowInfo((prevState) => !prevState))}


 




    const saveSelected = (beerId) => {
      const selectedBeer = allBeers.find((beer) => beer.id === beerId);
      const isNewBeer = selectedBeers.some((selectedBeer) => selectedBeer.id === beerId);
      const changeSaveButton=()=>{
        isNewBeer?setIsSaved(true):setIsSaved(false);
      }
    
      if (!isNewBeer && selectedBeer) {
        setSelectedBeers([...selectedBeers, selectedBeer]);
        changeSaveButton();
      }
    };


  
  const removeBeer = (beerId) => {
    setSelectedBeers((prevState) => prevState.filter((beer) => beer.id !== beerId));
  };


  const handleInput = (food) => {
    const filteredBeers = allBeers.filter((beer) => {
      return beer.food_pairing.some((paired_food) => paired_food.toLowerCase().includes(food.toLowerCase()));
    });
  
    setFilteredBeers(filteredBeers);
  };
  
  


  return (
    <div className="App" style={{ backgroundImage: `url('./beer1.jpg')` }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home  selectedBeers={selectedBeers} removeBeer={removeBeer}/>} />

          <Route
            path="/randomBeer"
            element={
              <BeerRandom
                beer={beer}
                getBeer={getBeer}
                showMore={showMore}
                saveSelected={saveSelected}
                isSaved={isSaved}
                showInfo={showInfo}
              />
            }
          />



     <Route path="/filterBeer" element={<FilterBeer allBeers={allBeers} handleInput={handleInput}filteredBeers={filteredBeers}  showMore={showMore} saveSelected={saveSelected} showInfo={showInfo} isSaved={isSaved} beer={beer} />} />
 
     <Route
  path="/wishlist"
  element={
    selectedBeers ? (
      <WishList filteredBeers={filteredBeers} savedBeerIds={selectedBeers.map((beer) => beer.id)} removeBeer={removeBeer} />
    ) : null
  }
/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;