import React, { useState, useEffect } from 'react';
import BeerRandom from '../components/BeerRandom';
import BeerInfo from '../components/BeerInfo';
import WishList from '../components/WishList';

const BeerContainer = () => {
  const [beer, setBeer] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedBeers, setSelectedBeers] = useState([]);

  useEffect(() => {
    getBeer();
  }, []);

  const getBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(res => res.json())
      .then(data => {
        setBeer(data[0]);
      });
  }

  const showMore = () => {
    setShowInfo(prevState => !prevState);
  }

  const saveSelected = () => {
    setSelectedBeers([...selectedBeers, beer]);
  }

  return (
    <>
      <div className="main-container">
        <button className='beer-select' onClick={getBeer}>Any Beer</button>
        <button className='beer-info' onClick={showMore}>
          {showInfo ? 'Hide Info' : 'More Info'}
        </button>
        <button className='beer-save' onClick={saveSelected}>Save</button>
        <BeerRandom beer={beer} />
        <BeerInfo beer={beer} showInfo={showInfo} />
      
        {selectedBeers ? <WishList selectedBeers={selectedBeers} /> : null}
      </div>
    </>
  )
};

export default BeerContainer;
