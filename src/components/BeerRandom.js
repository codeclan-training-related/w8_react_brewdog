import React from 'react';
import BeerInfo from './BeerInfo';

const BeerRandom = ({ beer, getBeer, showMore, saveRandom, showInfo, isSaved,selectedBeers }) => {
  return (
    <>
      {beer && (
        <>
          <div className="main-container">
            <button className="beer-select" onClick={getBeer}>
              Any Beer
            </button>
            <button className="beer-save" onClick={saveRandom}>
              {isSaved ? 'Saved' : 'Save'}
            </button>
            
          </div>
          <div>
            <p>{beer.name}</p>
            <img src={beer.image_url} alt={beer.name} style={{ width: '200px', height: '300px' }} />
          </div>
          {showInfo && <BeerInfo beer={beer} showInfo={showInfo} />}
        </>
      )}
    </>
  );
};

export default BeerRandom;
