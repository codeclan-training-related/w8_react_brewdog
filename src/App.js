import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import NavBar from './components/NavBar';
import WishList from './components/WishList';
import FilterBeer from './components/FilterBeer'
import BeerRandom from './components/BeerRandom';
import BeerInfo from './components/BeerInfo';



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


  console.log(`jjjjjj`)



  const showMore = () => {
    setShowInfo((prevState) => !prevState);
  };

  const saveSelected = () => {
    const isNewBeer = selectedBeers.some((selectedBeer) => selectedBeer.id === beer.id);
    if (!isNewBeer) {
      setSelectedBeers([...selectedBeers, beer]);
      setIsSaved(true); 
    }

  };
  
  const removeBeer = (beerId) => {
    setSelectedBeers((prevState) => prevState.filter((beer) => beer.id !== beerId));
  };


  const handleInput = (food) => {
    const filteredBeers = allBeers.filter((beer) => {
      return beer.food_pairing.some((beerFood) =>
        beerFood.toLowerCase().includes(food.toLowerCase())
      );
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



     <Route path="/filterBeer" element={<FilterBeer allBeers={allBeers} handleInput={handleInput}filteredBeers={filteredBeers}/>} />
 
          <Route
            path="/wishlist"
            element={selectedBeers ? <WishList selectedBeers={selectedBeers} removeBeer={removeBeer} /> : null}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
