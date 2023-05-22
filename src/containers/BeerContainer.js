//step1: import hooks
//step2: make component
import React, { useState, useEffect } from 'react';

const BeerContainer = () => {
  const [beer, setBeer] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    getBeer();
  }, []);

  const getBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(res => res.json())
      .then(data => {
        setBeer(data);
        setShowInfo(false);
      });
  }

  const showBeer = () => {
    if (beer.length > 0) {
      return (
        <>
          <p>{beer[0].name}</p>
          <img src={beer[0].image_url} alt={beer[0].name} style={{ width: '200px', height: '300px' }} />
        </>
      )
    } else {
      return null;
    }
  };

  const showFoodPairing = () => {
    if (beer.length > 0) {
      return beer[0].food_pairing.map((item) => (
        <p>{item}</p>
      ));
    } else {
      return null;
    }
  };

  const showMore = () => {
    setShowInfo(prevState => !prevState);
  }

  const getBeerInfo = () => {
    if (beer.length > 0 && showInfo) {
      return (
        <>
          <p>Name: {beer[0].name}</p>
          <p>Abv: {beer[0].abv}</p>
          <p>Description: {beer[0].description}</p>
          <div>Food Pairing: {showFoodPairing()}</div>
        </>
      )
    } else {
      return null;
    }
  }

  return (
    <div className="main-container">
      <p>This is the main page</p>
      <button className='beer-select' onClick={getBeer}>Click Me</button>
      <button className='beer-info' onClick={showMore}>
        {showInfo ? 'Hide Info' : 'More Info'}
      </button>
      {showBeer()}
      {getBeerInfo()}
    </div>
  )
};

export default BeerContainer;
